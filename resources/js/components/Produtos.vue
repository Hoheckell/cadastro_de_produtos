<template>
    <div>
        <h2 class="text-center">Lista de Produtos</h2>
        <table v-if="produtos.length" class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço ($)</th>
                <th>Quantidade</th>
                <th width="40%">
                    <div v-if="this.selecteds.length" class="btn-group" role="group">
                        <button class="btn btn-success btn-sm" @click="editProduto()">Alterar</button>
                        <button class="btn btn-danger btn-sm" @click="deleteProduto()">Excluir</button>
                        <button class="btn btn-info btn-sm" @click="detalheProduto()">Detalhes</button>
                        <button class="btn btn-secondary btn-sm" @click="historyProduto()">Historico</button>
                    </div>
                    <div v-else>Selecione pelo menos um item</div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="produto in produtos" :key="produto.id">
                <td>{{ produto.id }}</td>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.preco }}</td>
                <td>{{ produto.quantidade }}</td>
                <td>
                    <input type="checkbox" v-model="selecteds" :value="produto.id" >
                </td>
            </tr>
            </tbody>
        </table>
        <div v-else>
            <div v-if="timedout">Sem Produtos.</div>
            <div v-else><img src="/images/loading.gif" width="200"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            produtos: [],
            selecteds: [],
            timedout:false
        }
    },
    created() {
        this.axios
            .get('http://localhost:8000/api/produtos/')
            .then(response => {
                this.produtos = response.data;
                if(this.produtos.length == 0){
                    this.timedout = true;
                }
            });
    },
    methods: {
        deleteProduto() {
            this.axios
                .delete(`http://localhost:8000/api/produtos/`+this.selecteds)
                .then(response => {
                    for(let x = 0; x < this.selecteds.length; x++){
                        let i = this.produtos.map(data => this.selecteds[x]).indexOf(this.selecteds[x]);
                        this.produtos.splice(i, 1)
                    }
                    this.selecteds = [];
                });
        },
        editProduto(){
                this.$router.push({name: 'edit', params: {id: JSON.stringify(this.selecteds)}});
        },
        detalheProduto(){
                this.$router.push({name: 'show', params: {id: JSON.stringify(this.selecteds)}});
        },
        historyProduto(){
                this.$router.push({name: 'changes', params: {id: JSON.stringify(this.selecteds)}});
        }
    }
}
</script>
