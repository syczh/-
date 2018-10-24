console.log("加载成功");

/*
	管理我们index.html引入的所有模块
*/
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"jquery1":"jquery-1.10.1.min",
		//抛物线函数，不遵从AMD
		//"parabola": "parabola",
		"public": "public",
		//"slide": "slide"
		"list": "list"
	},
	//设置模块之间的依赖关系
	shim: {
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件
		*/
		/*"parabola": {
			exports: "_"
		}*/
	}
})


require(['public','list'], function(public, list){
	public.main();
	list.mainlist();
	
})