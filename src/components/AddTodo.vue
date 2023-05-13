<template>
  <div class="card my-2 bg-dark rounded-0 sticky-top">
    <div class="card-body">
      <div class="input-group">
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="current"
          @change="filterTodos"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="onGoing">On Going</option>
        </select>
        <input
          type="text"
          class="form-control w-75"
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
import { computed, ref } from "vue";

export default {
  setup() {
    let myCurrent = computed(() => store.getters.myCurrent);

    let title = ref("");
    let current = ref(myCurrent.value);
    let isAdding = ref(false);

    let addTodos = () => {
      if (title.value == "") return;

      isAdding.value = true;
      let newTodo = {
        title: title.value,
        completed: false,
      };
      store.dispatch("addTodo", newTodo).then(() => {
        title.value = "";
        isAdding.value = false;
      });
    };

    let filterTodos = () => {
      store.commit("updateCurrent", current.value);
    };

    return { title, addTodos, isAdding, current, filterTodos };
  },
};
</script>
<style></style>
