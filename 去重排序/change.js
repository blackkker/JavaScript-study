function change(arr){
	var obj[];
	var tmp[];
	for(var i=0;i<arr.length;i++){
		if(!obj[arr[i]]){
			obj[arr[i]]=1;
			tmp.push(arr[i]);  //push是在尾部插入元素
			tmp.sort(function(a,b){
				return a-b;
			})
		}
	}
	return tmp;
}

function change(arr){
	var result[];
	for(var i=0;i<arr.length;i++){
		if(result.indexOf(arr[i])==-1){
			result.push(arr[i]);
			result.sort(function(a,b){
				return a-b;
			});
		}
	}
	return result;
}