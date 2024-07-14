<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h3>#{{article.id}} - {{article.title}}</h3>
      </div>
    </template>
    <div>
      <pre>{{article.content}}</pre>
    </div>
    <template #footer>
      <div>
        <el-button type="primary" @click="handleBack()">Back</el-button>
        <el-button type="danger" @click="handleRemoveArticle()">Remove</el-button>
      </div>
    </template>
  </el-card>
</template>

<script>
import storage from "../storage/LocalStorage.js";
import {ElCard, ElButton} from 'element-plus'

export default {
  name: 'ArticleDetail',
  components: {
    ElCard,
    ElButton
  },
  data() {
    return {
      article: {
        id: {type: Number},
        title: {type: String},
        content: {type: String}
      }
    }
  },
  methods: {
    handleBack() {
      this.$router.push('/')
    },
    handleRemoveArticle() {
      storage.removeItem(this.article.id);
      this.$router.push('/')
    },
  },
  created() {
    this.article = storage.getItemById(this.$route.params.id);
  }
}
</script>