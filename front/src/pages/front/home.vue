<template>

	<div class = "home">
		<banner></banner>
		<!-- <loading v-if = "code === 404"></loading> -->
		<!-- <h3 v-if = "articles.all.length === 0 && code === 200" class = "none-article">还没有文章，敬请期待···</h3> -->
		<!-- <article-list :articleList = "articles.all"></article-list> -->
    <article-list></article-list>
	</div>
</template>
<script>
	import { mapActions,mapState,mapMutations } from "vuex"
	import articleList from "@/pages/front/articleList"
	import loading from "@/components/front/loading"
	import banner from "@/components/front/banner"
	export default {
		components: {
			articleList,
			loading,
			banner
		},
		metaInfo(){
			return {
				title: "首页 - 小白猿",
				meta: [{vmid: "description",name: "description",content: "首页 - 小白猿"}]
			}
		},
		asyncData({store,route}){
			return Promise.all([
				store.dispatch("getArticles",{
					publish: true,
					page: 1,
					cache: true
				}),
				store.dispatch("getArticlesCount",{
					cache: true,
					publish: true
				}).then(()=>{
					store.commit("changeCode",200)
				})
			])
		},
		beforeRouteLeave(to,from,next){
			this.clear()
			next()
		},
		mounted(){
			this.$nextTick(function(){
	            Prism.highlightAll()
	        })
		},
		computed: {
			...mapState(["articles","code"]),
		},
		methods: {
			...mapActions(["getArticlesCount"]),
			...mapMutations(["clear","changeCode"])
		}
	}
</script>
<style lang = "less" scoped>
	.none-article{
		padding: 20px;
		/*background: #F7EDED;*/
		background: #FAF7F7;
		margin-top: 10px;
	}
</style>

