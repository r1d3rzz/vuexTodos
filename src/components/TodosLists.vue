<template>
  <AddTodo />
  <div v-if="todos.length" class="row mt-3">
    <div v-for="todo in todos" :key="todo.id" class="col-md-4">
      <SingleTodo :todo="todo" />
    </div>
  </div>
</template>
<script>
import SingleTodo from "./SingleTodo";
import AddTodo from "./AddTodo";
import store from "@/store";
import { computed, onMounted } from "vue";

export default {
  components: {
    SingleTodo,
    AddTodo,
  },
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
