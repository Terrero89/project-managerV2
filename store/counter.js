import { defineStore } from 'pinia'


export const useStore = defineStore('counter', {

      state:()=>{
        return{

          counter: 5,
          name: "sergio Terrero",
          isAdmin: true,
        }
      },
      getters:{
        doubleCount(state){
          return state.counter * 2;
        }
      },

})
