<?php
    header("Content-type:text/html;charset=utf-8");
    $link = mysql_connect("localhost", 'root', '123456');
    if(!$link){
        echo "链接数据库失败";
        exit; //退出当前程序。
    }
    mysql_set_charset("utf8");
    mysql_select_db("Haagen-Dazs");
    
        $password = $_POST['password'];
        $username = $_POST['username'];
        
        $sql = "SELECT * FROM users WHERE username='{$username}' AND password='{$password}'";
        
        // echo "{$sql}";
        $res = mysql_query($sql);
        $row = mysql_num_rows($res);
        echo "{$row}";
		if($row){
			echo "登陆成功";
			exit;
		}else{
			echo "登陆失败";
			exit;
		}

      
    mysql_close($link);
 ?>
