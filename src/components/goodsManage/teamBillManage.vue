<template>
  	<div class="teamBillManage">
	  	<div class="teamBillManage-content">
  			<div class="header">温馨提示：请尽快为拼团安排导师</div>
		    <div class="tab">
		    	<ul>
		    		<li v-for="(item,index) in tab" :class="{'active':checkIndex==index}" @click="checkIndex=index">{{item}}</li>
		    	</ul>
		    </div>
		    <div class="teamBillManage-list">
		    	<ul>
		    		<li class="list-item">
		    			<ol class="teamBillManage-title">
				    		<li>订单编号：CD201707112103 <span>7月11日</span></li>
				    		<li> 发团日期：7月1日 09:00<span style="color:#f83600;">拼团中</span></li>
				    	</ol>
				    	<div class="tbpw clearfix">
				    		<div class="tbpw-left">
				    			<h1>【探途拼玩】梦幻水世界之戏水捉鱼</h1>
				    			<h1>
				    			<span class="price">¥78</span><i>/人</i>
								<p><img src="" alt="">活力无限<span>团长</span></p>
				    			</h1>
				    			
				    		</div>
				    		<img class="tbpw-right-img" src="" alt="">
				    	</div>
				    	<ol class="teamBillManage-manager">
				    		<li>
				    		掌柜分配 <i>点击可更改</i> 
							<div>
								<span>大掌柜</span>
								<p>
									<img src="" alt="">
				    			李松松
				    			<img src="../../assets/img/right.png">
								</p>
				    			
							</div>
				    		</li>
				    		<li>
				    		<img src="" alt=""> 
				    		剩余01天21小时29份47秒<span>安排导师</span></li>
				    	</ol>
		    		</li>
		    		<li class="list-item">
		    			<ol class="teamBillManage-title">
				    		<li>订单编号：CD201707112103 <span>7月11日</span></li>
				    		<li> 发团日期：7月1日 09:00<span style="color:#f83600;">拼团中</span></li>
				    	</ol>
				    	<div class="tbpw clearfix">
				    		<div class="tbpw-left">
				    			<h1>【探途拼玩】梦幻水世界之戏水捉鱼</h1>
				    			<h1>
				    			<span class="price">¥78</span><i>/人</i>
								<p><img src="" alt="">哆啦A梦<span>团长</span></p>
				    			</h1>
				    			
				    		</div>
				    		<img class="tbpw-right-img" src="" alt="">
				    	</div>
				    	<ol class="teamBillManage-manager">
				    		<li>
				    		掌柜分配 <i>点击可更改</i> 
							<div>
								<span>大掌柜</span>
								<p>
									<img src="" alt="">
				    			李松松
				    			<img src="../../assets/img/right.png">
								</p>
				    			
							</div>
				    		</li>
				    		<li>
				    		<img src="" alt=""> 
				    		剩余01天21小时29份47秒
				    		<div class="imgNameFont">
				    			<img src="" alt="">
				    			<div>
				    				<h1>泽木大大</h1>
				    				<p>已接受</p>
				    			</div>
				    		</div>
				    		<span class="change">更换导师</span></li>
				    	</ol>
		    		</li>
		    		<li class="list-item">
		    			<ol class="teamBillManage-title">
				    		<li>订单编号：CD201707112103 <span>7月11日</span></li>
				    		<li> 发团日期：7月1日 09:00<span style="color:#666;">拼团失败</span></li>
				    	</ol>
				    	<div class="tbpw clearfix">
				    		<div class="tbpw-left">
				    			<h1>【探途拼玩】梦幻水世界之戏水捉鱼</h1>
				    			<h1>
				    			<span class="price">¥78</span><i>/人</i>
								<p><img src="" alt="">可爱的大白<span>团长</span></p>
				    			</h1>
				    			
				    		</div>
				    		<img class="tbpw-right-img" src="" alt="">
				    	</div>

		    		</li>
		    	</ul>
		    </div>
	  	</div>
  	</div>
</template>

<script>

