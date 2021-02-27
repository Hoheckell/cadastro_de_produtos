<template>
    <div>
        <h3 class="text-center">Alterar Produto</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateProduct">
                    <div v-if="produtos.length" v-for="produto in produtos" :key="produto.id">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" class="form-control" v-model="produto.nome">
                        </div>
                        <div class="form-group">
                            <label>Preço</label>
                            <input type="text" class="form-control" v-model="produto.preco">
                        </div>
                        <div class="form-group">
                            <label>Quantidade</label>
                            <input type="text" class="form-control" v-model="produto.quantidade">
                        </div>
                        <hr>
                    </div>
                    <button v-if="produtos.length" type="submit" class="btn btn-primary">Alterar</button>
                    <div v-else><img src="/images/loading.gif" width="200"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            produtos: {}
        }
    },
    created() {
        this.axios
            .get(`http://localhost:8000/api/produtos/${this.$route.params.id}`)
            .then((res) => {
                this.produtos = res.data;
            });
    },
    methods: {
        updateProduct() {
            this.axios
                .patch(`http://localhost:8000/api/produtos/${this.$route.params.id}`, this.produtos)
                .then((res) => {
                    this.$router.push({ name: 'home' });
                });
        }
    }
}
</script>
