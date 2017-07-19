<template>
	<div class="managerPowerAllot">
		<!-- 掌柜权限分配 -->
		<div class="content">
			<ul class="manager-list">
				<li>
					<img src="../../assets/img/icon_01.png">
					<h1>拼玩活动管理</h1>
					<img src="../../assets/img/sure.png">
				</li>
				<li>
					<img src="../../assets/img/icon_02.png">
					<h1>处理拼玩订单</h1>
					<img src="../../assets/img/sure_none.png">
				</li>
				<li>
					<img src="../../assets/img/icon_03.png">
					<h1>特卖商城管理</h1>
					<img src="../../assets/img/sure.png">
				</li>
				<li>
					<img src="../../assets/img/icon_04.png">
					<h1>处理商城订单</h1>
					<img src="../../assets/img/sure_none.png">
				</li>
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
    name: 'managerPowerAllot',
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
			img:first-child{
				margin-right: 0.29333rem;
				vertical-align: middle;
			}
			h1{
				display: inline-block;
			}
			img:last-child{
				float: right;
				margin-top: 0.37333rem;
				vertical-align: middle;
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
