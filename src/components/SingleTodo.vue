<template>
  <div class="card mb-2 mb-3" :class="{ 'bg-danger': todo.completed }">
    <div
      class="card-body d-flex justify-content-between user-select-none"
      @dblclick="completeBtn(todo)"
    >
      <div class="me-2">
        {{ todo.title }}
      </div>
      <div>
        <button
          class="btn btn-sm btn-danger"
          @click="deleteTodo(todo.id)"
          :disabled="isDelete"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { ref } from "vue";

export default {
  props: ["todo"],
  setup() {
    let isDelete = ref(false);

    let deleteTodo = (id) => {
      isDelete.value = true;
      store.dispatch("deleteTodo", id).then(() => (isDelete.value = false));
    };

    let completeBtn = async (todo) => {
      todo.completed = !todo.completed; //create json-server
      await store.dispatch("updateTodoComplete", todo);
    };

    return { deleteTodo, isDelete, completeBtn };
  },
};
</script>
<style></style>