export default {
  	name: 'teamBillManage',
  	data () {
  		return {
  			tab:["全部","待安排","已安排","拼团失败"],
  			checkIndex:0,
  		}
  	},
  	created(){

  	},
  	methods: {

  	}
}
</script>
<style scoped lang="less">
.teamBillManage-content{
	position: absolute;
	top: 0;left: 0;right: 0;bottom: 0;
	background-color: #f0f0f0;
	.header{
		height:0.93333rem;
		line-height:0.93333rem;
		color:#999; 
		font-size: 0.29333rem;
		padding-left: 0.37333rem;
	}
	.tab{
		width: 100%;
		height: 1.17333rem;
		background-color: #fff;
		font-size: 0.4rem;
		color: #333;
		ul{
			display: flex;
			justify-content:space-around;
			padding: 0 0.56rem;
			text-align: center;
			li{
				flex:1;
				line-height: 1.17333rem;
			}
			li.active{
				color: #ff9b0e;
				border-bottom: 2px solid #ff9b0e;
			}
		}
	}
	.teamBillManage-list{
		.list-item{
			margin-top: 0.21333rem;
			.teamBillManage-title {
				li{
					height: 1.17333rem;
					line-height: 1.17333rem;
					background-color: #fff;
					padding: 0 0.32rem;
					color: #333;
					font-size: 0.32rem;
					span{
						float: right;
					}
				}
				li:first-child{
					border-bottom: 1px solid #f0f0f0;
				}
			}
			.teamBillManage-manager{
				.teamBillManage-title;
				li:first-child{
					i{
						color: #999;
						font-size: 0.26667rem;
					}
					div{
						// display: inline-block;
						float: right;
						span{
							float: left;
							margin-right: 1rem;
						}
						p{
							display: inline-block;
							float: right;
							img:first-child{
								width: 0.66667rem;
								height: 0.66667rem;
								vertical-align: middle;
								margin-right: 0.10667rem;
								border-radius: 50%;
							}
							img:last-child{
								vertical-align: middle;
								margin-left: 0.29333rem;
								width: 0.2rem;
								height: 0.41333rem;
							}
						}
					}
				}
				li:last-child{
					color: #f5a12b;
					img{
						width: 0.26667rem;
						height: 0.26667rem;
					}
					span{
						color: #fff;
						line-height: 2;
						margin-top: 0.2rem;
						background-color: #f83600;
						font-size: 0.4rem;
						padding: 0 0.32rem;
						border-radius: 0.08rem;
					}
					span.change{
						color: #666;
						background-color: #fff;
						border:1px solid #666;
					}
					.imgNameFont{
						display: inline-block;
						margin-left: 0.4rem;
						img{
							width: 0.66667rem;
							height: 0.66667rem;
						}
						div{
							display: inline-block;
							color: #666666;
							h1{
								
								font-size: 0.32rem;
								line-height: 2;
							}
							p{
								font-size: 0.21333rem;
								line-height: 1.5;

							}
						}
					}
				}
			}
			.tbpw{
				height: 2.2rem;
				padding: 0.32rem;
				background-color: #f0f0f0;
				.tbpw-left{
					float: left;
					display: flex;
					justify-content:space-between;
					flex-direction:column;
					height: 2rem;
					width: 77%;
					h1{
						color: #333;
						font-size: 0.48rem;
						.price{
							font-size: 0.48rem;
							color: #f83600;
							margin-right: 0.09333rem;
						}
						i{
							color: #666;
							font-size: 0.26667rem;
						}
						img{
							width: 0.66667rem;
							height: 0.66667rem;
							vertical-align: middle;
							margin-right: 0.2rem;
						}
						p{
							display: inline-block;
							float: right;
							font-size: 0.32rem;
							color: #666;
							span{
								color: #fff;
								background-color: #ff9b0e;
								margin-left: 0.14667rem;
								font-size: 0.26667rem;
								padding: 0 0.1rem;
								border-radius:48%; 
							}
						}
					}
				}
				.tbpw-right-img{
					width: 2rem;
					height: 2rem;
					float: right;
				}
			}
		}
		
	}
	
}

</style>
