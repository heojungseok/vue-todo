<template>
  <div class="inputBox shadow">
    <input v-model="newTodoItem" @keyup.enter="addTodo" type="text" placeholder="할 일을 입력해주세요."/>
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus-circle addBtn"></i>
    </span>

    <ToDoModal v-if="showModal">
      <!-- you can use custom content here to overwrite default content -->
    <!-- 
      slot: 뷰에서 유용하게 쓰이는 기능, 
        특정 컴포넌트의 일부 UI를 재사용 할 수 있는 기능 
    -->
      <h3 slot="header">경고! 
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">빈 칸 입니다. 내용 입력해주세요.</div> 
      <div slot="footer"></div>
    </ToDoModal>
  </div>
</template>

<script>
import ToDoModal from "./common/ToDoModal.vue";

export default {
  components: {
    'ToDoModal': ToDoModal,
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let obj = { completed: false, item: this.newTodoItem };
        this.$emit("addTodo", obj);
        // 인풋 초기화
        this.clearInput();
      } else {
        this.showModal =  !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
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
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
