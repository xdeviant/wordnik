<template>
  <div
    v-if="word.isShow"
    :class="{ isOpened: word.isOpened }"
    class="word-list-item"
  >
    <div class="list-item-top">
      <FavoritesIcon
        :class="{ 'is-add-favorites': isAddFavorite }"
        class="SVG"
        @click.native.stop="addToFavoriteWord"
      />
      <div class="list-item-top__icon"></div>
      <span class="list-item-top__word">{{ word.meta.stems[0] }}</span>
      <span class="list-item-top__type">{{ word.fl }}</span>
      <span class="list-item-top__desc">{{ word.shortdef[0] }}</span>
    </div>
    <div class="list-item-bot">
      <p>{{ "Pronunciation: " + word.hwi.hw }}</p>
      <p>{{ "Short Definition: " + word.shortdef.join(" || ") }}</p>
    </div>
  </div>
</template>

<script>
import FavoritesIcon from "../svg/FavoritesIcon";
export default {
  components: {
    FavoritesIcon,
  },
  props: {
    word: {
      type: Object,
      required: false,
    },
  },
  computed: {
    isAddFavorite() {
      return this.$store.state.favoritesWords.find(
        (item) => item.meta.id === this.word.meta.id
      );
    },
  },
  methods: {
    addToFavoriteWord() {
      this.$store.dispatch("changeFavoriteWords", this.word);
    },
  },
};
</script>

<style lang="scss" scoped>
.SVG {
  display: flex;
  flex-shrink: 0;
  fill: black;
  cursor: pointer;
}

.is-add-favorites {
  fill: #6ec0fb;
}

.word-list-item {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  font-family: "Lato", sans-serif;

  .list-item-top {
    display: flex;
    align-items: center;
    position: relative;
    color: #3c3c3c;
    font-size: 20px;
    transition: all 0.2s linear;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0px;
      transform: translateY(-50%) rotate(0deg);
      width: 30px;
      height: 30px;
      background-image: url("/icon/arrow.svg");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transition: all 0.2s linear;
    }

    &__word {
      font-weight: 700;
      padding-left: 15px;
    }

    &__type {
      font-style: italic;
      padding: 0 15px;
    }

    &__desc {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 30px;
    }

    &__icon {
      background: black;
      display: inline-block;
      flex: none;
      position: relative;
      height: 2px;
      width: 40px;
      margin-left: 15px;
      &:first-child {
        flex: none;
      }
      &:before {
        background: #000;
        content: "";
        position: absolute;
        top: -5px;
        left: 0;
        width: 40px;
        height: 2px;
      }
      &:after {
        background: #000;
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 40px;
        height: 2px;
      }
    }
  }
  .list-item-bot {
    color: #3c3c3c;
    font-size: 18px;
    opacity: 0;
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
  }
}
.word-list-item.isOpened .list-item-bot {
  opacity: 1;
  max-height: 1000px;
}
.word-list-item.isOpened .list-item-top {
  margin-bottom: 15px;
  &::after {
    transform: translateY(-50%) rotate(-180deg);
  }
}

@media (max-width: 1024px) {
  .list-item {
    margin-top: 20px;
  }
}
</style>