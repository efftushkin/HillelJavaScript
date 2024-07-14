<template>
    <el-form :model="article">
      <el-form-item>
        <el-input v-model="article.title" placeholder="Title" size="large" @blur="validateField('title')"/>
      </el-form-item>
      <el-text class="mx-1" type="danger" v-if="errors.title">{{errors.title}}</el-text>
      <el-form-item>
        <el-input type="textarea" v-model="article.content" placeholder="Content" size="large"/>
      </el-form-item>
      <el-button type="success" @click.stop="handleSubmit">Save</el-button>
      <el-button type="danger" @click="handleBack()">Cancel</el-button>
    </el-form>
  </template>
  
  <script>
  import {ElForm, ElFormItem, ElInput, ElText, ElButton} from "element-plus";
  import {validationSchema} from "../schemas/ValidationSchema.js";
  
  export default {
    name: 'AddArticle',
    components: {
      ElForm,
      ElFormItem,
      ElInput,
      ElText,
      ElButton
    },
    data() {
      return {
        article: {
          title: '',
          content: ''
        },
        errors: {}
      }
    },
    methods: {
      async validateField(field) {
        try {
          await validationSchema.validateAt(field, this.article);
          this.errors[field] = null;
        } catch (err) {
          this.errors[field] = err.message;
        }
      },
      async validate() {
        try {
          await validationSchema.validate(this.article, {abortEarly: false});
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
      handleBack() {
        this.$router.push('/')
      },
      async handleSubmit() {
        const isValid = await this.validate();
        if (isValid) {
          this.$emit('saveArticle', this.article);
        }
      }
    }
  }
  </script>