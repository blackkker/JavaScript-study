function thorttle(handle,wait){
    var _this,args;
    var lastime = 0;
    return function(){
        var nowtime = new Date.getTime();
        _args = arguments;
        _this = this;
        if(nowtime - lastime > wait){
            handle.apply(_this,_args);
            lastime = nowtime;
        }
    }
}