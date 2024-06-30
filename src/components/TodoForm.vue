<template>
  <el-form :model="form">
    <h3 class="text-large font-600 mr-3">Create Todo Item</h3>
    <el-form-item>
      <el-input v-model="form.title" placeholder="Title" size="large" @blur="validateField('title')"/>
    </el-form-item>
    <el-text class="mx-1" type="danger" v-if="errors.title">{{ errors.title }}</el-text>
    <el-form-item>
      <el-input type="textarea" v-model="form.description" placeholder="Description" size="large"/>
    </el-form-item>
    <el-form-item>
      <el-select
          v-model="form.status"
          placeholder="Select"
          size="large"
      >
        <el-option
          v-for="item in todoStatuses"
          :key="item.id"
          :label="item.title"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-button @click.stop="handleSubmit" type="primary">Save</el-button>
  </el-form>
</template>

<script>
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElText, ElButton} from "element-plus";
import {todoStatuses} from "../common/options.js";
import {validationSchema} from "../schemas/validationSchema.js";

export default {
  name: 'TodoForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElText,
    ElButton
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        status: 'new'
      },
      errors: {}
    }
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    async validateField(field) {
      try {
        await validationSchema.validateAt(field, this.form);
        this.errors[field] = null;
      } catch (err) {
        this.errors[field] = err.message;
      }
    },
    async validate() {
      try {
        await validationSchema.validate(this.form, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
        return false;
      }
    },
    async handleSubmit() {
      const isValid = await this.validate();
      if (isValid) {
        this.$emit('setTodoItems', this.form);
        this.initForm();
      }
    },
    initForm() {
      this.form.title = '';
      this.form.description = '';
      this.form.status = 'new';
      this.errors = {};
    }
  }
}
</script>
