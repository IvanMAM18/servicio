<template>
  <div>
    <h1>Hola mundo</h1>
    <button class="btn red " @click="saludar">Boton <i class="material-icons">info</i></button>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  mounted(){
    this.axios.get('https://prueba.com')
    .then(() => {

    });
  },
  methods:{
    saludar()
    {
      M.toast({html: 'Hola Mundo'});
    }
  }
}
</script>
