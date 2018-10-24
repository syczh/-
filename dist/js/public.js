define([ "jquery", "jquery-cookie"], function($){
	function main(){
		$(function(){
			$("#nav_list").on({
				mouseover: function(){
					$(".nav-layer").css("display", "block");
					$("#nav_list").addClass('on');
				},
				mouseout:function(){
					$(".nav-layer").css("display", "none");
					$("#nav_list").removeClass('on');
				}
					
			})
			$(".shopping").on({
				mouseover:function(){
					$("#header_car").css("display", "block");
					$(".shopping").addClass('on');
					$(".shoppingCar").css("background", 
						"url(../images/index/idx-nav-cart.gif) no-repeat 32% 6px");

				},
				mouseout:function(){
					$("#header_car").css("display", "none");
					$(".shopping").removeClass('on');
					$(".shoppingCar").css("background", 
						"url(../images/index/shoppin-cart.jpg) no-repeat 32% 6px");

				}
			})
			
			$("#orderEmail").click(function(){
				var value = $("#book_email").val();
				if(value == ""){
					$("#orderSuccess").css("display", "block").html("请输入邮箱地址！");
				}else if(value.length < 6 || value.length > 18){
					$("#orderSuccess").css("display", "block").html("长度应为6~18个字符！");
				}else if(/^\d/.test(value)){
					$("#orderSuccess").css("display", "block").html("请输入正确的邮箱地址！邮件地址必需以英文字母开头");
				}else{
						//判断每一个字符都符合要求
						if(/\W/.test(value)){
							$("#orderSuccess").css("display", "block").html("请输入正确的邮箱地址！邮件地址需由字母、数字或下划线组成");
							
						}else{
							$("#orderSuccess").css("display", "block").html("订阅成功！");
							
						}
					}
				$("#orderSuccess").stop().delay(8000).animate({opacity:0}, 100, "linear");
			})

			var top = $(document).scrollTop();
			$(window).scroll(function(){
				var scrollY = $(document).scrollTop();
				if(scrollY > top){//如果没有滚动到顶部，则显示
					$('.service').show();
				}else{
					$('.service').hide();
				}

			})
			$('#sub_close').click(function(){
				$('.sub_city_box').css("display", "none");
			})
			$('.backTop').click(function(){
				$("html,body").animate({scrollTop:0}, 500);
			})
			$('#sub_submit').click(function(){
				$('.sub_city_box').css("display" , "none");
				$('#sub_cityname_span').html($('#ss_city_name').val());
			})
			
				
		})
		
	}	
	return {
		main: main
	}
})