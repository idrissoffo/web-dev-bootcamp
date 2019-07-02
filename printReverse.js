console.log("connected")

function printReverse(arr){

	for( var i= arr.length - 1; i >= 0; i-- ){

		console.log(arr[i]);
	}

}

printReverse([5, 4, 6, 2, 1]);




function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true;
}

isUniform([1, 1, 1, 2, 3]);

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

sumArray([50, 50, 100, 200]);

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

max([10, 20, 30, 40, 50]);

function printNumbers(arr){

	for(var i = 0; i < arr.length; i++){

		if(arr[i] % 3 ===  0){

			console.log(arr[i]);
		}
	}
}

printNumbers(300, 30, 45, 60, 90, 120, 150);