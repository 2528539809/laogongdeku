
/*
 * version:0.2
 * author: lanthor
 * 2018-11-05 
 * 调用方法
	var pubtop = new WanxiPublicTop();
	pubtop.title = "文档标题";
	pubtop.time = "2018-11-12";
	pubtop.student = "学生名字";
	pubtop.teacher = '胡老师';
	pubtop.adviser = '赵老师';
	pubtop.show();
 */
var WanxiPublicTop2 = function(opt){
	
	this.title = '';
	this.student = '';
	this.time = '';
	this.teacher = '';
	this.adviser = '';

	//调用样式
	var head = document.getElementsByTagName("head");
	var css = document.createElement("link");
		css.href = 'images/wx_public.css';
		css.rel = "stylesheet";
		css.type = "text/css";
		head[0].appendChild(css);
	document.createElement("link");
	
	this.show = function(){
		var tmp = '';
		tmp += '<div class="wx-public-top">';
		this.title ? tmp += '	<div class="wx-public-title">' + this.title + '</div>' : "";
		tmp += '	<div class="wx-public-author">';
		this.student ? tmp += '		<span>学生：<em>' + this.student + '</em></span>' : "";
		this.time ? tmp += '		<span>时间：<em>' + this.time + '</em></span>' : "";
		this.teacher ? tmp += '		<span>教师：<em>' + this.teacher + '</em></span>' : "";
		this.adviser ? tmp += '		<span>班主任：<em>' + this.adviser + '</em></span>' : "";
		tmp += '	</div>';
		tmp += '	<div class="wx-public-right"><img class="wx-public-logo" src="images/wx_logo.png"><span class="wx-public-toptag">万流汇聚 生生不息</span></div>';
		tmp += '</div>';
		
		document.title = this.title;
		var divObj = document.createElement("div"); 
		divObj.innerHTML = tmp; 
		var first = document.body.firstChild;
		document.body.insertBefore(divObj,first);
	}
	
}

/*
 * version:0.3
 * author: lanthor
 * 2018-11-12
 * 调用方法 var pubtop = new WanxiPublicTop3({title:"文档标题", time:"2018-11-12", student:"学生名字", teacher:'胡老师', adviser:'赵班主任' });
 */
var WanxiPublicTop = function(opt){
	
	this.opt = {};
	this.default = {
		title : '默认标题',
		student : '',
		time : '',
		teacher : '',
		adviser : ''
	};

	if(opt){
		this.opt.title = opt.title ? opt.title : this.default.title ;
		this.opt.student = opt.student ? opt.student : this.default.student ;
		this.opt.time = opt.time ? opt.time : this.default.time ;
		this.opt.teacher = opt.teacher ? opt.teacher : this.default.teacher ;
		this.opt.adviser = opt.adviser ? opt.adviser : this.default.adviser ;
	}else{
		this.opt = this.default;
	}

	//调用样式的函数
	this.link = function(href){
		href = href ? href : "images/wx_public.css";
		var head = document.getElementsByTagName("head");
		var css = document.createElement("link");
		css.href = href;
		css.rel = "stylesheet";
		css.type = "text/css";
		head[0].appendChild(css);
		document.createElement("link");
	}
	
	this.show = function(){
		var tmp = '';
		tmp += '<div class="wx-public-top">';
		this.opt.title ? tmp += '	<div class="wx-public-title">' + this.opt.title + '</div>' : "";
		tmp += '	<div class="wx-public-author">';
		this.opt.student ? tmp += '		<span>学生：<em>' + this.opt.student + '</em></span>' : "";
		this.opt.time ? tmp += '		<span>时间：<em>' + this.opt.time + '</em></span>' : "";
		this.opt.teacher ? tmp += '		<span>教师：<em>' + this.opt.teacher + '</em></span>' : "";
		this.opt.adviser ? tmp += '		<span>班主任：<em>' + this.opt.adviser + '</em></span>' : "";
		tmp += '	</div>';
		tmp += '	<div class="wx-public-right"><img class="wx-public-logo" src="images/wx_logo.png"><span class="wx-public-toptag">万流汇聚 生生不息</span></div>';
		tmp += '</div>';
		
		document.title = this.opt.title;
		var divObj = document.createElement("div"); 
		divObj.innerHTML = tmp; 
		var first = document.body.firstChild;
		document.body.insertBefore(divObj,first);
	}
	this.link("images/wx_public.css");
	this.show();
	
}

