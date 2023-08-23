function secondlowest(arr) {
  let num1 = 100000;
  let num2 = 100000;
  for (let i = 0; i < arr.length; i++) {
    if (num1 > arr[i]) {
      num2 = num1;
      num1 = arr[i];
    } else if (num2 > arr[i]) {
      num2 = arr[i];
    }
  }
  return num2;
}

console.log(secondlowest([21, 39, 88, 45, 97, 88, 87, 92, 68]));
