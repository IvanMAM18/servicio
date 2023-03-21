<template>
  <div> Hola mundo</div>
  <button class="btn red" @click="saludar" >boton <i class="material-icons">save</i></button>
<div class="container">
  <div class="row">
    <div class="col m12 card-panel">
      <!--event.preventDefault() es para javascript Este evita el envio-->
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
          <select v-model="estadoCivil">
            <option value="">Seleccione</option>
            <option v-for="estado in estadosCiviles" v-bind:key="estado" v-bind:value="estado.id">{{estado.descripcion}}</option>
          </select>
        </div>
        <div class="col m4">
          <label>Correo</label>
          <input type="email" v-model="correo">
        </div>
      </div>
      <div class="row">
        <form @submit.prevent="agregarPasatiempo">
        <div class="col m4 card-panel">
          <label>Pasatiempo</label>
          <input type="text" v-model="pasatiempo">
          <button type="submit" class="btn indigo darken-3">Agregar pasatiempo<i class="material-icons right">send</i></button>
          <br>
          <ul>
            <li v-for="(pasatiempo, index) in pasatiempos" v-bind:key="pasatiempo">{{pasatiempo.id}} - {{pasatiempo.descripcion}}
              <a href="#!" @click="pasatiempos.splice(index, 1)"><i class="material-icons">close</i></a>
            </li>
          </ul>
        </div>
        </form>
      </div>
      <div class="row">
        <div class="col m4">
          <label><input type="checkbox" v-model="suscrito"><span>suscribirse al boletin de noticias. </span></label>
        </div>
      </div>
      <div class="row">
        <button type="submit" class="btn indigo darken-4">{{(indice === -1? 'Agregar':'Actualizar')}} usuario <i class="material-icons right">add_circle</i></button>
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
            <th>Estado civil</th>
            <th>Correo</th>
            <th>Pasatiempo</th>
            <th>Suscrito</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(usuario, index) in usuarios" v-bind:key="usuario" v-bind:class="{'indigo darken-4 white-text': index === indice}">
              <td>{{usuario.nombre}}</td>
              <td>{{usuario.apellido}}</td>
              <td>{{usuario.edad}}</td>
              <td>{{usuario.estadoCivilDescripcion}}</td>
              <td>{{usuario.correo}}</td>
              <td>
                <ul>
                  <li v-for="pasatiempo in usuario.pasatiempos" v-bind:key="pasatiempo">{{pasatiempo.id}} - {{pasatiempo.descripcion}}</li>
                </ul>
              </td>
              <td><label><input type="checkbox" disabled v-model="usuario.suscrito"><span></span></label></td>
              <td><a href="#!" @click="editar(index)"><i class="material-icons">create</i></a></td>
              <td><a href="#!" @click="eliminar(index)"><i class="material-icons">delete</i></a></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


  

</template>
<style >
  #app{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<script>
  import M from 'materialize-css'
  export default {
    name: 'App',
    data(){
      return{
        indice: -1,
        nombre: "",
        apellido: "",
        edad:0,
        estadoCivil:"",
        correo:'',
        documento:'',
        suscrito: false,
        pasatiempo: '',
        pasatiempos:[],
        usuarios:[],
        selectInstances: [],
        estadosCiviles: [
          {
            id:'S',
            descripcion: 'Soltero',
          },
          {
            id:'C',
            descripcion: 'Casado',
          },
          {
            id:'D',
            descripcion: 'Divorciado',
          },
          {
            id:'V',
            descripcion: 'Viudo',
          }
        ]
        //{

        //}

      }
    },
    created(){
      },
    mounted(){
      var elems = document.querySelectorAll('select');
      this.selectInstances = M.FormSelect.init(elems, null);
      this.axios.get('https://prueba.com')
      .then(() => {

      });
    },
    methods:{
      agregarUsuario(){
        var indexEstadoCivil = this.estadosCiviles.findIndex(x=>x.id == this.estadoCivil);
        // si no esta devuelve -1
        if(indexEstadoCivil === -1){
          M.toast({html: 'Seleccione un estado civil.'});
          return;
        }
        var data = {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          estadoCivil: this.estadoCivil,
          estadoCivilDescripcion: this.estadosCiviles[indexEstadoCivil].descripcion,
          correo: this.correo,
          suscrito: this.suscrito,
          pasatiempos: this.pasatiempos
        };
        if(this.indice == -1){
          this.usuarios.push(data);
        }else{
          this.usuarios[this.indice] = data;
        }
        this.indice = -1;
        this.nombre = '',
        this.apellido= '',
        this.edad = '',
        this.estadoCivil = '',
        this.correo = '',
        this.suscrito = false,
        this.pasatiempos = []
      },
      agregarPasatiempo(){
        var total = this.pasatiempos.length;
        var ultimo = 0;
        if(total > 0){
          ultimo = this.pasatiempos[total - 1].id;
        }
        var data = {
          id: ultimo + 1,
          descripcion: this.pasatiempo
        };
        this.pasatiempos.push(data);
        this.pasatiempo = '';
      },
      eliminar(index){
        if(!confirm('¿Desea eliminar este registro?')) return;

        this.usuarios.splice(index, 1);
      },
      editar(index){
        var usuario = this.usuarios[index];
        this.indice = index;
        this.nombre = usuario.nombre;
        this.apellido= usuario.apellido;
        this.edad = usuario.edad;
        this.estadoCivil = usuario.estadoCivil;
        this.correo = usuario.correo;
        this.pasatiempos = usuario.pasatiempos;
      },
      saludar(){
        M.toast({html: 'Hola Mundo'});
      }
    }
  }
</script>