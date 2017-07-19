<template>
	<div class="managerAppellation">
		<!-- 掌柜称谓 -->
		<div class="content">
			<ul class="manager-list">
				<li><h1>大掌柜<span><img src="../../assets/img/gou.png"></span></h1></li>
				<li><h1>二掌柜<span></span></h1></li>
				<li><h1>三掌柜<span></span></h1></li>
				<li><h1>四掌柜<span></span></h1></li>
				<li><h1>五掌柜<span></span></h1></li>
				<li><h1>六掌柜<span></span></h1></li>
				<li><h1>七掌柜<span></span></h1></li>
				<li><h1>八掌柜<span></span></h1></li>
				<li><h1>九掌柜<span></span></h1></li>
				<li><h1>财务<span></span></h1></li>
			</ul>
			<footer>
				<ul>
					<li>取消</li>
					<li>确定</li>
				</ul>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
    name: 'managerAppellation',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped lang="less">
.content{
	position: absolute;
	top: 0;left: 0;right: 0;bottom: 0;
	background-color: #e6e6e6;
	.manager-list{
		background-color: #fff;
		li{
			padding: 0 0.32rem;
			height: 1.2rem;
			line-height: 1.2rem;
			border-bottom: 1px solid #e6e6e6;
			font-size: 0.37333rem;
			h1{
				span{
					float: right;
				}
			}
		}
		li:last-child{
			border-bottom: none;
		}
	}
	footer{
		position: fixed;bottom:0;left:0;
		height: 1.33333rem;
		border-top: 1px solid #e6e6e6;
		width: 100%;
		ul{
			display: flex;
			justify-content:space-between;
			align-items:center;
			width: 100%;
			li{
				flex:1;
				font-size: 0.37333rem;
				text-align: center;
				line-height: 1.33333rem;
				background-color: #fff;
				border-top: 1px solid #ccc;
			}
			li:last-child{
				background-color: #ff9b0e;
				color:#fff;
				border-top: 1px solid #ff9b0e;
			}

		}
	}
}
</style>
