function sumOfElementsOfArray(arr){
	let sumValue = 0;
	for(let i=0; i<arr.length; i++){
		sumValue += arr[i];
	}
	return sumValue;
}


function getMaxSubArrSum(array){
	let sumOfSubArrays = [];
	for(let i=1; i<array.length+1; i++){
		for(let j=0; j<array.length-i+1; j++){
			let new_array = array.splice(j, i);
			sumOfSubArrays.push(new_array);
		}
	}
	return sumOfSubArrays;
}