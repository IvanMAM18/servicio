<template>
    <!-- Boton con icono
    <h1>Hola mundo</h1>
    <button class="btn red " @click="saludar">Boton <i class="material-icons">save</i></button>
    -->
<div class="container">
  <div class="row">
    <div class="col m12 card-panel">
    
      <div class="row">
        <div class="col m4">
          <label>Nombre</label>
          <input type="text" v-model="nombre">
        </div>

        <div class="col m4">
          <label>Apellido</label>
          <input type="text" v-model="apellido">
        </div>
      </div>
      <div class="row">
          <div class="col m4">
            <label>Edad</label>
            <input type="number" v-model="edad">
          </div>
          <div class="col m4">
              <label>Estado civil</label>
              <select v-model="estado_civil">
                <option value="">Selecciona</option>
                <option value="C">Casado</option>
                <option value="S">Soltero</option>
                <option value="D">Divorciado</option>
                <option value="V">Viudoo</option>
              </select>
          </div>
          <div class="col m4">
              <label>Correo</label>
              <input type="email" v-model="correo">
          </div>
      </div>
      <div class="row">
          <div class="col m4 card-panel">
              <label>PasaTiempo</label>
              <input type="text" v-model="pasaTiempo">
              <button type="bitton" class="btn indigo darken-3">AGREGAR PASATIEMPO<i class="material-icons right">send</i></button>
              <br>
              <ul>
                <li v-for="pasaTiempo in pasaTiempos" v-bind:key="pasaTiempo">{{pasaTiempo.description}}</li>
              </ul>
          </div>
      </div>
      <div class="row">
          <div class="col m4">
            <label for=""><input type="checkbox" v-model="suscribirse"><span>suscribirse al boletin de noticias.</span></label>
          </div>
      </div>
      <div class="row">
          <button type="submit" class="btn indigo darken-4">AGREGAR USUARIO <i class="material-icons right">add_circle</i></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'App',
  data(){
    return {
      nombre: '',
      apellido: '',
      edad: 0,
      estado_civil:'',
      correo:'',
      suscribirse:false,
      pasaTiempos: [],
      select_instances:[],
    }
  },
  mounted(){
    var elems = document.querySelectorAll('select');
    this.select_instances = M.FormSelect.init(elems, null);
  }
}
/*Boton con icono
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
}*/
</script>
