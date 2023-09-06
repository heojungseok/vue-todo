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
    mutations: {

    },
    actions: {

    }

});
