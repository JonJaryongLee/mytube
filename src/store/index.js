import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import dayjs from "dayjs";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		videoList: [],
		loading: false,
		URL: "https://www.googleapis.com/youtube/v3",
		// 발급받은 google key 를 넣으시오
		key: "?????????????",
	},
	mutations: {
		CHANGE_VIDEO_LIST(state, videoList) {
			state.videoList = videoList;
		},
		CHANGE_LOADING(state, flag) {
			state.loading = flag;
		},
	},
	actions: {
		async getSearchData(context, word) {
			try {
				const response = await axios.get(`${context.state.URL}/search`, {
					params: {
						key: context.state.key,
						part: "snippet",
						type: "video",
						q: word,
						maxResults: 10,
						order: "relevance", // relevance(default), date, viewCount
					},
				});
				if (response.data) {
					const parsedVideoList = response.data.items.map((item) => {
						return {
							videoId: item.id.videoId,
							title: item.snippet.title,
							description: item.snippet.description,
							publishTime: dayjs(item.snippet.publishTime).format("YYYY-MM-DD"),
							thumbnails: item.snippet.thumbnails,
						};
					});
					context.commit("CHANGE_VIDEO_LIST", parsedVideoList);
				}
			} catch (error) {
				console.log(error);
			}
		},
		async getVideo(context, videoId) {
			try {
				const response = await axios.get(`${context.state.URL}/videos`, {
					params: {
						key: context.state.key,
						part: "snippet",
						id: videoId,
					},
				});
				if (response.data) {
					const data = response.data.items[0];
					return {
						videoId: data.id,
						title: data.snippet.title,
						description: data.snippet.description,
						publishTime: dayjs(data.snippet.publishedAt).format("YYYY-MM-DD"),
						thumbnails: data.snippet.thumbnails,
					};
				}
			} catch (error) {
				console.log(error);
			}
		},
		changeLoading(context, flag) {
			context.commit("CHANGE_LOADING", flag);
		},
	},
});
