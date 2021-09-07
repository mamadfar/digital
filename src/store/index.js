import { createStore } from 'vuex'

export default createStore({
  state: {
    todos
  },
  mutations: {
    setTodo(state, newTodo) {
      state.todos = [...state.todos, newTodo];
    }
  },
  actions: {
  },
  modules: {
  }
})
