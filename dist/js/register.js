define(["jquery","jquery-cookie","ajax"],function($){
	function mainregister(){
		$(function(){
			var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
			$('#mobile').blur(function(){
				if(!mobilereg1.test($('#mobile').val())){
					$('#mobile-span').html('请输入正确的手机号码');
				}else{
					$('#mobile-span').html('');
				}
			})
			$('#securityImage').html(testcode(4));
			$('#securityImage').click(function(){
				$(this).html(testcode(4));
			})
			//产生随机验证码
			function testcode(n){
				var arr = [];
				for(var i = 0;i < n;i++){
					var num = parseInt(Math.random() * 100);
					if (num >= 0 && num <= 9) {
						arr.push(num);
					}else if (num <= 90 && num >=65) {
						var str = String.fromCharCode(num);
						arr.push(str);
					}else if (num >= 17 && num <= 42) {
						var str = String.fromCharCode(num + 80);
						arr.push(str);
					}else{
						i--;
					}
				}
			return arr.join('');
			}
			$('.btn-reg').click(function(){
				if(!$('#mobile').val()){
					$('#mobile-span').html('请输入手机号码');
				}else if(!mobilereg1.test($('#mobile').val())){
					$('#mobile-span').html('请输入正确的手机号码');
				}else if(!$('#securityCode').val()){
						$('#securityCode-span').html('请输入验证码');
				}else if($('#securityCode').val() != $('#securityImage').html()){
							$('#securityCode-span').html('验证码输入错误');
				}else if(!$('#password').val()){
					$('#password-span').html('请输入密码');
				}else if($('#password').val().length< 6 || $('#password').val().length > 12){
					$('#password-span').html('密码长度应为6~12');
				}else if(!$('#passwordAgain').val()){
					$('#passwordAgain-span').html('请输入密码');
				}else if($('#password').val() != $('#passwordAgain').val()){
					$('#passwordAgain-span').html('密码输入不一致');
				}else{
					var str = `username=${$("#mobile").val()}&password=${$("#password").val()}`;
					//alert(str);
					$.ajax({
						url: '../html/register.php',
						type: "post",
						data:str,
						success:function(data){
							alert(data);
							if(data == '该用户已被注册'){
								window.location.href = "../html/register.html";
							}else if(data == '注册成功'){
								history.go(-1);
								$('.header_cont .left .check').html("欢迎");
							}
						},
						error:function(msg){
							alert(msg)
						}
					})
					//alert('注册成功');
					//window.location.href = '../index.html';
					
				}
						
					
					

				
			})
			
		})
		
	}
	return {
		mainregister:mainregister
	}
})