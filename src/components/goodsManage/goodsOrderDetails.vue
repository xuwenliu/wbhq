<template>
  	<div class="goodsOrderDetails">
  	<div class="goodsOrderDetails-content">
  		<ul class="goodsOrderDetails-title">
    		<li>订单编号：CD201707112103 <span>7月11日</span></li>
    		<li> <img src=""> 活力无限 <span style="color:#f5a12b;">领取时间：7月12日</span></li>
    	</ul>
    	<div class="goodsOrderDetails-list">
    		<ul>
    			<li class="clearfix">
    				<img src="" alt="">
    				<div class="name">
    					<h1>农场自家土地出的有机蔬菜当天现采摘，新鲜又营养</h1>
    					<h2><span class="price">¥78</span><i>/500g</i><span class="num">x2</span></h2>
    				</div>
    			</li>
    			<li class="clearfix">
    				<img src="" alt="">
    				<div class="name">
    					<h1>农场自家土地出的有机蔬菜当天现采摘，新鲜又营养</h1>
    					<h2><span class="price">¥78</span><i>/500g</i><span class="num">x2</span></h2>
    				</div>
    			</li>
    			<li class="clearfix">
    				<img src="" alt="">
    				<div class="name">
    					<h1>农场自家土地出的有机蔬菜当天现采摘，新鲜又营养</h1>
    					<h2><span class="price">¥78</span><i>/500g</i><span class="num">x2</span></h2>
    				</div>
    			</li>
    			<li class="clearfix">
    				<img src="" alt="">
    				<div class="name">
    					<h1>农场自家土地出的有机蔬菜当天现采摘，新鲜又营养</h1>
    					<h2><span class="price">¥78</span><i>/500g</i><span class="num">x2</span></h2>
    				</div>
    			</li>
    			
    		</ul>
    		
    	</div>
    	<div class="orderStatus" v-if="orderStatus==0">订单已关闭</div>
    	<div class="orderStatus" v-else-if="orderStatus==1"><span>总价：¥258</span>订单已完成</div>
    	<div class="orderStatus" v-else><span>总价：¥258</span><a>取消订单</a></div>
  	</div>
    	
  	</div>
</template>

<script>
export default {
  	name: 'goodsOrderDetails',
  	data () {
  		return {
  			orderStatus:0,//0=已关闭，2=已完成，3=取消订单
  		}
  	},
  	created(){

  	},
  	methods: {

  	}
}
</script>
<style scoped lang="less">
.goodsOrderDetails-content{
	position: absolute;
	top: 0;left: 0;right: 0;bottom: 0;
	background-color: #f0f0f0;
	.goodsOrderDetails-title {
		li{
			height: 1.17333rem;
			line-height: 1.17333rem;
			background-color: #fff;
			padding: 0 0.33333rem;
			span{
				float: right;
			}
			img{
				width: 0.66667rem;
				height: 0.66667rem;
				vertical-align: middle;
				margin-right: 0.2rem;
			}
		}
		li:first-child{
			border-bottom: 1px solid #f0f0f0;
		}
	}
	.goodsOrderDetails-list{
		padding:0 0.33333rem;
		li{
			border-top: 1px solid #ccc;
			padding: 0.32rem 0;
			img{
				width: 1.6rem;
				height: 1.6rem;
				margin-right: 0.41333rem;
				float: left;
				vertical-align: middle;
			}
			.name{
				float: left;
				width: 78%;
				display: flex;
				flex-direction:column;
				height: 1.6rem;
				justify-content:space-between;
				h1{
					width: 5.2rem;
					line-height: 0.5rem;
					font-size: 0.4rem;
				}
				h2{
					color: #333;
					.price{
						font-size: 0.48rem;
						color: #f83600;
						margin-right: 0.09333rem;
					}
					.num{
						float: right;
					}
					i{
						font-size: 0.24rem;
						
					}
				}
			}
		}
		li:first-child{
			border-top: none;
		}
	}
	.orderStatus{
		height: 1.16rem;
		line-height: 1.16rem;
		background-color: #fff;
		text-align: right;
		color: #666;
		font-size: 0.4rem;
		padding:0 0.30667rem;
		span{
			float: left;
			font-size: 0.4rem;
			color: #f83600;
		}
		a{
			padding: 0.21333rem 0.32rem;
			border:1px solid #666;
			border-radius: 0.08rem;
		}
	}
}
</style>
