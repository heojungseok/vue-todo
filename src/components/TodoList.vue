<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoItems" v-bind:key="todo" class="shadow">
        {{ todo }}
        <span class="removeBtn" @click="removeTodo(todo, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  // 라이프 사이클 중 인스턴스가 생성되자마자 호출 되는 훅
  created() {
    this.initData();
  },
  methods: {
    initData() {
      for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.key(index) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(index));
        }
      }
    },
    removeTodo(todo, index) {
      localStorage.removeItem(todo);
      this.todoItems.splice(index, 1);
      // slice() 베열 변경 없음
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none; /* 점 업애는 것 */
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
