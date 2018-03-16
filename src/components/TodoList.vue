<template>
  <div id="todoList">
    <h1>Todo List</h1>
    <todo-add v-on:add="addTodo"></todo-add>
    <ul class="todos">
      <li v-for="todo, index in todos" class="todo">

        <!-- <input
          type="checkbox"
          name=""
          value=""
          :checked="todo.isCompleted"
          @click="completed(index)"
        > -->

        <mu-checkbox 

         :label="todo.text"
         :name="todo.user"
         :value="todo.isCompleted"
          :labelClass="todo.isCompleted ? 'completed' : ''"
          :input="todo.isCompleted"
          @change="completed(index)"
          uncheckIcon="visibility" 
          checkedIcon="visibility_off"
          
          />

        <!-- <span
          :class="todo.isCompleted ? 'completed' : ''"
          @click="completed(index)"
        > -->
        
          <!-- <em>{{ index+1 }}.</em>{{ todo.text }} -->
        <!-- </span> -->

        <!-- <button
      type="button"
      name="button"
      @click="delTodo(index)"
    >
       删除
    </button> -->

     <mu-icon-button
     
     @click="delTodo(index)"
      icon="delete_forever"
      />


      </li>
    </ul>
    <div>
      <p v-show="todos.length === 0">
        恭喜！所有的事情都已完成！
      </p>
      <p v-show="todos.length !== 0">
        共 <strong>{{ todos.length }}</strong> 个待办事项。{{ completedCounts }} 个已完成，{{ notCompletedCounts }} 个未完成。
      </p>
    </div>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd.vue";
export default {
  name: "TodoList",
  components: {
    TodoAdd
  },
  data: () => ({
    text: "",
    isCompleted: false,
    todos: []
  }),
  created: function() {
    let vueThis = this;

    fetch("http://192.168.99.100:8000/todo/")
      .then(code => {
        return code.json();
      })
      .then(pop => {
        vueThis.todos = eval(
          JSON.stringify(pop)
            .replace(/"flag":"1"/g, '"isCompleted":false')
            .replace(/"flag":"0"/g, '"isCompleted":true')
            .replace(/todo/g, "text")
        );
        //console.log(vueThis.todos);
      });
  },
  methods: {
    completed(index) {
      var vinfo;

      if (this.todos[index].isCompleted == false) {
        vinfo = 0;
      } else {
        vinfo = 1;
      }

      this.todos[index].isCompleted = !this.todos[index].isCompleted;

      var params = {
        user: this.todos[index].user,
        flag: vinfo,
        todo: this.todos[index].text
      };

      var keys = this.todos[index].id;

      fetch("http://192.168.99.100:8000/todo/" + keys + "/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(params)
      }).then(function(response) {
        console.log(response);
      });
    },
    addTodo(todo) {

       let vueThis = this;


      this.todos.push({
        text: todo,
        isCompleted: false
      });

      var params = {
        user: this.todos[1].user,
        flag: 1,
        todo: todo,
        priority: 1
      };

      fetch("http://192.168.99.100:8000/todo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(params)
      }).then(function(response) {
        console.log(response);
              fetch("http://192.168.99.100:8000/todo/")
        .then(code => {
          return code.json();
        })
        .then(pop => {
          vueThis.todos = eval(
            JSON.stringify(pop)
              .replace(/"flag":"1"/g, '"isCompleted":false')
              .replace(/"flag":"0"/g, '"isCompleted":true')
              .replace(/todo/g, "text")
          );

        });

      });

    },

    delTodo(index) {
   
      var keys = this.todos[index].id;
      fetch("http://192.168.99.100:8000/todo/" + keys + "/", {
        method: "DELETE"
      }).then(function(response) {
        console.log(response);
      });
      this.todos.splice(index, 1);
    }

  },
  computed: {
    completedCounts() {
      return this.todos.filter(item => item.isCompleted).length;
    },
    notCompletedCounts() {
      return this.todos.filter(item => !item.isCompleted).length;
    }
  }
};
</script>
<style scoped>
#todoList {
  margin: 0 auto;
  max-width: 350px;
}
.todos li {
  list-style: none;
}
.todo {
  text-align: left;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
}
</style>