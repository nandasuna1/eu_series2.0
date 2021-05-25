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

                    <router-link :to="{name:'Midia1', params:{rota: imdbID}}">
                        <button class="button is-primary" >Detalhes</button>
                    </router-link>
                </div>
            </div>

            
        </div>       

    </div>
        
  </div>
</template>

<script>
//import axios from "axios";

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
            enredo:'',
            nota: '',
            atores:'',
            mostrar: false,

        }
    },
    props:
    {
        year: String,
        title: String,
        imgUrl: String,
        url: String,
        imdbID: String,
        tipo: String,
        plot: String,
    },
    computed:{
        
    },


}
</script>


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