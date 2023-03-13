const app = {
    data(){
        return{
            usuario:'',
            correo:'',
            clave:'',
            nombre:'Ivan'
        }
    },
    methods:{
        llamarSaludoDesdeHijo(){
            this.$refs.menuComponent.saludarDesdeHijo(this.nombre);
            this.$refs.menuComponent.miUsuario= this.nombre;
        }
    }
}
const _app = Vue.createApp(app);