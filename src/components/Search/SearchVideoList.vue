<template>
  <div>
    <ul>
      <li v-for="video in videoList" v-bind:key="video.videoId">
        <EachVideo v-bind:video="video" />
      </li>
    </ul>
  </div>
</template>

<script>
import EachVideo from "../Common/EachVideo";
export default {
  components: {
    EachVideo,
  },
  computed: {
    videoList() {
      return this.$store.state.videoList;
    },
  },
};
</script>
