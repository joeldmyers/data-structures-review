const bubbleSort = require('./bubble-sort');

test('sees if array is sorted properly with bubble sort', () => {
  expect(bubbleSort.sort([5,1,4,2,9,4,3])).toEqual([1,2,3,4,4,5,9]);
});
