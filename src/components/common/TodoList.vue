<template>
  <div>
    <ul>
      <li v-for="(todo, index) in this.$store.state.todoItems" v-bind:key="todo.item" class="shadow">
        <i class="fas fa-solid fa-check checkBtn" :class="{ checkBtnCompleted: todo.completed }" @click="toggleComplete(todo, index)"></i>
        <span :class="{ textCompleted: todo.completed }">{{ todo.item }}</span>
        <span class="removeBtn" @click="removeTodo(todo, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  watch: {
    item(obj) {
      if(obj.length === 0){
        this.todoItems = obj;
      }
    }
  },
  methods: {
    removeTodo(todo, index) {
      // this.$emit('removeTodo', todo, index);
      this.$store.commit('removeTodo', {item: todo, idx: index});
    },
    toggleComplete(todo, index) {
      // this.$emit('toggleComplete', todo, index);
      this.$store.commit('toggleComplete', {todo, index});
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
