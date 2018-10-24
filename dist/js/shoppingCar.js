define(["jquery","jquery-cookie"],function($){
	function mainshoppingCar(){
		$(function(){
			$('.selectmenu ul li').click(function(){
				$('.selectmenu ul li').removeClass('selecton');
				$(this).addClass('selecton');
				$('.skucoponlist').css("display", "none");
				$('.skucoponlist').eq($(this).index()).css("display", 'block');
			})
			
				
				sc_msg();
				function sc_msg(){
				$.ajax({
					url: "../json/data.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));
						//循环res
						/*function datajson(){
							for(var i = 0; i < res[5].length; i++){
								//for(var j = 0; j < res[5][i].length; j++){
									var id1= res[5][i].id;
																	//}
								if(id1 == sc_arr[i].id){
									var obj= res[5][i];
									alert(sc_arr[i].id);
									return obj;
								}
							}
						}*/
						for(var i = 0; i < sc_arr.length; i++){
							
							for(var j = 0; j < res[5].length; j++){
								//for(var j = 0; j < res[5][i].length; j++){
									var id1= res[5][j].id;
																	//}
								if(id1 == sc_arr[i].id){
									var obj= res[5][j];
									//alert(sc_arr[i].id);
									
								}
							}
							

							//alert(obj);
							$(`<tr class="cur " id="10_500">
                <td>
                    <input type="checkbox" class="select" name="select" checked="checked">
                </td>
                <td>
                    <dl>
                        <dt>
                            <a href="" title="融情夏威夷">
                                <img src="${obj.img}" width="100" height="100" alt="" title="" style="border: 1px solid #C2C2C2">
                            </a>
                        </dt>
                        <dd>
                            <p>
                                <a href="" title="融情夏威夷" name="cfSkuName"><span class="title" title="融情夏威夷">${obj.name}</span></a><br> 
                                <span class="title" name="cfSkuEnglishName" title="Love Hawaii">${obj.Englishname}</span><br> 
                                <span class="title" name="cfShowSize" title="600克">规格：${obj.weight}</span>
                            </p>
                        </dd>
                    </dl>
                </td>
                <td>
                    <strong class= "price"><i>¥</i>
                    ${obj.money}</strong>
                    </td>
                <td>
                    <div class="changeAmount">
                            <input class="fh" type="button" value="-" id='descrease'><input type="text" value="${sc_arr[i].num}" readonly="readonly" name="quantity" class="sr"><input class="fh" type="button" value="+" id="add">
                            </div>
                    </td>
                <td>
                    <strong class="col"></strong>
                </td>
                <td>
                    <a class="delete">删除</a>
                </td>
            </tr>`).appendTo('#skuList tbody');
					$(".display").css("display", "none");
						}
					var m = $('.sr').val();
					console.log(m);
					var n = obj.money;
					console.log(n);
					$('.col').html("<i>¥</i>" + m * n);
					var x = $('.col').html();
					$('.count').html(x);	

					}
				})
			}
			
				$('#skuList tbody').on("click", "#add", function(){
					var num = parseInt($(this).prev().val());
					num++;
					if(num <= 0){
						num = 1;
					}
					//$(this).parent().find('.sr').val(num);
					$('.changeAmount .sr').val(num);
					var sc_arr1 = eval($.cookie("goods"));
					for(var i = 0; i < sc_arr1.length; i++){
						sc_arr1[0].num = parseInt($('.sr').val());
					}
					// 动态改变单项总价
					
					var str = JSON.stringify(sc_arr1);
					$.cookie("goods", str,{
						expires: 7,
						raw:true
					});
					var m = $('.sr').val();
					console.log(m);
					var n = 268;
					console.log(n);
					$('.col').html("<i>¥</i>" + m * n);
					var x = $('.col').html();
					$('.count').html(x);
				})
				
				$('#skuList tbody').on("click","#descrease", function(){
					var num = parseInt($(this).next().val());

					num--;
					if(num <= 0){
						num =1;
					}
					
					$('.changeAmount .sr').val(num);
					var sc_arr1 = eval($.cookie("goods"));
					for(var i = 0; i < sc_arr1.length; i++){
						sc_arr1[0].num = parseInt($('.sr').val());
					}
					// 动态改变单项总价
					
					var str = JSON.stringify(sc_arr1);
					$.cookie("goods", str,{
						expires: 7,
						raw:true
					});
					var m = $('.sr').val();
					console.log(m);
					var n = 268;
					console.log(n);
					$('.col').html("<i>¥</i>" + m * n);
					var x = $('.col').html();
					$('.count').html(x);	
				})
			$('#skuList tbody').on("click", ".delete", function(){
				$(".tbody-head").remove();
				$.cookie("goods",[],{expires:-1});
				$('#couponDiv').css("display", "block");
				$('#couponList').css("display", "block");
				$('.null').css("display", "block");
				$('.skuList').css("display","none");
				$('#result').css("display","none");
			})
			$('.shopping').mouseenter(function(){
				$('.shopping ul').css("display", "none");
				$('.opacitys').html('');
				$.ajax({
					url: "../json/data.json",
					type: "get",
					success:function(res){
						var sc_arr = eval($.cookie("goods"));
						for(var i = 0; i < sc_arr.length; i++){
							for(var j = 0; j < res[5].length; j++){
								//for(var j = 0; j < res[5][i].length; j++){
									var id1= res[5][j].id;
																	//}
								if(id1 == sc_arr[i].id){
									var obj= res[5][j];
									//alert(sc_arr[i].id);
									
								}
							}
							var num2 = parseInt($('.changeAmount .sr').val());
							var num3 = $('.count').html();
							$(`<ul>
                                        <li>
                                        <div class="mini-carts">
                                        <a class="padding-nones" href="" title="融情夏威夷">
                                        <img src="${obj.img}" width="50" height="50" alt=""></a></div>
                                        <div class="mini-cart-text">
                                             <span style="white-space:nowrap;text-overflow:ellipsis;word-break:keep-all; overflow:hidden;">
                                             	<a class="padding-nones" href="details.html" name="skuName" title="融情夏威夷">${obj.name}</a>
                                             	</span>
                                             <span style="display:inline;">
                                             	<span name="headerShoppingCart_skuSize" style="display:inline;">${obj.weight}</span> x ${num2}件</span>
                                             <span>${num3}</span>
                                         </div>
                                        </li>
                                    </ul>`).appendTo('.opacitys');
						}
					},
					error:function(msg){
						alert(msg);
					}
				})
			})
		})

	}
	return {
		mainshoppingCar:mainshoppingCar
	}
})