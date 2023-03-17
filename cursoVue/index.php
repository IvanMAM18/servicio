<html>
    
    <div id="app">
       <h1>Aquiii</h1>
    <?php 
        $mostrar=true;
        if($mostrar){
            echo 'si <ul>
                    <li v-for="fruta in frutas">{{fruta}} </li>
                </ul>';
        }else{
            echo 'aqui {{frutas}}';
        }
       
    
    ?>
       
    </div>
    
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script>
        const app ={
            data(){
                return{
                    frutas: ['Manzana','Pera','Uva']
                }
            }
        }
        const _app = Vue.createApp(app);
        const mountedApp = _app.mount('#app');
    </script>

</html>
npm install -g @vue/cli
npm run serve