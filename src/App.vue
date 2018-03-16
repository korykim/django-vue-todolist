<template>

  <div id="app">
<mu-appbar title="Jisahwa">

  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
 <mu-raised-button label="菜单" icon="menu" @click="toggle(true)" slot="left" class="demo-raised-button" primary/>
   <!-- <mu-appbar title="Jisahwa"/> -->
  <mu-drawer :open="open" :docked="docked" @close="toggle()">
     <mu-appbar title="菜单项"/>
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>

 </mu-appbar>  


 <!-- <mu-appbar id="footer" title="footer">
  </mu-appbar> -->
     
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.appbar-search-field {
  color: #FFF;
  margin-bottom: 0;
}
.appbar-search-field.focus-state {
  color: #FFF;
}
.appbar-search-field .mu-text-field-hint {
  color: rgba(255, 255, 255, 0.54);
}
.appbar-search-field .mu-text-field-input {
  color: #FFF;
}
.appbar-search-field .mu-text-field-focus-line {
  background-color: #FFF;
}
</style>

 

