<template>
  <div id="app">
    <section class="hero is-medium is-link">
      <div class="hero-body">
        <p class="title">
          <img src="../public/logo1.jpg" alt="" class="image is-128x128 ">
          Cine em Casa
        </p>
        <p class="subtitle">
          Seus filmes e séries aqui!
        </p>
      </div>
    </section>

    <div class="field has-addons" id="busca">
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Encontre seu filme ou serie preferido" v-model="busca">
      </div>
      <div class="control" @click="buscar">
        <a class="button is-info">
          Search
        </a>
      </div>
    </div>
    <Midia :year="this.midia.Year" :title="midia.Title" :imgUrl="midia.Poster" :plot="midia.Plot" :url="this.busca"/>


  </div>
  
</template>

<script>
import axios from 'axios';
import Midia from './components/Midia.vue'
export default {
  name: 'App',

  data(){
    return{
      busca:'',
      midia: [],
    }
  },
  created: function(){
    var key = "&apikey=b2f3b050";
      axios.get("https://www.omdbapi.com/?t=avengers"+key).then(res => {
      console.log('app aqui!');
      this.midia = res.data;
      console.log(this.midia)
      return this.midia
    })
    
  },

  components: {
    Midia
  },

  methods:{
    buscar:function(){
      var key = "&apikey=b2f3b050";
     axios.get("https://www.omdbapi.com/?t="+this.busca+key).then(res => {
      console.log('app aqui!');
      if(res.data.Response != 'False'){
        this.midia = res.data;
        console.log(this.midia)
        return this.midia
      }else{
        window.alert("Filme nao encontrado")
      }
    }) 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#busca{
  margin: 5% 20%;
}

.title img{
  align-self: center;
  margin-left: 43%;
  margin-bottom: 2%;
}
</style>
