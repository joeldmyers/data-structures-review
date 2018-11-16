var arr = [5,1,4,2,9,4,3];

// note - can still be optimized further; unnecessary looping - already did this previously before creating repo.
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
  	for (let j = 0; j < arr.length; j++) {
    	if (arr[j] > arr[j + 1]) {
       const temp = arr[j + 1];
       arr[j + 1] = arr[j];
       arr[j] = temp;
      }
    }
  }
  alert(arr);
}

bubbleSort(arr);
