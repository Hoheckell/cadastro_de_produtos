<template>
    <div>
        <h3 class="text-center">Detalhes do Produto</h3>
        <div v-if="produtos.length" class="row">
            <div class="col-md-6">
                    <div v-for="produto in produtos" :key="produto.id">
                        <p>
                            <strong>Nome:</strong> {{produto.nome}}<br>
                            <strong>Preço:</strong> {{produto.preco}} $<br>
                            <strong>Quantidade:</strong> {{produto.quantidade}}
                        </p>
                    </div>
            </div>
        </div>
        <div v-else><img src="/images/loading.gif" width="200"></div>
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
    }
}
</script>
