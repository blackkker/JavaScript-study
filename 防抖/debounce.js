function debounce(handle,wait){
	var timer = null;
	return function(){
				var _this	=	this,
				_args = arguments;
				clearTimeout(timer);
				timer	=	setTimeout(function(){
					handle.apply(_this,_args);
				},wait);
    }
}