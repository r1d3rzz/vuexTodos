<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <div class="card">
          <div class="card-body">
            <div class="fs-3 text-center">Todos</div>
          </div>
        </div>
      </div>
    </div>
    <TodosLists />
  </div>
</template>
<script>
import TodosLists from "./components/TodosLists";
export default {
  components: { TodosLists },
};
</script>
<style></style>
