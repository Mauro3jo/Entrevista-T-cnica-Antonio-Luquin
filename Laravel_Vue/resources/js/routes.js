const Home = () => import('./components/Home.vue')
//importamos los componentes para el blog
const Mostrar = () => import('./components/Producto/Mostrar.vue')
const Crear = () => import('./components/Producto/Crear.vue')
const Editar = () => import('./components/Producto/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarProductos',
        path: '/productos',
        component: Mostrar
    },
    {
        name: 'crearProducto',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarProducto',
        path: '/editar/:id',
        component: Editar
    },
    
]