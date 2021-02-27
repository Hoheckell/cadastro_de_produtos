<template>
    <div>
        <h3 class="text-center">Adicionar Produtos</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="sendProdutos" >
                    <div v-for="(produto, index) in produtos">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="produto.nome" :key="index">
                        </div>
                        <div class="form-group">
                            <label>Preço</label>
                            <input type="number" class="form-control" v-model="produto.preco" :key="index" step="any">
                        </div>
                        <div class="form-group">
                            <label>Quantidade</label>
                            <input type="number" class="form-control" v-model="produto.quantidade" :key="index" step="any">
                        </div>
                        <hr>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                    <button type="button" @click="addProduto" class="btn btn-secondary">+</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            produtos:[{ nome:"",preco:'',quantidade:'' }]
        }
    },
    methods: {
        sendProdutos() {
            this.axios
                .post('http://localhost:8000/api/produtos', this.produtos)
                .then(response => (
                    this.$router.push({ name: 'home' ,})
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        addProduto: function () {
            this.produtos.push({nome:"",preco:'',quantidade:''});
        }
    }
}
</script>
