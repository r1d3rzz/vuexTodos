import axios from "axios";

export default {
  state: {
    todos: [],
    current: "all",
  },
  getters: {
    myTodos(state) {
      if (state.current == "complete") {
        return state.todos.filter((todo) => {
          return todo.completed;
        });
      }

      if (state.current == "onGoing") {
        return state.todos.filter((todo) => {
          return !todo.completed;
        });
      }

      return state.todos;
    },

    myCurrent(state) {
      return state.current;
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

    updateCurrent(state, value) {
      return (state.current = value);
    },

    updateTodo(state, todo) {
      state.todos.forEach((t) => {
        if (t.id == todo.id) {
          t = todo;
        }
      });
    },
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get("http://localhost:3000/todos");
      let todos = res.data;
      commit("setTodos", todos);
    },

    async addTodo({ commit }, newTodo) {
      let res = await axios.post("http://localhost:3000/todos", newTodo);
      commit("setTodo", res.data);
    },

    async deleteTodo({ commit }, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      commit("removeTodo", id);
    },

    async filterTodos({ commit }, current) {
      await axios.get(`http://localhost:3000/todos`);
      commit("completeFilterTodos", current);
    },

    async updateTodoComplete({ commit }, todo) {
      let res = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo);
      commit("updateTodo", res.data);
    },
  },
};
