export default {
    state: {
        links: [
            {title: 'Домашняя', path: '/'},
            {title: 'О сайте', path: '/about'},
            {title: 'Нотифай', path: '/notify'}
        ]
    },

    getters: {
        getLinks(state) {
            return state.links;
        }
    },

    mutations: {

    },

    actions: {

    }
}