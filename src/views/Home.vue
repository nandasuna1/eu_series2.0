<template>
  <div class="home">
    <section class="hero is-small is-link">
      <div class="hero-body">
        <p class="title">
          <span>Vue</span> Movies
        </p>
        <p class="subtitle">
          Seus filmes e séries aqui!
        </p>
      </div>
    </section>

    <div class="field has-addons" id="busca">
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="O que procura?" v-model="busca">
      </div>
      <div class="control" @click="buscar">
        <a class="button is-info ">
          Buscar
        </a>
      </div>
    </div>
    <div v-for="midi in midia" :key="midi.url">
      <Midia :year="midi.Year" :plot="midi.Plot" :title="midi.Title" :imgUrl="midi.Poster" :imdbID="midi.imdbID" :url="midi.url" :tipo="midi.Type" />
    </div>
  </div>
  
</template>

<script >
import axios from 'axios';
import Midia from '../components/Midia.vue'

export default {
  name: 'Home',

  data(){
    return{
      busca:'',
      midia: [],
    }
  },
  //o created é carregado no inicio do carregamento da pagina
  created: function(){
    var key = process.env.VUE_APP_API_KEY;
      axios.get("https://www.omdbapi.com/?s=avengers"+key).then(res => {
      console.log('app aqui!');
      this.midia = res.data.Search;
      console.log(this.midia);
      
      return this.midia
    })
    
  },

  components: {
    Midia
  },
//toda vez que for buscado um filme esse método é usado
  methods:{
    buscar:function(){
      var key = process.env.VUE_APP_API_KEY;
      axios.get("https://www.omdbapi.com/?s="+this.busca+key).then(res => {
      console.log('app aqui!');
      if(res.data.Response != 'False'){
        this.midia = res.data.Search;
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

.title span{
  color: rgb(58, 248, 0);
}

.infobutt{
  margin: 50px;
}

</style>
