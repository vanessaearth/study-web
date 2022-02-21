<template>
	<view class="content">
		<button type="default" @click="scanCode">扫描条码</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			scanCode(){
				uni.scanCode({
					success:(res)=>{
						console.log('isbn:',res)
						uniCloud.callFunction({
							name:'ISBNQuery',
							data:{
								isbn: res.result
							},
							success:res=>{
								console.log('结果：',res)
							}
						})
					}
				})
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
