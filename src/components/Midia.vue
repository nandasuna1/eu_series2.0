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
            
            <div class="content" v-show="!mostrar">{{plot}}</div>
        </div>

       
        <div id="detalhes" v-show="mostrar">
            <h1>MOSTRANDO</h1>
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
                longPlot:'',

            },
            mostrar: false,
        }
    },
    props:{
        year: String,
        title: String,
        imgUrl: String,
        plot: String,
        url: String,
        longPlot: String,

    },
    computed:{

    },
    methods:{
        mostrarDet: function(){
            if(this.mostrar == true){
                this.mostrar = false;
            }else{
                this.mostrar = true;
            }

        }
    }

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