<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Producto</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" onkeydown="return /[a-z, ]/i.test(event.key)" class="form-control" v-model="producto.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Descripcion</label>
                                    <input type="text"  onkeydown="return /[a-z, ]/i.test(event.key)" class="form-control" v-model="producto.descripcion">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="decimal" onkeydown="return /[1-9, ]/i.test(event.key)" class="form-control" v-model="producto.precio">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Stock</label>
                                    <input type="number" onkeydown="return /[1-9, ]/i.test(event.key)" class="form-control" v-model="producto.stock">
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
    name:"crear-producto",
    data(){
        return {
            producto:{
                nombre:"",
                descripcion:"",
                precio:0,
                stock:0
            }
        }
    },
    methods:{
       
        async crear(){
            await this.axios.post('/api/producto',this.producto).then(response=>{
                this.$router.push({name:"mostrarProductos"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>