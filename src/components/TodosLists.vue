<template>
  <AddTodo />
  <div v-if="todos.length" class="row mt-3">
    <div v-for="todo in todos" :key="todo.id" class="col-md-4">
      <div class="card mb-2">
        <div class="card-body">{{ todo.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import AddTodo from "./AddTodo";
import store from "@/store";
import { computed, onMounted } from "vue";

export default {
  components: { AddTodo },
  setup() {
    let todos = computed(() => store.getters.myTodos);

    onMounted(() => {
      return store.dispatch("getTodos");
    });

    return {
      todos,
    };
  },
};
</script>
<style></style>
