<template>
  <div>

    <div class="card">

        <div class="card-image ">
            <figure class="">
            <img :src="imgUrl" alt="Placeholder image">
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
            <div class="media-left"></div>

            <div class="media-content">
                <p class="title is-4">{{title}}</p>
                <p class="subtitle is-6">{{year}}</p>
            </div>

            </div>

            <div class="content">
                {{plot}}
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
                plot:'',
                url:'',
            },
        }
    },
    props:{
        year: String,
        title: String,
        imgUrl: String,
        plot: String,
        url: String,
    },
    computed:{

    },

}
</script>

<style>
.card-image{
    size: 50%;
}
</style>