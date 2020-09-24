import loadMore from '../assets/js/loadMore';
import axios from 'axios';
export default {
    state: {
        messages: [],
        messagesMain: []
    },

    getters: {
        getMessage(state) {
            return state.messages;
        },
        getMessageMain(state) {
            return state.messagesMain;
        },
        getMessageFilter(state) {
            return state.messages.filter(mes => {
                return mes.main === false;
            });
        },
    },

    mutations: {
        setMessage(state, payload) {
            state.messages = payload;
        },
        setMessageMain(state, payload) {
            state.messagesMain = payload;
        },
        loadMessages(state, payload) {
            state.messagesMain = [...state.messagesMain, ...payload]
            // loadMore(payload);
        }
    },

    actions: {
        setMessage({ commit }, payload) {
            commit('setMessage', payload);
        },
        setMessageMain({ commit }, payload) {
            commit('setMessageMain', payload);
        },
        loadMessages({commit, getters}) {
            let mes = getters.getMessageFilter;
            commit('loadMessages', loadMore(mes));

        },

        async getNotify({ commit }) {
            commit('setLoading', true);
             await axios.get(`https://tocode.ru/static/c/vue-pro/notifyApi.php`)
                .then(response => {

                    const notify = response.data.notify;
                    let messages = [],
                        messagesMain = [];

                    for (let i = 0; i < notify.length; i++) {
                        if (notify[i].main)
                            messagesMain.push(notify[i]);
                        else
                            messages.push(notify[i]);
                    }

                    commit('setMessage', messages);
                    commit('setMessageMain', messagesMain);
                    commit('setLoading', true);
                })
                .catch(e => {
                    commit('setError', 'Error: Network Error');
                })
                .finally(() => {
                    commit('setLoading', false);
                })
        }
    }
}