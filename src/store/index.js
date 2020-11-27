import Vue from "vue";
import Vuex from "vuex";
import { requestInterface } from "../api/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
    favoritesWords: [],
    favoriteSearch: '',
  },
  mutations: {
    SET_WORD(state, payload) {
      const modifiedWord = { ...payload, isOpened: false };
      state.words = [modifiedWord];
    },
    SET_WORDS(state, payload) {
      const arrWords = payload.map((el) => {
        return { ...el.data[0], isOpened: false };
      });
      state.words = arrWords;
    },
    SET_WORD_OPEN_FLAG(state, payload) {
      state.words[payload].isOpened = !state.words[payload].isOpened;
    },
    SET_FAVORITE_WORD_OPEN_FLAG(state, payload) {
      state.favoritesWords[payload].isOpened = !state.favoritesWords[payload]
        .isOpened;
    },
    DELETE_FAVORITE_WORD(state, payload) {
      state.favoritesWords.forEach((el, i) => {
        if (el.meta.id === payload.meta.id) {
          state.favoritesWords.splice(i, 1);
          localStorage.favWords = JSON.stringify(state.favoritesWords);
        } else {
          return false;
        }
      });
    },
    ADD_FAVORITE_WORD(state, payload) {
      state.favoritesWords.push(payload);
      localStorage.favWords = JSON.stringify(state.favoritesWords)
    },
    INIT_FAVORITE_WORDS(state) {
      state.favoritesWords = JSON.parse(localStorage.favWords);
    },
    UPDATE_FAVORITES_WORDS_LIST(state, payload) {
      state.favoritesWords = payload;
      localStorage.favWords = JSON.stringify(state.favoritesWords)
    },
    CHANGE_SVG_ACTIVE_FAV_WORD(state, payload) {
      state.favoritesWords[payload].isAddFavorites = !state.favoritesWords[payload].isAddFavorites;
    },
  },
  actions: {
    async getWord({ commit, dispatch }, payload) {
      const response = await requestInterface.doGetRequest(
        `${process.env.VUE_APP_API_URL}${payload}`
      );
      if (response.data[0].meta) {
        commit("SET_WORD", response.data[0]);
      } else {
        // Из множеств совпадении слов, берем первые 10 совпадения
        const arrMatchWords = response.data.slice(0, 10);
        dispatch("getWords", arrMatchWords);
      }
    },
    async getWords({ commit }, payload) {
      const responseArray = payload.map((word) => {
        return requestInterface.doGetRequest(
          `${process.env.VUE_APP_API_URL}${word}`
        );
      });
      Promise.all(responseArray).then((values) => {
        commit("SET_WORDS", values);
      });
    },
    changeFavoriteWords({ commit, state }, payload) {
      if (!state.favoritesWords.length) {
        commit("ADD_FAVORITE_WORD", payload);
      } else {
        if (
          state.favoritesWords.find((item) => item.meta.id === payload.meta.id)
        ) {
          commit("DELETE_FAVORITE_WORD", payload);
        } else {
          commit("ADD_FAVORITE_WORD", payload);
        }
      }
    },
  },
  getters: {},
  modules: {},
});