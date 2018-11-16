var arr = [5,1,4,2,9,4,3];

// note - can still be optimized further; unnecessary looping - already did this previously before creating repo.
function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
  	for (var j = 0; j < arr.length; j++) {
    	if (arr[j] > arr[j + 1]) {
       var temp = arr[j + 1];
       arr[j + 1] = arr[j];
       arr[j] = temp;
      }
    }
  }
  alert(arr);
}

bubbleSort(arr);
