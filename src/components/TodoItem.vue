<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h3>#{{item.id}} - {{item.title}}</h3>
      </div>
    </template>
    <div>
      <p>{{ item.description }}</p>
      <p>{{ item.status }}</p>
      <el-select
        v-model="newStatus"
        placeholder="Select"
        size="small"
        @change="handleStatusChange()"
      >
        <el-option
            v-for="item in todoStatuses"
            :key="item.id"
            :label="item.title"
            :value="item.value"
        />
      </el-select>
    </div>
    <div>
      <el-button type="danger" @click="handleRemoveTodoItem()">Remove</el-button>
    </div>
  </el-card>
</template>

<script>
import {todoStatuses} from "../common/options.js";
import storage from "../storage/LocalStorage.js";
import {ElCard, ElSelect, ElOption, ElButton} from 'element-plus'

export default {
  name: 'ToDoItem',
  props: {
    item: {
      id: {type: Number},
      title: {type: String},
      description: {type: String},
      status: {type: String}
    },
    index: {type: Number}
  },
  data() {
    return {newStatus: this.item.status}
  },
  computed: {
    todoStatuses() {
      return todoStatuses
    }
  },
  components: {
    ElCard,
    ElSelect,
    ElOption,
    ElButton
  },
  methods: {
    handleStatusChange() {
      storage.changeItemStatus(this.item.id, this.newStatus);
      this.$emit('refreshTodoItem', this.newStatus, this.index);
    },
    handleRemoveTodoItem() {
      storage.removeItem(this.item.id);
      this.$emit('removeTodoItem', this.index);
    },
  }
}
</script>
