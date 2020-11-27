<template>
  <div class="search-bar">
    <label class="search-bar__search">
      <input
        @input="getWord($event.target.value)"
        class="search-bar__item"
        placeholder="Введите слово"
      />
    </label>
    <div class="search-bar__check-type">
      <label class="item">
        <input
          @change="changeType"
          v-model="isTypeVerb"
          class="item__checkbox"
          type="checkbox"
        />
        <p class="item__text">verb</p>
      </label>
      <label class="item">
        <input
          @change="changeType"
          v-model="isTypeAdjective"
          class="item__checkbox"
          type="checkbox"
        />
        <p class="item__text">adjective</p>
      </label>
      <label class="item">
        <input
          @change="changeType"
          v-model="isTypeNoun"
          class="item__checkbox"
          type="checkbox"
        />
        <p class="item__text">noun</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
      isTypeNoun: false,
      isTypeAdjective: false,
      isTypeVerb: false,
    };
  },
  methods: {
    getWord(value) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(async () => {
        this.$store.dispatch("getWord", value);
      }, 500);
    },
    changeType() {
      this.$emit("changeType", {
        isTypeNoun: this.isTypeNoun,
        isTypeAdjective: this.isTypeAdjective,
        isTypeVerb: this.isTypeVerb,
      });
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>

<style lang="scss" scoped>
.search-bar__search {
  position: relative;
}

.search-bar__search:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("/icon/search.svg") center / contain no-repeat;
}

input {
  padding: 10px 30px;
}
.search-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #efefef;
  border-radius: 10px;

  &__item {
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid;
    border-color: #b1ddfc;
    border-radius: 10px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    font-family: "Lato", sans-serif;
    text-align: center;
    transition: 0.3s box-shadow;
    font-weight: 700;

    &:hover {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }

    &:focus {
      outline: none;
    }
  }
  &__check-type {
    display: flex;
    justify-content: center;
    width: 100%;
    .item {
      display: flex;
      align-items: center;
      font-family: "Lato", sans-serif;
      padding-top: 15px;
      padding-left: 10px;
      font-size: 16px;

      &__checkbox {
        transform: scale(1.3);
        opacity: 0.9;
        cursor: pointer;
      }

      &__text {
        padding-left: 5px;
      }
    }
  }
}
</style>