const app = new Vue ({
    el:"#app",
    /*template:`#ejemplo`,*/
    data:{
        lenguajes: [
            {name:"Angular",url:"https://angular.io/"},
            {name:"React",url:"https://reactjs.org/"},
            {name:"Vue",url:"https://vuejs.org/"}
        ],
        mostrar:false,
        mensage:"Hola Vue.js",
        imagen:"./Vue-js.png"
    },
    methods:{
        toggleMostrar: function () {
            this.mostrar = !this.mostrar;
        }
    }
});