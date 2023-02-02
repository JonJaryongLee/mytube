<template>
  <div>
    <router-link to="/">홈으로</router-link>
    <div v-if="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <h1>{{ title }}</h1>
      <div>{{ publishTime }}</div>
      <iframe
        width="560"
        height="315"
        :src="videoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{{ description }}</p>
      <div v-if="isLaterVideo">
        <button v-on:click="unregisterLaterVideo">등록 취소</button>
      </div>
      <div v-else>
        <button v-on:click="registerLaterVideo">나중에 볼 동영상</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      isLaterVideo: false,
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    title() {
      return this.video.title;
    },
    videoSrc() {
      return `https://www.youtube.com/embed/${this.video.videoId}`;
    },
    description() {
      return this.video.description;
    },
    publishTime() {
      return this.video.publishTime;
    },
  },
  async created() {
    this.$store.dispatch("changeLoading", true);
    this.video = await this.$store.dispatch(
      "getVideo",
      this.$route.params.videoId
    );
    this.isLaterVideo = this.checkVideoInStorage();
    this.$store.dispatch("changeLoading", false);
  },
  methods: {
    checkVideoInStorage() {
      const listString = localStorage.getItem("laterVideoList");
      if (listString === null) {
        return false;
      }
      const laterVideoList = JSON.parse(listString);
      if (laterVideoList.arr.includes(this.video.videoId)) {
        return true;
      } else {
        return false;
      }
    },
    registerLaterVideo() {
      const listString = localStorage.getItem("laterVideoList");
      if (listString === null) {
        localStorage.setItem(
          "laterVideoList",
          `{"arr": ["${this.video.videoId}"]}`
        );
      } else {
        const laterVideoList = JSON.parse(listString);
        laterVideoList.arr.push(this.video.videoId);
        localStorage.setItem("laterVideoList", JSON.stringify(laterVideoList));
      }
      this.isLaterVideo = true;
    },
    unregisterLaterVideo() {
      const listString = localStorage.getItem("laterVideoList");
      const laterVideoList = JSON.parse(listString);
      const idx = laterVideoList.arr.indexOf(this.video.videoId);
      laterVideoList.arr.splice(idx, 1);
      localStorage.setItem("laterVideoList", JSON.stringify(laterVideoList));
      this.isLaterVideo = false;
    },
  },
};
</script>
