export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/Produtos.vue'),
    },
    {
        name: 'add',
        path: '/add',
        component: () => import('./components/AddProduto.vue'),

    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: () => import('./components/AlteraProduto.vue'),
    },
    {
        name: 'show',
        path: '/show/:id',
        component: () => import('./components/DetalhesProduto.vue'),
    },
    {
        name: 'changes',
        path: '/changes/:id',
        component: () => import('./components/MudancasProduto.vue'),
    },
    {
        name: 'quantidades',
        path: '/quantidades/:id',
        component: () => import('./components/QuantidadesProduto.vue'),
    }
];
