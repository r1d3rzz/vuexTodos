<template>
  <div class="card mb-2">
    <div class="card-body d-flex justify-content-between">
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

    return { deleteTodo, isDelete };
  },
};
</script>
<style></style>
