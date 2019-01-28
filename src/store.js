import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Hello world",
    age: 35,
    links: ["http://google.com", "http://yandex.ru", "http://youtube.ru"],
  },
  getters: {
    countLinks: state => state.links.length,
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1);
    },
    REMOVE_ALL: state => {
      state.links = [];
    },
  },
  actions: {
    removeLink: (contenxt, link) => {
      contenxt.commit("REMOVE_LINK", link);
    },
    removeAll(contenxt) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          contenxt.commit("REMOVE_ALL");
          resolve();
        }, 1500);
        return console.log(this);
      });
    },
  },
});
