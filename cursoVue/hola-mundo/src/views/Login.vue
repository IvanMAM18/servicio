<template>
    <div class="row">
        <div class="col m12 card-panel">
            <form @submit.prevent="iniciarSesion">
                <div class="row">
                    <div class="col m3">
                        <label>Usuario</label>
                        <input type="text" v-model="usuario">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <label>Contraseña</label>
                        <input type="password" v-model="clave">
                    </div>
                </div>
                <div class="row">
                    <div class="col m3">
                        <button v-show="!loading" type="submit" class="btn">INICIAR SESION<i class="material-icons right">security</i></button>
                        <div v-show="loading" class="progress">
                            <div class="indeterminate"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
    export default{
        name:'MyLogin',
        data(){
            return{
                usuario: '',
                clave: '',
                loading: false 
            }
        },
        methods: {
            async iniciarSesion(){
                var payload = {
                    usuario:this.usuario,
                    contrasena:this.clave
                };
                this.loading = true;
                await this.axios.post('/login',payload)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    var data = error.response.data;
                    M.toast({html: data.message});
                });

                this.loading = false;
            }

        }
    }
</script>
