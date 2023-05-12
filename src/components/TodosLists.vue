<template>
  <div v-if="todos.length" class="row mt-3">
    <div v-for="todo in todos" :key="todo.id" class="col-md-4">
      <div class="card">
        <div class="card-body">
          {{ todo.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { computed } from "vue";

export default {
  setup() {
    let todos = computed(() => store.getters.myTodos);

    return { todos };
  },
};
</script>
<style></style>
