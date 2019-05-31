/* 
箭头函数 
不具备this、arguments,自己家没有this就找上一级的this,从而解决了this指向问题
箭头函数的this就是上一级的this

如何更改this指向:
1)call、apply、bind
2)var that = this
3)=>

如何确定this是谁:
看谁调用的,"."前面是谁this就是谁
*/

// function a(b) {
//   return b + 1;
// }
// console.log("-----转换为箭头函数-----");
/* 
去掉function关键字,参数有一个可以省略小括号,小括号和大括号之前有一个箭头,
如果没有大括号则直接是返回值,有大括号直接写return
*/
// let a = b => b + 1;
console.log("-----下面的转换为箭头函数-----");
function a(b) {
  return function(c) {
    return b + c;
  };
}
console.log("普通求和:" + a(1)(2));
let b = b => {
  return c => {
    return b + c;
  };
};
console.log("箭头函数求和:" + b(5)(5));
//高阶函数(两个箭头以上的,包括两个都叫箭头函数.大于等于两箭头的)
let b2 = b => c => b + c;
console.log("最终简化版箭头函数求和:" + b2(5)(5));
/*
闭包:函数执行的一瞬间叫闭包(不销毁的作用域),当执行后返回的结果必须是引用数据类型,
被外界变量接收,此时这个函数不会销毁(模块化)
*/

console.log("-----箭头函数演示-----");
//在vue中,很多时候不能用箭头函数
[1, 2, 3].forEach(item => console.log(item));

/* 
框架:拥有完整的解决方案,我们按照人家的规则写好,人家调用我(被动)
库:我们调用他(主动)
 */
