_app.component('menu-component',{
    template:`
                <nav class="indigo draken-4">
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">{{usuario}}</a></li>
                        </ul>
                    </div>
                </nav>
                <input type="text" v-model="miUsuario">
                <button type="button" @click="saludarDesdeHijo">Haz click</button>
            `,
    props:{
        usuario:String
    },
    data(){
        return{
            miUsuario: this.usuario,
        }
    },
    methods:{
        saludarDesdeHijo(nombre){
            console.log('Hola '+nombre);
        }
    }
});