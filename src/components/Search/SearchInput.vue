<template>
  <div>
    <input
      type="text"
      placeholder="검색어를 입력하세요"
      v-model="userInput"
      v-on:keyup.enter="getSearchData"
    />
    <button v-on:click="getSearchData">찾기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    async getSearchData() {
      this.$store.dispatch("changeLoading", true);
      await this.$store.dispatch("getSearchData", this.userInput);
      this.$store.dispatch("changeLoading", false);
      this.userInput = "";
    },
  },
};
</script>
