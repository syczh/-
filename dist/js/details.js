define(["jquery","jquery-cookie"],function($){
	function maindetails(){
		$(function(){
			//加载数据
			$.ajax({
				url:"../json/data.json",
				type:"GET",
				success:function(res){
					for(var i = 0 ; i < res[5].length; i++){
						$(`<img class="product-left-img" id="${res[5][i].id}" 
							src="${res[5][i].img}" shareimg="" 
							width="500" height="500">`).appendTo('.jqzoom');
						$(`<a class="order-product-title">${res[5][i].name}</a>`)
						.appendTo('.content-order-product-right h1');
						$(`<p class="prince-cake">${res[5][i].Englishname}</p>`)
						.insertAfter('#downtaway');
						for(var j = 0; j < res[5][i].money.length; j++){
							$(`<span id="view_price">
								${res[5][i].money[j]}</span>`)
							.appendTo('.order-product-price');
						}
						
							
						
						
					}
				},
				error:function(msg){
					alert(msg);
				}
			})
			//放大镜
			var offsetX = 0;
			var offsetY = 0;

			$('.clearfix').mouseenter(function(ev){
				$('.scale').css("display", "block");
				
				
			}) 
			$('.clearfix').mousemove(function(ev){
				var e = ev || window.event;
				offsetX = e.pageX - $('.clearfix').offset().left;
				offsetY = e.pageY - $('.clearfix').offset().top;
				
					$('.scale').css({"left":offsetX - $('.scale').width()/2,
									"top":offsetY - $('.scale').height()/2});
					// 获取小框框的偏移位置
                    var lw=$('.scale').position().left;
                    var lh=$('.scale').position().top;
					// 判断边界（小框框只能在原图窗口范围内移动）
                    var maxW=$('.clearfix').width()-$('.scale').width();
                    var maxH=$('.clearfix').height()-$('.scale').height();
                    // 左边界
                    if(lw<=0){$('.scale').css('left','0px');}
                    // 右边界
                    if(lw>=maxW){
                        $('.scale').css('left',maxW+'px');
                    }
                    // 上边界
                    if(lh<=0){$('.scale').css('top','0px');}
                    // 下边界
                    if(lh>=maxH){
                        $('.scale').css('top',maxH+'px');
                    }

					 // 计算鼠标在小图里的位置  *1.6计算大图移动的比例
                    var newX=lw*1.6;
                    var newY=lh*1.6;



                	$('.scale img').css({left:-newX+'px',top:-newY+'px'});

				})
				$('.clearfix').mouseleave(function(){
					$('.scale').css("display", "none");
				})
				//$('order-product-price #view_price').css("display", "none");
				$('.eatings-e li').click(function(){
					$('.eatings-e li').removeClass('order-product-kg-click');
					$(this).addClass('order-product-kg-click');
					if($(this).index() == 1){
						$('#view_price').html('398');
					}else if($(this).index() == 2){
						$('#view_price').html('498');
					}else if($(this).index() == 0){
						$('#view_price').html('268');
					}
				})
				var num = 1;
				$('#add').click(function() {
					/* Act on the event */
					num++;
					if(num <= 0){
						num = 1;
					}
					
					$('.order-product-text').val(num);
					
					
				});
				$('#decrease').click(function() {
					/* Act on the event */
					num--;
					if(num <= 0){
						num =1;
					}
					
					$('.order-product-text').val(num);	
				});
				$('#order-product-buy').click(function(){
					//if($('.header_cont .left .check').html() == '登录 / 注册'){
						//window.location.href = "login.html";
					//}else{
						window.location.href = "shoppingCar.html";

					//}
				});
				$('#addToShoppingcartBut').click(function(){
					/*if($('.header_cont .left .check').html() == '登录 / 注册'){
						window.location.href = "login.html";
					}*/
					//window.location.href = 'shoppingCar.html';
					var num1 = $('.order-product-text').val();
					var id = $('.product-left-img').attr("id");
					var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加，直接将cookie存储进去
					var arr1 = [{id:id,num:num1}];
					$.cookie("goods", JSON.stringify(arr1), {
						expires: 7,
						raw: true
					});
				}else{
					//2、判断之前是否添加过商品
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
					var same = false; //假设没有添加过
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							//3、之前存储过数量+1
							console.log(arr[0].num);
							arr[i].num = parseInt(arr[0].num) + parseInt(num1);
							same = true;
							break;
						}
					}
					if(!same){
						//4、没有相同的
						var obj = {id: id, num: num1};
						arr.push(obj);
					}
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7,
						raw: true
					});
				}

				})
				
		})
	}
	return {
		maindetails:maindetails
	}
})