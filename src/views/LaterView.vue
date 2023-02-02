<template>
  <div>
    <router-link to="/">뒤로가기</router-link>
    <h1>Later</h1>
    <div v-if="isLaterVideo">
      <LaterVideoList v-bind:laterVideoList="laterVideoList" />
    </div>
    <div v-else>등록된 비디오 없음</div>
  </div>
</template>

<script>
import LaterVideoList from "../components/Later/LaterVideoList";
export default {
  components: {
    LaterVideoList,
  },
  data() {
    return {
      isLaterVideo: false,
      laterVideoList: [],
    };
  },
  created() {
    const listString = localStorage.getItem("laterVideoList");
    if (listString === null) {
      return;
    }
    const laterVideoList = JSON.parse(listString);
    if (laterVideoList.arr.length === 0) {
      return;
    }
    this.setLaterVideoList(laterVideoList.arr);
    this.isLaterVideo = true;
  },
  methods: {
    // array loop 사용 시, 개별 요소 async, await 불가능
    setLaterVideoList(videoIds) {
      videoIds.forEach((id) => {
        this.$store.dispatch("getVideo", id).then((video) => {
          this.laterVideoList.push(video);
        });
      });
    },
  },
};
</script>
