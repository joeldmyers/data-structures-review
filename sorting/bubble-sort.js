const bubbleSort = {
  sort: (arr) => {
  	for (var i = 0; i < arr.length; i++) {
    	for (var j = 0; j < arr.length; j++) {
      	if (arr[j] > arr[j + 1]) {
         var temp = arr[j + 1];
         arr[j + 1] = arr[j];
         arr[j] = temp;
        }
      }
    }
    return arr;
  }
}

module.exports = bubbleSort;
