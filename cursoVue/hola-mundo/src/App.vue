<template>

<nav>
  <div class="nav-wrapper teal">
    <ul class="right hide-on-med-and-down">
      <li><router-link to="/Estudiantes">Estudiantes</router-link></li>
      <li><router-link :to="{name: 'Login'}">Login</router-link></li>
    </ul>
  </div>
</nav>
<div class="container" style="margin-top:30px;"> 
  <router-view></router-view>
</div>
<!-- <trabajo-uno/> -->

</template>

<script>
//import TrabajoUno from './components/TrabajoUno.vue'

export default {
  name: 'App',
  components:{
    //TrabajoUno,
  }
}
</script>
