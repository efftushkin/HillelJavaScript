<template>
  <el-form :model="form">
    <h3 class="text-large font-600 mr-3">Create Todo Item</h3>
    <el-form-item>
      <el-input v-model="form.title" placeholder="Title" size="large"/>
    </el-form-item>
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
import {ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton} from "element-plus";
import {todoStatuses} from "../common/options.js";

export default {
  name: 'TodoForm',
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElButton
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        status: 'new'
      }
    }
  },
  computed: {
    todoStatuses() {
      return todoStatuses;
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('setTodoItems', this.form);
    }
  }
}
</script>
