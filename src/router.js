import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from './pages/ArticleList.vue'
import AddArticle from "./pages/AddArticle.vue";
import ArticleDetail from "./pages/ArticleDetail.vue";

const routes = [
    {path: '/', component: ArticleList, name: 'home'},
    {path: '/create', component: AddArticle, name: 'create'},
    {path: '/view/:id', component: ArticleDetail, name: 'view'},
]

const router = createRouter({history: createWebHistory(), routes})
export default router
