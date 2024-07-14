<template>
  <div class="common-layout">
    <el-container style="max-width: 1250px; margin: 0 auto">
      <el-header style="text-align:center"><h2>Blog ({{ articles.length }} articles)</h2></el-header>
      <el-main>
        <el-button class="mt-4" type="success" style="width: 100%" @click="onAddArticle">Add Article</el-button>
        <el-table :data="articles" style="width: 100%" @removeArticle="handleRemove">
          <el-table-column prop="title" label="Title" width="200" />
          <el-table-column prop="content" label="Content" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default="scope">
              <el-button type="primary" size="small" @click.prevent="handleView(scope.row)">
                View
              </el-button>
              <p />
              <el-button type="danger" size="small" @click.prevent="handleRemove(scope.row)">
                Remove
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {ElContainer, ElHeader, ElMain, ElButton, ElTable, ElTableColumn} from 'element-plus'
import storage from "../storage/LocalStorage.js";

export default {
  name: 'ArticleList',
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElButton,
    ElTable,
    ElTableColumn
  },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    onAddArticle() {
      this.$router.push({name: 'create'})
    },
    handleView(row) {
      this.$router.push(`view/${row.id}`)
    },
    handleRemove(row) {
      storage.removeItem(row.id);
      this.articles = storage.getItems();
    }
  },
  created() {
    this.articles = storage.getItems();
  },
}
</script>
