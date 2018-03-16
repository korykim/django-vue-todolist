<template>
  <div id="addTodo">
    <!-- <input
      type="text"
      name=""
      class="input"
      value=""
      v-model="todo"
      @keyup.enter="addTodo"
    > -->

    <mu-text-field 
    required=true
    type="text"
    hintText="TODO"
    v-model="todo"
    @change="addTodo"
    />
    <!-- <button
    @keyup.enter="addTodo"
    @change="addTodo"
      type="button"
      name="button"
      @click="addTodo"
    >
        添加
    </button> -->
 

       <mu-flat-button 
       @click="addTodo"
       icon="note_add" 
       backgroundColor="#2196f3" 
       color="#ffffff"
       />

  </div>
</template>
<script>
export default {
  name: 'addTodo',
  data: () => ({
    todo: ''
  }),
  methods: {
    addTodo () {
      if (this.todo) {
        this.$emit('add', this.todo)
        this.todo = ''
      } else {
        alert('内容不能为空')
      }
    }
  }
}
</script>
<style scoped>
.input {
  min-width: 200px;
}
</style>