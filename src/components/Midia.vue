<template>
  <div>

    <div class="card">

        <div class="card-image ">
            <figure class="">
            <img :src="dados.img" alt="Placeholder image">
            </figure>
        </div>

        <div class="card-content">
            <div class="media">
            <div class="media-left"></div>

            <div class="media-content">
                <p class="title is-4">{{dados.titulo}}</p>
                <p class="subtitle is-6">{{dados.ano}}</p>
            </div>

            </div>

            <div class="content">
                {{dados.plot}}
            </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from "axios";


export default {

    //o created é carregado no inicio do carregamento da pagina
    created: function(){
    var key = "&apikey=b2f3b050";
    axios.get("https://www.omdbapi.com/?t=scars"+key).then(res => {
        console.log('im in');
        this.dados = res.data;
        console.log(this.dados);
        this.dados.titulo = res.data.Title;
        this.dados.ano = res.data.Year;
        this.dados.img = res.data.Poster;
        this.dados.plot = res.data.Plot;
        })
    },
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