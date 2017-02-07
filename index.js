(function(win){
	function change(){
		// doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*20+'px';	
		document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/320*20+'px';
	}
	change();
	win.addEventListener('resize',change,false);
})(window);