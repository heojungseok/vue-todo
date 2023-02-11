<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addOneItem"></TodoInput>
    <TodoList
      :items="todoItems"
      v-on:removeTodo="removeTodo"
      v-on:toggleComplete="toggleComplete"
    ></TodoList>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
/* 
  UI 로 표시가 되는 프레젠테이셔널 컴포넌트 
*/
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  // 라이프 사이클 중 인스턴스가 생성되자마자 호출 되는 훅
  created() {
    this.initData();
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    initData() {
      for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(index)))
          );
        }
      }
    },
    addOneItem(obj) {
      localStorage.setItem(obj.item, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodo(todo, index) {
      localStorage.removeItem(todo.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todo, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo));
    },
    clearTodo(obj) {
      localStorage.clear();
      this.todoItems = obj;
    },
  },
};
</script>

<style>
/* scope 설정 안해놔서  하위 컴포넌트에 적용 됨*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
