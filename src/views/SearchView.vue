<template>
  <div>
    <router-link to="/">뒤로가기</router-link>
    <h1>Search</h1>
    <SearchInput />
    <div v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-if="showVideo">
      <SearchVideoList />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/Search/SearchInput";
import SearchVideoList from "../components/Search/SearchVideoList";
export default {
  components: {
    SearchInput,
    SearchVideoList,
  },
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    showVideo() {
      return !this.$store.state.loading && this.$store.state.videoList.length;
    },
  },
};
</script>