define(["jquery","jquery-cookie"],function($){
	function mainindex(){
		$().extend({
			size: function(){
				return this.elements.length;
			}
		})
		$(function(){
			$("#productCollection").on("mouseover", "li", function(){
				$(this).find(".stat-collction").css("display", "block");
				$(this).find(".start-collction").css("border", "1px solid gold");
				
			})
			$("#productCollection").on("mouseout", "li",function(){
				$(".stat-collction").css("display", "none");
				$(".start-collction").css("border", "solid 1px #eceaeb");
			})
			//$(".butter-swtich ul li").eq(0).addClass('cur');
			$(".butter-swtich ul").on("mouseover", "li",function(){
				//$(this).addClass('cur');
				$('.butter-swtich ul li').stop().animate({width:"210px"},400);
				$(this).stop().animate({width:"350px"},100,"linear");
				//$(this).find('.txt').removeClass('txthover');
				$('.txt').removeClass('txthover');
				//$(this).find('.txt').css("background"," url(../images/index/shutter_bg.gif) no-repeat 0 -77px")
				$(this).find('.txt').addClass('txthover');
				$('.mask').css("display",'block');
				$(this).find('.mask').css("display",'none');
					var iNow1 = $(this).index();
					
					$('.cake-item').animate({left: iNow1 * -976},function(){
						if(iNow1 == 4){
						iNow1 = 0;
						$('.cake-item').css("left", "0px");
					}
					})
			
			})
			var oNum = $('.cake-item ul').position().left;
			$('.cake-prev').click(function(){
				oNum += 244;
				$('.cake-item ul').finish().animate({left:oNum},function(){
					if(oNum >= 0){
					oNum = -976;
					$('.cake-item ul').css('left', -976);
				}
				});
			})
			$('.cake-next').click(function(){
				oNum -= 244;
				$('.cake-item ul').finish().animate({left: oNum},function(){
					if(oNum <= -1952){
					oNum = -976;
					$('.cake-item ul').css('left', -976);
				}
				});
				
			})
			// $('.cake-prev').on("click",function(){
			// 	$('.cake-item').animate({left:`${$('.cake-item ul').css('left')-244}`});
			// })
			$.ajax({
				url: '../json/data.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res[0].length; i++){
						html += `<li>
                    <a href="">
                        <img src="${res[0][i].src}" alt="">
                    </a>
                </li>`;

					}
					$("#scroll-ul").html(html);
					var html1 = "";
					for(var i = 0; i < res[2].length; i++){
						html1 += `<li class="" >
                                <a href="">
                                    <img src="${res[2][i].img}">
                                </a>
                                <div class="txt">
                                    <h4>${res[2][i].title}</h4>
                                </div>
                                <div class="mask"></div></li>`;
					}
					$(".butter-swtich ul").html(html1);
					//var html2 = '';
					//var html3 = '';
					for(var i = 0; i < res[3].length; i++){
						var html2 = '';
						for(var z = 0; z < 3; z++){
							for(var j = 0; j < res[3][0].length; j++){
								$(` <li><a class="en-testcenters" href="" target="_blank"> 
												<img src="${res[3][0][j].img}">
	                                        </a>
	                                            <h4>
	                                                <a href="" target="_blank">${res[3][0][j].name}</a>
	                                            </h4>
	                                            <p>
	                                                ${res[3][0][j].Englishname} &nbsp;<span><i class="i-strong">¥ </i>
	                                                ${res[3][0][j].money}
	                                                <i>/${res[3][0][j].weight}</i> </span>
	                                            </p>
	                                            <div class="btn-buy">
	                                                <a href="details.html">立即购买</a>
	                                            </div>
	                                    </li>`).appendTo('.cake-item .one');
							}
							//$(".cake-item .one").html(html2);
						}
						
						var html3 = '';
						for(var z = 0; z < 3; z++){
							for(var j = 0; j < res[3][1].length; j++){
								$(`<li><a class="en-testcenters" href="" target="_blank"> <img src="${res[3][1][j].img}"></a>
	                                            <h4>
	                                                <a href="" target="_blank">${res[3][1][j].name}</a>
	                                            </h4>
	                                            <p>
	                                                <span><i class="i-strong">¥ </i>
	                                                ${res[3][1][j].money}<i> </i> </span> ${res[3][1][j].Englishname}&nbsp;
	                                            </p>
	                                            <div class="btn-buy">
	                                                <a href="">立即购买</a>
	                                            </div></li>`).appendTo('.cake-item .two');
							}
							//$(".cake-item .two").html(html3);
						}
						
						var html4 = '';
						for(var z = 0; z < 3; z++){
								for(var j = 0; j < res[3][2].length; j++){
								$(`<li><a class="en-testcenters" href="" target="_blank"> <img src="${res[3][2][j].img}"></a>
	                                            <h4>
	                                                <a href="" target="_blank">${res[3][2][j].name}</a>
	                                            </h4>
	                                            <p>
	                                                <span><i class="i-strong">¥ </i>
	                                                ${res[3][2][j].money}<i> 
	                                                        /${res[3][2][j].weight}</i> </span>${res[3][2][j].Englishname}&nbsp;
	                                            </p>
	                                            <div class="btn-buy">
	                                                <a href="">立即购买</a>
	                                            </div></li>`).appendTo('.cake-item .three');
							}
							//$(".cake-item .three").html(html4);
						}
						
						var html5 = '';
						for(var z = 0; z < 3; z++){
							for(var j = 0; j < res[3][3].length; j++){
								$(`<li><a class="en-testcenters" href="" target="_blank"> <img src="${res[3][3][j].img}"></a>
	                                            <h4>
	                                                <a href="" target="_blank">${res[3][3][j].name}</a>
	                                            </h4>
	                                            <p>
	                                                <span><i class="i-strong">¥ </i>
	                                                ${res[3][3][j].money}<i> </i> </span> ${res[3][3][j].Englishname}&nbsp;
	                                            </p>
	                                            <div class="btn-buy">
	                                                <a href="">立即购买</a>
	                                            </div></li>`).appendTo('.cake-item .four');
							}
							//$(".cake-item .four").html(html5);
						}
						
					}

				},
				error: function(msg){
					alert(msg);
				}
			})//
			$.ajax({
				url: '../json/data.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";

					for(var i = 0; i < res[1].length; i++){
								$(`<li id= "li"><div class="start-collction" id = "start-collction">
                                        <a href="" class="stat-imgs" target="_blank"> <img src="${res[1][i].img}" width="210" height="210">
                                        </a><a href=""  class="stat-collction" id="stat-collction"></a>
                                    </div>
                                    <h4 class="e-tie">
                                        <a href="" target="_blank">${res[1][i].name}</a>
                                    </h4>
                                    <div class="stat-arilt">
                                        <span class="stat-arbottom">
                                            <i class="i-strong">¥ </i>
                                            ${res[1][i].money}<i> /${res[1][i].weight}</i>
                                         </span>${res[1][i].Englishname}
                                    </div>

                                    <div class="start-cart">
                                        <a href="details.html">立即购买</a>
                                    </div></li>`).appendTo('#productCollection');
						
                	
					}
					//$("#productCollection").html(html);
					
				},
				error: function(msg){
					alert(msg);
				}
			})//
			var oBtns = $("#scroll").find("ol").find("li");
			var oUl = $("#scroll").find("ul");
			var aLi = oUl.find("li");


			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识


			timer = setInterval(timerInner, 2000);

			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				document.title = iNow;
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.animate({left: iNow * -1590}, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("left", "0px");
					}
				});
			}


			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#scroll").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
			
		})

	}
	return {
		mainindex: mainindex
	}
})