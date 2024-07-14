<template>
  <el-container style="max-width: 1250px; margin: 0 auto">
    <el-header>
      <h2 class="text-large font-600 mr-3">New Article</h2>
    </el-header>
    <el-main>
      <article-form @saveArticle="handleSaveArticle" />
    </el-main>
  </el-container>
</template>

<script>
import {ElContainer, ElHeader, ElMain} from "element-plus";
import ArticleForm from "../components/ArticleForm.vue";
import storage from "../storage/LocalStorage.js";
import {validationSchema} from "../schemas/ValidationSchema.js";

export default {
  name: 'AddArticle',
  components: {
    ArticleForm,
    ElContainer,
    ElHeader,
    ElMain
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
        await validationSchema.validate(this.form, {abortEarly: false});
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
    async handleSaveArticle(data) {
      storage.saveArticle({...data});
      this.$router.push('/')
    },
  }
}
</script>