<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Editar Producto</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="productos.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Descripcion</label>
                                    <input type="text"  class="form-control" v-model="productos.descripcion">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="decimal" onkeydown="return /[1-9, ]/i.test(event.key)" class="form-control" v-model="productos.precio">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Stock</label>
                                    <input type="number" onkeydown="return /[1-9, ]/i.test(event.key)"  class="form-control" v-model="productos.stock">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-producto",
    data(){
        return {
            productos:{
                nombre:"",
                descripcion:"",
                precio:0,
                stock:0,
            }
        }
    },
    mounted(){
        this.mostrarProductos()
    },
    methods:{
        async mostrarProductos(){
            await this.axios.get(`/api/producto/${this.$route.params.id}`).then(response=>{
                const { nombre, descripcion,precio,stock } = response.data
                this.productos.nombre = nombre
                this.productos.descripcion = descripcion
                this.productos.precio = precio
                this.productos.stock = stock

            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/producto/${this.$route.params.id}`,this.productos).then(response=>{
                this.$router.push({name:"mostrarProductos"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>