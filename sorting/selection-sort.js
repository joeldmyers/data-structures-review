var arr = [5,1,4,2,9,4,3];

function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
  	// store lowest item
  	var min = i;

    for (var j = i + 1; j < arr.length; j++) {
    	if (arr[j] < arr[min]) {
      	min = j;
      }
    }
  	if (min !== i) {
    	var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  alert(arr);
}

selectionSort(arr);
