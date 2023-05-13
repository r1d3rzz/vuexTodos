<template>
  <AddTodo />
  <div v-if="myTodos.length" class="row mt-3">
    <div v-for="todo in myTodos" :key="todo.id" class="col-md-4">
      <SingleTodo :todo="todo" />
    </div>
  </div>
  <div v-else>
    <div class="card">
      <div class="card-body text-center">
        <div class="fs-4">
          <span class="text-primary">"{{ myCurrent }}"</span> is Empty
        </div>
      </div>
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
    let myTodos = computed(() => store.getters.myTodos);
    let myCurrent = computed(() => store.getters.myCurrent);

    onMounted(() => {
      return store.dispatch("getTodos");
    });

    return {
      myTodos,
      myCurrent,
    };
  },
};
</script>
<style></style>
