<template>
  <div>
    <draggable v-model="updateFavWords">
      <WordListItem
        class="fav-item"
        v-for="(word, i) in updateFavWords"
        :key="i"
        :word="word"
        @click.native="toggleDesc(i)"
      />
    </draggable>
  </div>
</template>


<script>
import WordListItem from "../components/WordList/WordListItem";
import draggable from "vuedraggable";

export default {
  components: {
    WordListItem,
    draggable,
  },
  data() {
    return {
      wordFilters: {},
    };
  },
  mounted() {
    if (localStorage.favWords) {
      this.$store.commit("INIT_FAVORITE_WORDS");
    }
  },
  computed: {
    getFavoritesWords() {
      return this.$store.state.favoritesWords.sort((prev, next) => {
        return prev.hwi.hw < next.hwi.hw ? -1 : 1;
      });
    },
    updateFavWords: {
      get() {
        return this.$store.state.favoritesWords;
      },
      set(value) {
        this.$store.commit("UPDATE_FAVORITES_WORDS_LIST", value);
      },
    },
    getFavoriteSearch() {
      if (this.$store.state.favoriteSearch) {
        return this.$store.state.favoriteSearch;
      } else {
        return this.$store.state.favoriteWords;
      }
    },
  },
  methods: {
    toggleDesc(i) {
      this.$store.commit("SET_FAVORITE_WORD_OPEN_FLAG", i);
    },
    onCheckedTypes(data) {
      this.wordFilters = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.fav-search-bar {
  background: none;
}
</style>