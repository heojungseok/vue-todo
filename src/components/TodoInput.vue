<template>
  <div class="inputBox shadow">
    <input class="" v-model="newTodoItem" @keyup.enter="addTodo" type="text" placeholder="input here !!!!">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus-circle addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem : '',
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem);
      // 저장하는 로직
      localStorage.setItem('temp', this.newTodoItem);
      // 인풋 초기화
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
