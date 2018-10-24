define(["jquery","jquery-cookie"],function($){
	function mainlogin(){
		$('.login_kind a').click(function(){
			$('.login_kind a').attr("class", "");
			$('.login_kind a').eq($(this).index()).attr("class", "active");
			$('.Handover').css("display" , "none");
			$('.Handover').eq($(this).index()).css("display", "block");
		})
		$('#securityImage').html(testcode(4));
		$('#securityImage').click(function(){
			$('#securityImage').html(testcode(4));
		});
		$('#login').click(function(){
			if(!$('#loginName').val()){
				$('#login-loginName-error').html('用户名或邮箱不能为空');
			}else if(!$('#password').val()){
				$('#login-password-error').html('密码不能为空');
			}
			else if(!$('#securityCode').val()){
				$('#login-securityCode-error').html('请输入验证码');
			}else if($('#securityCode').val() != $('#securityImage').html()){
				$('#login-securityCode-error').html('验证码输入错误');
			}else{
				var str = `username=${$("#loginName").val()}
				&password=${$("#password").val()}`;
				// alert(str);
				
					$.ajax({
						url: 'login-1.php',
						type: "post",
						data:str,
						success:function(data){
							console.log(data);
							if(data == '用户名或密码错误'){
								/*$('.showError').html('');
								$('.showError').html(data);*/
							}else{
								$('.showError').html('');
								alert(data);
								//history.go(-1);
								$('.header_cont .left .check').html("欢迎");
							}
						},
						error:function(msg){
							alert(msg);
						}
					})
			}
		})
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

	}
	return {
		mainlogin:mainlogin
	}
})