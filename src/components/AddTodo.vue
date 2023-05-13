<template>
  <div class="card my-2 bg-dark rounded-0 sticky-top">
    <div class="card-body">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="title"
          placeholder="Add your new Todos here..."
        />
        <button class="btn btn-primary" @click="addTodos" :disabled="isAdding">
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { ref } from "vue";

export default {
  setup() {
    let title = ref("");
    let isAdding = ref(false);

    let addTodos = () => {
      if (title.value == "") return;

      isAdding.value = true;
      let newTodo = {
        title: title.value,
      };
      store.dispatch("addTodo", newTodo).then(() => {
        title.value = "";
        isAdding.value = false;
      });
    };

    return { title, addTodos, isAdding };
  },
};
</script>
<style></style>
