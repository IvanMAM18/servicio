<template>
<div> Hola mundo</div>
<button class="btn red" @click="saludar" >boton <i class="material-icons">save</i></button>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  methods:{
    saludar(){
      M.toast({html: 'Hola Mundo'});
    }
  }
}
</script>