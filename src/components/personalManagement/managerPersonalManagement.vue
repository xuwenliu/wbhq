<template>
  	<div class="managerPersonalManagement">
		<!-- 掌柜成员管理 -->
		<div class="header">温馨提示：只可添加通过实名认证的掌柜哦！</div>
		<div class="list">
			<ul>
				<li class="list-item">
					<ol>
						<li class="img"><img src="" alt=""></li>
						<li>
							<h1>李松松 <span>男</span></h1>
							<p>18281235467</p></li>
						<li class="appellation">大掌柜</li>
						<li class="status">
							<i>></i>
							
						</li>
					</ol>
				</li>
				<li class="list-item">
					<ol>
						<li class="img"><img src="" alt=""></li>
						<li>
							<h1>李松松 <span>男</span></h1>
							<p>18281235467</p></li>
						<li class="appellation"></li>
						<li class="status">
							<h2>审核中</h2><i>></i>
							
						</li>
					</ol>
				</li>
				<li class="list-item">
					<ol>
						<li class="img"><img src="" alt=""></li>
						<li>
							<h1>李松松 <span>男</span></h1>
							<p>18281235467</p></li>
						<li class="appellation"></li>
						<li class="status">
							<h2>未审核</h2><i>></i>
							<h3>点我去审核</h3>
						</li>
					</ol>
				</li>
				<li class="list-item">
					<ol>
						<li class="img"><img src="" alt=""></li>
						<li>
							<h1>李松松 <span>男</span></h1>
							<p>18281235467</p></li>
						<li class="appellation"></li>
						<li class="status">
							<h2>未通过</h2><i>></i>
							<h3>重新去审核</h3>
						</li>
					</ol>
				</li>
			</ul>
		</div>
  	</div>
</template>

<script>
export default {
    name: 'managerPersonalManagement',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped lang="less">
.header{
	height: 0.93333rem;
	line-height:0.93333rem;
	background-color: #f0f0f0;
	color:#999; 
	font-size: 0.26667rem;
	padding-left: 0.4rem;
}
.list{
	padding: 0.21333rem 0.32rem 0;
	ul {
		.list-item{
			width: 100%;
			height: 1.92rem;
			margin-bottom: 0.21333rem;
			background-color: #fafafa;
			ol{
				display: flex;
				align-items:center;
				justify-content:space-between;
				height: 1.92rem;
				padding-right:0.37333rem;
				.img{
					padding:0.24rem;
				}
				li{
					img{
						width:1.49333rem;
						height:1.49333rem;
						display: block;
						border-radius: 0.74667rem;
					}
					h1{
						font-size: 0.37333rem;
						color: #333;
						span{
							float: right;
						}
					}
					p{
						color:#999;
						line-height: 2;
						
					}
					h2{
						color: #fff;
						background-color: #ccc;
						display: inline-block;
						padding:0.05rem 0.15rem;
						border-radius: 0.3rem;
						font-size: 0.32rem;
					}
					h3{
						font-size: 0.21333rem;
						line-height:2;
						color: #999;
						margin-left: 0.1rem;
					}
				}
				.appellation{
					width:2.66667rem;
					text-align: center;
				}
				.status{
					width: 1.6rem;
					i{
						float: right;
					}
				}
			}
		}
	}
}
</style>
