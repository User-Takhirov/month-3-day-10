//18dan kottasini topish
// let arr = [
//   { name: "user1", age: 15 },
//   { name: "user2", age: 20 },
//   { name: "user3", age: 19 },
//   { name: "user4", age: 42 },
// ];

// let result = arr.filter((item) => {
//   return item.age > 18;
// });

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//discount va gifti borini topish
// let arr = [
// { name: "user1", age: 15, gift: "2xonali uy", discount: 90 },
// { name: "user2", age: 20, discount: 5},
// { name: "user3", age: 19, gift: "2xonali uy", discount: 70 },
// { name: "user4", age: 42, discount: 29 },
// ];
// let result = arr.filter((item) => {
// return item.discount && item.gift;
// });
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//totalpriceni topish
// let arr = [
//   { name: "user1", age: 15, gift: "2xonali uy", discount: 90, price: 400 },
//   { name: "user2", age: 20, discount: 5, price: 400 },
//   { name: "user3", age: 19, gift: "2xonali uy", discount: 70, price: 400 },
//   { name: "user4", age: 42, discount: 29, price: 400 },
// ];
// let totalPrice = 0;
// for (let i = 0; i < arr.length; i++) {
//   totalPrice += arr[i].price;
// }
// console.log(totalPrice);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// gifti yoqlarga gift qoshish
// let arr = [
//   { name: "user1", age: 15, gift: "2xonali uy", discount: 90, price: 400 },
//   { name: "user2", age: 20, discount: 5, price: 400 },
//   { name: "user3", age: 19, gift: "2xonali uy", discount: 70, price: 400 },
//   { name: "user4", age: 42, discount: 29, price: 400 },
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr[i].gift) {
//     arr[i].gift = "dinay 1.5 anor";
//   }
// }
// console.log(arr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//uy ishi

//1
// let dateOfBirth = prompt("tugilgan yilingizni kiriting");
// let married = prompt("uylanganmisiz");
// let dateOfBirth2 = prompt("tugilgan yilingizni kiriting");
// let married2 = prompt("uylanganmisiz");
// function User(name, year, married) {
//   this.name = name;
//   this.year = year;
//   this.married = married;
//   this.calc = function () {
//     return 2024 - this.year;
//   };
//   this.x = function () {
//     if (married == "ha") {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

// const user1 = new User("Fayruzbek", dateOfBirth, married);
// const user2 = new User("Abdulloh", dateOfBirth2, married2);

// console.log(user1);
// console.log(user1.calc());
// console.log(user1.x());
// console.log(user2);
// console.log(user2.x());
// console.log(user2.calc());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2
// let userCount = prompt("userlarni soni");
// let result = [];
// for (let i = 0; i < userCount; i++) {
//   let obj = {};
//   let name = prompt("ismingiz");
//   let age = prompt("yoshingiz");
//   let id = prompt("id");
//   obj.name = name;
//   obj.age = age;
//   obj.id = id;
//   result.push(obj);
// }
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3
// let arr = [
//   { user: "javohir", age: 21, location: "Tashkent", daily: 200 },
//   { user: "javohir", age2: 21, location2: "Tashkent", daily: 170 },
//   { user: "javohir", age3: 21, location3: "Tashkent", daily:300 },
// ];

// function User(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].daily * 30);
//   }
// }
// User(arr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4
// function Values(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { a: 1, b: 2,  };
// console.log(Values(obj1, obj2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5
// function x() {
//     let arr = [];
//     while (true) {
//         let input = prompt("Qiymat kiriting:");
//         if (isNaN(Number(input))) {
//             return arr;
//         }
//         arr.push(Number(input));
//     }
// }

// console.log(x());
