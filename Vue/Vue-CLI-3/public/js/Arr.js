/* 
使用一种操作数组的方法需要考量:是否操作原数组、是否返回结果、回调函数的返回结果
数组的变异(括号内的可以改变原数组)--操作数组的方法:
（pop、push、unshift、shift、splice、reverse、sort）、indexOf、lastIndexOf、concat、slice
//常用的方法
forEach、filter、map、some、every、reduce、find(es6)、includes(es6)
*/
var array = [10, 20, 30, 40, 55];
array.b = "100";
// 普通for循环
for (let index = 0; index < array.length; index++) {
  //编程式
  var element = array[index];
  console.log("普通for循环得到下标" + index);
}
console.log("普通for循环得到值" + element);
console.log("普通for循环得到指定下标为2的值" + array[2]);
console.log("--------forEach----------");
console.log("-----forEach-----");
//forEach   不支持return
array.forEach(function(item, index) {
  //声明式(不关心如何实现)
  console.log("forEach得到下标" + index + "--" + "forEach下标对应的值" + item);
  var sum = item + item;
  console.log((sum += item));
});
console.log("-----for in-----");
//for in 可以遍历除数组以外的值,包括数组的私有属性,一般遍历对象
for (const key in array) {
  console.log(typeof key);
  const element = array[key];
  console.log("for in获取下标" + key + "--" + "for in下标对应的值" + element);
}
console.log("-----for of-----");
//for of既能return又不会遍历数组的私有属性-forEach和for in的集合体for of
for (let vale of array) {
  //支持return并且值of数组()不能遍历对象,只能遍历数组
  console.log("for of获取数组的值" + vale);
}
// for of遍历对象
let sutdent = { name: "韩梅梅", age: "18" };
for (const vale of Object.keys(sutdent)) {
  console.log();
  console.log("对象" + vale + "--" + "对象对应的值" + sutdent[vale]);
}

/* 
面试:for、forEach、for in、for of的区别
遍历数组不采取for in,因为for in中的key的数据类型为String
*/
console.log("-----filter-----");
// filter 不操作数组;返回结果为过滤后的新数组;
// 回调函数返回的结果:如果为true,表示这一项放到新数组中,返回false则过滤掉
let newAry = array.filter(function(item) {
  return item < 40 && item > 0;
});
console.log(newAry);
console.log("-----map-----");
// map 映射 将原有的数组映射成一个新数组[1,2,3]
// let arr1 = [1, 2, 3].map(function(item) {
let arr1 = array.map(function(item) {
  return `<li>${item}</li>`; //``是es6中的模板字符串,遇到变量用${}取值
});
console.log(arr1);
console.log("join之后的结果:" + arr1.join(""));
//更新删除某项用filter,修改更新用map
console.log("-----includes-----");
// includes 判断一个数组中是否包含某个字符
console.log("判断时候包含值10,此时返回为true---" + array.includes(10)); //返回的是布尔类型
console.log("判断时候包含值100,此时返回为false---" + array.includes(100)); //返回的是boolean
console.log("-----find-----");
//返回找到的那一项,不会改变原数组,回调函数中返回true表示找到了,找到后停止循环,找不到返回undefined
let result = array.find(function(item, index) {
  //找到具体的某一项用find
  return item.toString().indexOf(6) > -1;
});
console.log(result);
let result1 = array.find(function(item, index) {
  return item.toString().indexOf(); //indexOf()不写的哈默认从下标0开始
});
console.log(result1);
//some 找true,找到true后停止，返回true
//every 找false,找到false后停止，返回false
console.log("-----reduce-----");
/* 
reduce(收敛函数)--4个参数:prev, next, index, item
返回结果:返回叠加后的结果,回调函数返回的结果:,原数组变化:原数组不变 
第一次循环---prev:代表数组第一项,next代表数组第二项
第二次循环---prev:undefined,next是数组第二项

 */
let reducesum = [1, 2, 3, 4].reduce(function(prev, next, index, item) {
  console.log(arguments);
  /*  
   console.log(arguments);
   return 100; //本次的返回值会作为下一次的prev
  */
  return prev + next;
});
console.log("求和的结果为:" + reducesum);
let reducesum2 = [
  { price: 30, count: 2 },
  { price: 30, count: 3 },
  { price: 30, count: 4 }
].reduce(function(prev, next) {
  //0+60
  //60+90
  //150+120
  return prev + next.price * next.count;
}, 0); //默认指定第一次的prev
console.log("求和的结果为:" + reducesum2);
//[[1,2,3],[4,5,6],[7,8,9]]
let flat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce(function(prev, next) {
  return prev.concat(next);
});
console.log("二维数组转换为一位数组:" + flat);
