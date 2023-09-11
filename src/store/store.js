import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); //  use(): Vue 플러그인 영역 (전역 영역에 사용할 때 이용)

const storage = {
    fetch() {
        const arr = [];
        for (let index = 0; index < localStorage.length; index++) {
          if (localStorage.key(index) !== "loglevel:webpack-dev-server") {
            arr.push(
              JSON.parse(localStorage.getItem(localStorage.key(index)))
            );
          }
        }
        return arr;
      },
}

export const store = new Vuex.Store({
    // 여러 컴포넌트 간에 공유할 데이터 - 상태
    state: {
        num: 10,
        headerText: 'TODO it !!!!!!!!!!!!!!',
        todoItems: storage.fetch(),

    },
    // state 값을 접근하는 속성이자 computed()처럼 미리 연산된 값을 접근하는 속성
    getters: {
        getNumber(state){ 
            return state.num;
        },
        getDoubleNumber(state) {
            return state.num * 2;
        }
    },
    // state 값을 변경할 수 있는 유일항 방법 - 메소드
    // commit() 으로 동작 시킴 => 인자도 같이 넘길 수 있음
    mutations: {
      addOneItem(state, obj) {
        localStorage.setItem(obj.item, JSON.stringify(obj));
        state.todoItems.push(obj);
      },
      removeTodo(state, todo) {
        localStorage.removeItem(todo.item.item);
        state.todoItems.splice(todo.idx, 1);
      },
      toggleComplete(state, todo) {
        
        state.todoItems[todo.index].completed = !state.todoItems[todo.index].completed
        localStorage.removeItem(todo.todo.item);
        localStorage.setItem(todo.todo.item, JSON.stringify(todo.todo));

      },
      clearTodo(state, obj) {
        localStorage.clear();
        state.todoItems = obj;
      },
    },
    
    actions: {

    }

});
