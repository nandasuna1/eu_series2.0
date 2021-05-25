<template>
<div id="main">
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
                    <p class="subtitle is-5">{{year}}</p>
                    <p class="subtitle is-5">Tipo: {{tipo}}</p>
                </div>
            </div>

            <div id="detalhes" >
                <div class="content" ><b>Plot:</b> {{plot}}</div>
                <div class="content" ><b>Atores:</b> {{atores}}</div>
                <div class="content" ><b>Nota:</b> {{nota}}</div>
            </div>
        </div>       
    </div>
</div>
</template>

<script>
//import Midia from '../components/Midia.vue';
import axios from "axios";

export default {
    data(){
        return{
            imdbID: '',
            atores: '',
            plot: '',
            nota:'',
            tipo: '',
            year: '',
            title: '',
            imgUrl: '',
        }
    },
    props:{
        rota: String,
        url: String,
    },

    components:{
        //Midia,
    },
    created: function(){
                var key = process.env.VUE_APP_API_KEY;
                axios.get("https://www.omdbapi.com/?i="+this.rota+key).then(res => {
                this.plot = res.data.Plot;
                this.nota = res.data.Ratings[0].Value;
                this.atores = res.data.Actors;
                this.tipo = res.data.Type;
                this.year = res.data.Year;
                this.title = res.data.Title;
                this.imgUrl = res.data.Poster;
                console.log(this.atores);
                console.log('de midia1')
                })
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
#main{
    margin-top: 5%;
}
</style>