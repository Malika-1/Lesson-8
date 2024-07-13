// let numbers  = [4, 16, 19, 22, 11, 144, 967, 19124]

// let even = [4, 16, 22, 144, 19124]
// console.log(even);

// let odd = [19, 11, 967]
// console.log(odd);

let arr = [4, 16, 19, 22, 11, 144, 967, 19124];


for (let even = 0; even < arr.length; even++)
{
	if ((arr[even] % 2) === 0)
  {
  	console.log(arr[even]);
  }
}
