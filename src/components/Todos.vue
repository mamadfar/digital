<template>
  <div>
    <h1>{{ this.$store.state.todos }}</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div>
          <span>{{ todo.title }}</span>
          <div>{{ todo.description }}</div>
        </div>
      </li>
    </ul>
    <div>
      <form @submit="handleSendTodo">
        <input type="text" v-model="this.title">
        <textarea name="" id="" cols="30" rows="10" v-model="this.description"></textarea>
        <input type="checkbox" v-model="this.isForce">
        <select name="" id="" :option="this.status"></select>
        <button>add</button>
      </form>
    </div>
    <button @click="mamad">aaaaaaaaaa</button>
  </div>
</template>

<script lang="ts">

import data from "../utils/data";

export default {
  name: "Todos",
  props: {
    msg: String,
  },
  data() {
    return {
      todos: data,
      title: null,
      description: null,
      isForce: false,
      status: ["on-going", "waiting", "done"]
    };
  },
  methods: {
    handleSendTodo(e: any): void {
      e.preventDefault();
      
    },
    mamad() {
      this.$store.commit("setTodo", "ahmad")
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style: none;
  text-align: center;
  li {
    margin: 1rem 0;
  }
}
</style>
