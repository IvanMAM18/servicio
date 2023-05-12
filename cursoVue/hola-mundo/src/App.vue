<template>
    <!-- Boton con icono
    <h1>Hola mundo</h1>
    <button class="btn red " @click="saludar">Boton <i class="material-icons">save</i></button>
    -->
<div class="container">
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="agregarUsuario">
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
                <select class="browser-default" id="select_estado_civil" v-model="estado_civil">
                  <option value="">Selecciona</option>
                  <option v-for="estado in estados_civiles" v-bind:key="estado" v-bind:value="estado.id">{{estado.description}}</option>
                </select>
            </div>
            <div class="col m4">
                <label>Correo</label>
                <input type="email" v-model="correo">
            </div>
        </div>
        <div class="row">
          <form @submit.prevent="agregarPasaTiempo">
            <div class="col m4 card-panel">
                <label>PasaTiempo</label>
                <input type="text" v-model="pasaTiempo">
                <button type="submit" class="btn indigo darken-3">AGREGAR PASATIEMPO<i class="material-icons right">send</i></button>
                <br>
                <ul>
                  <li v-for="(pasaTiempo, index) in pasaTiempos" v-bind:key="pasaTiempo">
                    {{pasaTiempo.id}} - {{pasaTiempo.description}}
                    <a href="#!" @click="pasaTiempos.splice(index, 1)"><i class="material-icons">close</i></a>
                  </li>
                </ul>
            </div>
          </form>
        </div>
        <div class="row">
            <div class="col m4">
              <label><input type="checkbox" v-model="suscripto"><span>suscribirse al boletin de noticias.</span></label>
            </div>
        </div>
        <br>
        <div class="row">
            <button type="submit" class="btn indigo darken-4">AGREGAR USUARIO <i class="material-icons right">add_circle</i></button>
        </div>
      </form>
    </div>
  </div>

  <div class="row">
    <div class="col m12">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Estado Civil</th>
            <th>Correo</th>
            <th>PasaTiempo</th>
            <th>Suscripto</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" v-bind:key="usuario">
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.apellido}}</td>
            <td>{{usuario.edad}}</td>
            <td>{{usuario.estado_civil_descripcion}}</td>
            <td>{{usuario.correo}}</td>
            <td>
              <ul>
                <li v-for="pasaTiempo in usuario.pasaTiempos" v-bind:key="pasaTiempo">{{pasaTiempo.id}} - {{pasaTiempo.description}}</li>
              </ul>
            </td>
            <td>
              <label><input type="checkbox" disabled v-model="usuario.suscripto"><span></span></label>
            </td>
            <td>
              <a href="#!"><i class="material-icons">create</i></a>
            </td>
            <td>
              <a href="#!" @click="eliminar(index)"><i class="material-icons">delete</i></a>
            </td>
          </tr>
        </tbody>
      </table>
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
      suscripto:false,
      pasaTiempo:'',
      pasaTiempos: [],
      usuarios: [],
      select_instances:[],
      estados_civiles:[
        {
          id: 'S',
          description: 'Soltero'
        },
        {
          id: 'C',
          description: 'Casado'
        },
        {
          id: 'D',
          description: 'Divorsiado'
        },
        {
          id: 'V',
          description: 'Viudo'
        }
      ]
      
    }
  },
  mounted(){
    var elems = document.querySelectorAll('select');
    this.select_instances = M.FormSelect.init(elems, null);
  },
  methods: {
    agregarUsuario(){
      var index_estado_civil= this.estados_civiles.findIndex(x=>x.id == this.estado_civil);
      if(index_estado_civil == -1){
        M.toast({html: 'Selecione un estado civil'});
        return;
      }
      var data = {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        correo: this.correo,
        estado_civil: this.estado_civil,
        estado_civil_descripcion: this.estados_civiles[index_estado_civil].description,
        suscripto: this.suscripto,
        pasaTiempos:this.pasaTiempos
      };
      this.usuarios.push(data);
      this.nombre = '';
      this.apellido = '';
      this.edad = 0;
      this.estado_civil = '';
      this.correo='';
      this.suscrito = false;
      this.pasaTiempo='';
      this.pasaTiempos = [];
    },
    agregarPasaTiempo(){
      var total = this.pasaTiempos.length;
      var ultimo = 0;
      if(total>0){
        ultimo = this.pasaTiempos[total -1].id; 
      }
      var data = {
        id: ultimo +1,
        description: this.pasaTiempo,
      };
      this.pasaTiempos.push(data);
      this.pasaTiempo = '';
    },
    eliminar(index){
      if(!confirm('¿Desea eliminar este registro?')) return;

      this.usuarios.splice(index, 1);
    }
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
