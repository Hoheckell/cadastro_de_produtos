<template>
    <div>
        <h3 class="text-center">Histórico de quantidade do Produto</h3>
        <div v-if="produto.quantidades.length" class="row">
            <div class="col-md-6">
                 <div v-for="qtd in produto.quantidades" :key="qtd.id">
                    <p>
                        <h3>Item[{{qtd.produto_id}}][<small>{{qtd.created_at | formatDate}}</small>]</h3><br>
                        <em>Nome: {{produto.nome}}</em><br>
                        <em>Preço: {{produto.preco }}</em><br>
                        <strong>Antes:</strong><br>
                        <em>Quantidade: {{qtd.quantidade_antes }}</em> <br>
                        <strong>Depois:</strong><br>
                        <em>Quantidade: {{qtd.quantidade_depois }}</em>
                    </p>
                </div>
            </div>
        </div>
        <div v-else >
            <div v-if="timedout">Sem Histórico.</div>
            <div v-else><img src="/images/loading.gif" width="200"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            produto: {},
            timedout:false
        }
    },
    created() {
        this.axios
            .get('http://localhost:8000/api/quantidades/'+this.$route.params.id)
            .then(response => {
                this.produto = response.data;
                if(this.produto.quantidades.length == 0){
                    this.timedout = true;
                }
            });
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
