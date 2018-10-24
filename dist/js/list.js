define(["jquery","jquery-cookie"],function($){
	function mainlist(){
		$(function(){
			var count = 0;
			$('.product-list-texts li').click(function(){
				//$(this).css("background", "#cd1d4e");
				$('.product-list-texts li').removeClass('abc');
				$(this).addClass('abc');
				if(count % 2 == 0){
					$('.ico-arrow-d').css("background","0");
					$('.ico-arrow-d').eq($(this).index()).css("background","url(../images/list/pro-list-arrow.gif) no-repeat -8px 0");
				}else{
					$('.ico-arrow-d').css("background","0");
					$('.ico-arrow-d').eq($(this).index()).css("background","url(../images/list/pro-list-arrow.gif) no-repeat");
				}
				count++;
			})
			$('.start-collction').mouseenter(function(){

				$(this).addClass('sd-on');
				$(this).find('.stat-collction').css("display", "block");
			})
			$('.start-collction').mouseleave(function(){

				$(this).removeClass('sd-on');
				$(this).find('.stat-collction').css("display", "none");
			})
			$.ajax({
				url: '../json/data.json',
				type: "GET",
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					
					for(var i = 0; i < res[4].length; i++){
						$(`<li style="height: 452px;">
                                    <div class="start-collction">
                                        <a href="details.html" target="_blank" class="stat-imgs">
                                        <img src="${res[4][i].img}" width="310" height="310">
                                        </a>
                                        <a href=""  class="stat-collction"></a>
                                    </div>
                                    <h4 class="e-tie ent-a"><a href="" target="_blank" class="stat-imgs">${res[4][i].name}</a></h4>
                                    <div class="stat-arilt ent-arilt">
                                        <span><i class="i-strong">¥ </i>268<i>
                                                
                                                /${res[4][i].weight}</i>
                                        </span>${res[4][i].Englishname}</div>
                                    <p class="p-martop">${res[4][i].taste}</p>      
                                            <p>${res[4][i].material}</p>
                                        <div class="start-cart add-carts">
                                        <a>立即购买</a>
                                    </div> 
                                </li>`).appendTo('#productCollection');

					}
					//$("#scroll-ul").html(html);
				},
				error: function(msg){
					alert(msg);
				}
			})
			
			
			
			
		})
		

	}
	return {
		mainlist:mainlist
	}
})