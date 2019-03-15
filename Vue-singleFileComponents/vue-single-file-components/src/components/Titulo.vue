<template>
    <div>
        <h1 @click="clique">Campeonato Brasileiro - Série A - 2019 {{$parent.visao}}</h1>
    </div>
</template>

<script>
    export default {
        methods: {
            clique(){
                console.log(this.$parent.param1);
            }
        }
    }
</script>


