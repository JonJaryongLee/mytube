<template>
  <div>
    <ul>
      <li v-for="video in laterVideoList" v-bind:key="video.videoId">
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
  props: {
    laterVideoList: Array,
  },
};
</script>
