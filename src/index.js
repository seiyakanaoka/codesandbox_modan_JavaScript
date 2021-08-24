// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";
// console.log(val3);

// const val3 = "const変数を再宣言";
// console.log(val3);

// const val4 = {
//   name: "ジャケぇ",
//   age: 28
// };
// console.log(val4);

// val4.name = "jak";
// val4.addres = "Hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列

// const name = "じゃけぇ";
// const age = 28;
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 分割代入について

// const myprofile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message1);

// const { name, age } = myprofile;
// const message2 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message2);

// const myprofile = ['じゃけぇ', 28];

// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値について

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけぇ");

// スプレッド構文

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0] , arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// map&filter

// const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけぇ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// 三項演算子

// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50, 20));

// 論理演算子

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2) {
//   console.log("1か2はTrueになります");
// }
// if(flag1 && flag2) {
//   console.log("1も2もTrueになります");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 && "何か設定されした";
// console.log(fee2);
