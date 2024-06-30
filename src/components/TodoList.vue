<template>
  <div class="common-layout">
    <el-container>
      <el-header style="text-align:center"><h2>Todo list ({{ todoItems.length }} items)</h2></el-header>
      <el-main>
        <el-row>
          <el-col :span="8" style="padding-right: 20px">
            <todo-form @setTodoItems="handleSetTodoItems"/>
          </el-col>
          <el-col :span="16">
            <el-row gutter=10>
              <el-col v-for="(item, index) in todoItems" :span="8" style="margin-bottom: 20px" :key="item.id">
                <todo-item :item="item" :index="index" @refreshTodoItem="handleStatusChange" @removeTodoItem="handleRemoveTodoItem"/>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TodoForm from "./TodoForm.vue"
import TodoItem from "./TodoItem.vue"
import storage from "../storage/LocalStorage.js";
import {ElContainer, ElHeader, ElMain, ElRow, ElCol} from 'element-plus'

export default {
  name: 'TodoList',
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    TodoForm,
    TodoItem,
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol
  },
  methods: {
    handleSetTodoItems(data) {
      const savedItem = storage.saveItem(data)
      this.todoItems.push(savedItem);
    },
    handleRemoveTodoItem(index) {
      this.todoItems.splice(index, 1);
    },
    handleStatusChange(newStatus, index) {
      this.todoItems[index].status = newStatus;
    }
  },
  created() {
    this.todoItems = storage.getItems();
  }
}
</script>
