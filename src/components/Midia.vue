<template>
  <div>

    <div class="card">

        <div class="card-image ">
            <figure class="">
            <img :src="imgUrl" :alt="title">
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
                <div class="media-left"></div>

                <div class="media-content">
                    <p class="title is-4">{{title}}</p>
                    <p class="subtitle is-6">{{year}}</p>
                    <button class="button is-primary" @click="mostrarDet">Detalhes</button>
                </div>
            </div>
            <div id="detalhes" v-show="mostrar">
                <div class="content" ><b>Plot:</b> {{plot}}</div>
                <div class="content" ><b>Atores:</b> {{atores}}</div>
                <div class="content" ><b>Nota:</b> {{nota}}</div>
            </div>
            
        </div>       

    </div>
        
  </div>
</template>

<script>
import axios from "axios";


export default {

    //o created é carregado no inicio do carregamento da pagina
    data(){
        return{
            dados: {
                titulo: '',
                ano: "" ,
                img: '',
                url:'',
                imdbID:'',
                
            },
            plot:'',
            nota: '',
            atores:'',
            mostrar: false,
        }
    },
    props:{
        year: String,
        title: String,
        imgUrl: String,
        url: String,
        imdbID: String,
        

    },
    computed:{

    },
    methods:{
        mostrarDet: function(){
            if(this.mostrar == true){
                this.mostrar = false
            }else{
                this.mostrar = true
            }
            var key = config.api_key;
            axios.get("https://www.omdbapi.com/?i="+this.imdbID+key).then(res => {
                this.plot = res.data.Plot;
                this.nota = res.data.Ratings[0].Value;
                this.atores = res.data.Actors;
            })

        }
    }

}
</script>

<script type='text/javascript' src='config.js'></script>

<style>
.card{
    height: 110%;
}

.card-image{
    size: 50%;
}

.content{
    margin: 1% 5%;
}
</style>