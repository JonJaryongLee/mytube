<template>
  <div>
    <img v-bind:src="thumbnailSrc" v-on:click="moveToDetail" alt="video" />
    <router-link v-bind:to="detailUrl" class="video-title">{{
      title
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      description: String,
      publishTime: String,
      thumbnails: {
        default: {
          height: Number,
          width: Number,
          url: String,
        },
        high: Object,
        medium: Object,
      },
      title: String,
      videoId: String,
    },
  },
  computed: {
    thumbnailSrc() {
      return this.video.thumbnails.medium.url;
    },
    detailUrl() {
      return `/videos/${this.video.videoId}`;
    },
    title() {
      return this.video.title;
    },
  },
  methods: {
    moveToDetail() {
      this.$router.push(`/videos/${this.video.videoId}`);
    },
  },
};
</script>
