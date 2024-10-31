// ### Massivlar bilan ishlash
// 1-misol
// function commonElements(arr1, arr2) {
//   return arr1.filter(element => arr2.includes(element))
// }

// let firstMassiv = [1, 2, 3, 4, 5]
// let secondMassiv = [4, 5, 6, 7, 8]
// let res = commonElements(firstMassiv, secondMassiv)
// console.log(res);


// 3-misol
// function sumOfPositiveNumbers(arg) {
//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] > 0) {
//       sum += arg[i]
//     }
//   }
//   return sum
// }

// console.log(sumOfPositiveNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3]));



// 7-misol
// function MassivCombine(arr1, arr2) {
//   return [...arr1, ...arr2]
// }

// const firstArr = [1, 2, 3, 4, 5]
// const secondArr = [4, 5, 6, 7, 8]
// const res = MassivCombine(firstArr, secondArr)
// console.log(res);

// 8 - misol
// function oddAndEven(num) {
//   let odd = []
//   let even = []
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//       odd.push(num[i])
//     } else if (num[i] % 2 == 1) {
//       even.push(num[i])
//     }
//   }
//   return { odd, even }
// }

// console.log(oddAndEven([1, 2, 3, 4, 5, 6]));


// 9-misol
// function check(arr, num) {
//   return arr.includes(num)
// }

// const arrMy = [1, 2, 3, 4, 5]
// const fistArr = check(arrMy, 3)
// const secondArr = check(arrMy, 6)
// console.log(fistArr, secondArr);


// 10-misol
// function largestAndSmallestElements(arg) {
//   let theBiggest = arg[0]
//   let theYoungest = arg[0]
//   for (let i = 1; i < arg.length; i++) {
//     if (arg[i] > theBiggest) {
//       theBiggest = arg[i]
//     }
//     if (arg[i] < theYoungest) {
//       theYoungest = arg[i]
//     }
//   }
//   return { theBiggest, theYoungest }
// }

// console.log(largestAndSmallestElements([1, 2, 3, 4, 5, 6, 7]));



// ### Obyektlar bilan ishlash uchun misollar
// 11-misol
// function sortObjectByKeys(obj) {
//   const sortKeys = Object.keys(obj).sort()

//   const sorteObj = {}
//   sortKeys.forEach(key => {
//     sorteObj[key] = obj[key]
//   })

//   return sorteObj
// }

// let object = {
//   c: 3,
//   a: 1,
//   b: 2
// }

// let res = sortObjectByKeys(object)
// console.log(res);


// 12-misol

// const books = {
//   name: 'Shum bola',
//   author: 'G`afur G`ulom',
//   year: 1990
// }

// const keys = Object.keys(books)
// const value = Object.values(books)
// console.log(keys, value);


// 13-misol
// function combine(arr1, arr2) {
//   return arr1.concat(arr2)
// }

// const firstArr = [1, 2, 3, 4, 5]
// const secondArr = [6, 7, 8, 9, 10]
// const res = combine(firstArr, secondArr)
// console.log(res);



// 14-misol
// function aCollectionOfObjects(obj) {
//   let sum = 0;
//   const value = Object.values(obj)
//   for (let i = 0; i < value.length; i++) {
//     sum += value[i]
//   }

//   return sum
// }

// let numbers = {
//   first: 10,
//   second: 20,
//   third: 30,
//   fourth: 40
// }

// let res = aCollectionOfObjects(numbers)
// console.log(res);


// 15-misol
// const cars = {
//   name: 'BMW',
//   year: '2022',
//   color: 'black',
//   model: 'BMW X5'
// }

// const renamedObject = {
//   name: cars.name,
//   year: cars.year,
//   color: cars.color,
//   model: cars.model
// }

// console.log(renamedObject);


// 16-misol
// function removeKey(obj, key) {
//   const newObj = { ...obj }
//   delete newObj[key]
//   return newObj
// }
// const books = {
//   name: 'Shum bola',
//   author: 'G`afur G`ulom',
//   year: 1990,
// }


// const keyToRemove = 'age'
// const updatedObject = removeKey(books, keyToRemove)
// console.log(updatedObject);
