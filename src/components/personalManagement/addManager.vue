<template>
	<div class="addManager">
		<!-- 添加掌柜 -->
		<div class="content">
			<ul class="manager-list">
				<li><h1>手机号<span>18281456789</span></h1></li>
				<li><h1>姓名<span class="F9">李松松</span></h1></li>
				<li><h1>身份证号<span class="F9">510822199508255894</span></h1></li>
				<li><h1>性别<span class="F9">男</span></h1></li>
				<li><h1>称谓<span>大掌柜<img src="../../assets/img/right.png"></span></h1></li>
				<li><h1>权限<span>4<img src="../../assets/img/right.png"></span></h1></li>
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
    name: 'addManager',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped lang="less">
.F9{
	color:#999;
}
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
					img{
						margin-left: 0.29333rem;
						vertical-align: middle;
					}
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
