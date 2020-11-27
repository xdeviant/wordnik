<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col col-50">
        <SearchBar @changeType="onCheckedTypes" />
      </div>
      <div class="col col-50">
        <WordList :wordFilters="wordFilters" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar/SearchBar";
import WordList from "../components/WordList/WordList";

export default {
  components: {
    SearchBar,
    WordList,
  },
  data() {
    return {
      wordFilters: {},
    };
  },
  methods: {
    onCheckedTypes(data) {
      this.wordFilters = data;
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>