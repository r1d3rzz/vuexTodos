import axios from "axios";

export default {
  state: {
    todos: [],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },

    setTodo(state, todo) {
      state.todos.unshift(todo);
    },

    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;
      commit("setTodos", todos);
    },

    async addTodo({ commit }, newTodo) {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      commit("setTodo", res.data);
    },

    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("removeTodo", id);
    },
  },
};
