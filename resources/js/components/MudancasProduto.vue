<template>
    <div>
        <h3 class="text-center">Histórico de mudanças do Produto</h3>
        <div v-if="changes.length" class="row">
            <div class="col-md-6">
                <div v-for="change in changes" :key="change.id">
                        <p>
                    <h3>Item[{{change.before_changes.id}}][<small>{{change.created_at | formatDate}}</small>]</h3><br>
                        <strong>Antes:</strong><br>
                        <em>Nome: {{change.before_changes.nome}}</em><br>
                        <em>Preço: {{change.before_changes.preco }}</em><br>
                        <em>Quantidade: {{change.before_changes.quantidade }}</em>
                    <button @click="quantityHistory(change.before_changes.id)" class="btn btn-dark">historico de Quantidade</button>
                    </p>
                        <p>
                        <strong>Depois:</strong><br>
                        <em>Nome: {{change.after_changes.nome }}</em><br>
                        <em>Preço: {{change.after_changes.preco }}</em><br>
                        <em>Quantidade: {{change.after_changes.quantidade }}</em></p>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-if="timedout">Sem Histórico.</div>
            <div v-else><img src="/images/loading.gif" width="200"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            changes: [],
            timedout:false
        }
    },
    created() {
        this.axios
            .get('http://localhost:8000/api/changes/'+this.$route.params.id)
            .then(response => {
                this.changes = response.data;
                if(this.changes.length == 0){
                    this.timedout = true;
                }
            });
    },
    methods: {
        quantityHistory(id){
            this.$router.push({ name: 'quantidades', params: { id: id } });
        },
    }
}
</script>

<style scoped>

</style>
