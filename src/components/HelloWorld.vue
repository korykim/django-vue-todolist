<template>
 

   <div class="hello">

  <mu-flexbox id="loginform"   class="mt8">

    <mu-flexbox-item order="0" class="flex-demo">
      
    </mu-flexbox-item>

    <mu-flexbox-item order="1"  class="flex-demo">


 
    <mu-text-field type="number"     v-model='phones' hintText="手机号" fullWidth :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="11" /><br/>
   <mu-text-field type="password"   v-model='passwords' hintText="密码" fullWidth :errorText="inputErrorText2" @textOverflow="handleInputOverflow2" :maxLength="20" /><br/>
    <mu-raised-button  v-on:click="loginadmin" label="登录" fullWidth class="demo-raised-button" primary/><br/>


    </mu-flexbox-item>

    <mu-flexbox-item order="2" class="flex-demo">
 
    </mu-flexbox-item>
    
  </mu-flexbox>
     
<!-- <mu-raised-button label="지사화 업체" id="combo1" ref="button" @click="toggle" class="demo-raised-button" primary/>

  <mu-popover :trigger="trigger" :open="open" @close="handleClose">
    <mu-menu  v-for="item in items" >
      <mu-menu-item v-on:click="greet(item.id)" @change="handleChange" v-bind:id="item.id" v-bind:title="item.customer_name" />
    </mu-menu>
 
  </mu-popover> -->
 
<!-- <select v-model="selected" @change='changeType'>  
  <option v-for="item in items" v-bind:value="item.id">  
    {{ item.customer_name }}  
  </option>  
</select>  
<span>Selected: {{ selected }}</span>   -->

<!-- <select id="jisahwaID" v-model="selected">  
    <option  v-for="item  in items" name="selected" :value="item.id" >{{item.customer_name}}</option>  
</select>  
 <span>Selected: {{ selected }}</span> -->
 
 <!-- <v-select v-model="selected">
   <option v-for="item  in items"  :value="item.id" :options="item.customer_name">{{item.customer_name}}</option>

 </v-select> -->


 

   <!-- <div id="seclects1">


    <v-select :dbs=[{label:name,value:id}]></v-select>

   </div> -->

 
   <!-- <mu-list class="demo-list"  v-for="item in items" >
    <mu-list-item v-bind:title="item.customer_name"/>
   </mu-list> -->

 <!-- <div class="demo-grid">

  <mu-row gutter>
   
     <mu-col width="100" tablet="40" desktop="15"> </mu-col>
    <mu-col width="50" tablet="60" desktop="15"> </mu-col>

    <mu-col width="50" tablet="60" desktop="35">

        <mu-list class="demo-list"  v-for="item in items" >
 
         <mu-list-item v-bind:title="item.customer_name"/>

         </mu-list>

   </mu-col>

   <mu-col width="100" tablet="33" desktop="35"> </mu-col>
 
  </mu-row> -->


 <mu-tabs id="footer" :value="activeTab" @change="handleTabChange">
  <mu-tab value="tab1" icon="phone" title="RECENTS"/>
  <mu-tab value="tab2" icon="favorite" title="FAVORITES"/>
  <mu-tab value="tab3" icon="person_pin" title="NEARBY"/>
</mu-tabs>


</div>
    
 
</template>


<script>


export default {
  
  name: "HelloWorld",
  
  data() {
    var json = [];
    var jjj={};
    return {
      phones:'',
      passwords:'',
      input: '',
      inputErrorText: '',
      inputErrorText2: '',
      activeTab: 'tab1',

      bottomNav: 'movies',
      bottomNavColor: 'movies',
      selected: null,
     // selected: '1',
       open: false,
       value:'1',
       trigger: null,
      items: [],
      dbs:{}
    };
  },mounted () {
    this.trigger = this.$refs.button.$el
    
  },methods: {

    handleInputOverflow (isOverflow) {
      this.inputErrorText = isOverflow ? '手机号码是11位' : ''
    },

        handleInputOverflow2 (isOverflow) {
      this.inputErrorText2 = isOverflow ? '密码长度不能超过20位！' : ''
    },

    handleInput (val) {
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    },

   changeType(ele){
          //var optionTxt = $(ele.target).find("option:selected").text();  
          var optionTxt=ele
          var optionVal = ele.target.value;  

          alert(optionTxt)
    },

    toggle () {
      this.open = !this.open
     
    },
        handleOpen () {
      this.open = true
    },

    handleClose (e) {
      this.open = false
    },
    
     handleChange (val) {
      this.bottomNav = val
    },
     handleTabChange (val) {
      this.activeTab = val
    },
    // handleChange (val) {
    //   this.value = val
    //   alert(val)

    //  },
    loginadmin:function(){


   

//  this.$axios.post('http://192.168.99.100:8000/people/vue/', {
//     phone: this.phones,
//     password: this.passwords
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (response) {
//     console.log(response);
//   });

params={'phone': this.phones, 'password': this.passwords}

fetch("http://192.168.99.100:8000/people/vue/", {
    method: 'POST',
    //mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers':'*'
    }, 
    body: JSON.stringify(params)
}).then(function (response) {
    console.log(response);
  })

    },
     greet: function (id) {

        fetch("http://192.168.99.100:8000/jisahwa/"+id)
         .then(function(req){
           return req.json();
         })
         .then(function(story){
           console.log(story)
         })
     }

  },
  created: function() {
    let vueThis = this;
 
    fetch("http://192.168.99.100:8000/jisahwa/") //axios.get
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        //console.log(stories);

        //    for(var i=0;i<=stories.length;i++){
        //       vueThis.jjj.id=stories[i].id
        //       vueThis.jjj.name=stories[i].customer_name
        //       vueThis.json.push(vueThis.jjj);
        //     }
        // //vueThis.dbs=jjj;
        // //console.log(JSON.stringify(vueThis.json))
        vueThis.items = stories;
 
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
#mtl{
  margin: 0 auto;
}
.flex-demo {
 

  text-align: center;
 
}

#timelines{
  text-align: center;
}
.mt8 {
  margin-top: 8px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#combo1{
  margin-top: 15px;
  bottom: 5px;
 
}
#seclects1{
 margin-top: 15px;
   padding-bottom: 200px;
}
#footer
{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
#loginform{
  
    margin-top: 25px;
    padding-bottom: 15px;

} 
</style>


 
