<template>
  <div class="search-view">
    <ArrowBack />
    <h1>비디오 검색</h1>
    <SearchInput class="search-input" />
    <div v-if="isLoading">
      <LoadingIcon />
    </div>
    <SearchVideoList v-else />
  </div>
</template>

<script>
import SearchInput from "@/components/search/SearchInput.vue";
import SearchVideoList from "@/components/search/SearchVideoList.vue";
import ArrowBack from "@/components/common/ArrowBack.vue";
import LoadingIcon from "@/components/common/LoadingIcon.vue";
export default {
  components: {
    SearchInput,
    SearchVideoList,
    ArrowBack,
    LoadingIcon,
  },
  computed: {
    isLoading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style scoped>
.loading-icon-container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-input {
  margin-bottom: 20px;
}
</style>
