# JavaScript

# 一、JavaScript组成和数据类型

## 1.JavaScript由三部分组成

> 1.ECMScript 2.BOM 整个浏览器 3.DOM document(文档) 整个文档 从html开始到html结束

【注】每一条JavaScript语句后面都必须加分号，语法规范。

## 2.JavaScript的数据类型

【注】JavaScript的数据类型分为两大类

### 1.基本数据类型

```json
<1> 数字　　　     number　　　　100   3.14
<2> 字符串　　     string　　　　所有带双引号/单引号   'Hello' "Hello"
<3> 布尔值　　     boolean　　　 true　false
<6> 特殊数据类型
                  null         (空,什么都没有的意思)
                  undefined    (未声明的意思,或者声明了没赋值)
                  NaN
```

js中的所有事物都是对象：字符串、数值、数组、函数..此外，JavaScript 允许自定义对象。 【注】对象只是带有属性和方法的特殊数据类型。

### 2.复合数据类型

对象(Object)、数组(Array)、函数(Function)。

### 3.JavaScript原样输出标签的内容

```
/*
< 是"<"
> 是">"
*/
document.write("</script>")
```

# 二、变量和常量

## 1.常量:

确定的值叫做常量(值一旦被确定之后就没办法修改),因为常量看起来是什么他就是什么,所以常量也叫字面量

> 例如:"100"、"3.14"

## 2.变量:

变量: 值可以被改变的叫做变量

### 1.使用变量的步骤

1.声明变量 通过关键字(系统定义的有特殊功能的单词)var、let、const 等 `var age =18;` 声明变量的时候,同事给变量赋值.叫做初始化 2.变量赋值 `age =20;` 3.可以同时定义多个变量 变量之间要使用逗号隔开 `var name ="xxx",age = 18, sex = "男";`

### 2.输出当前变量/常量的数据类型

【格式】 typeof 变量/常量 **`console.log(typeof name)`** 【注】 JavaScript是弱语言(变量被赋值成什么类型他就是什么类型).不要在后续的代码里改变该变量的数据类型,很容易引起代码的歧义. **变量类型在赋值时才能确定**

# 三、标识符

## 1.标识符的定义

标识符:用户自定义的所有名字叫做标识符.变量名

## 2.标识符的规律:

```
1.标志服必须由数字、字母、下划线和美元符号($)组成.
2.不能以数字开头.
3.标识符区分大小写,age和Age是两个不同的变量.
4.标识符必须见名知意
```

# 四、运算符

```
1.算术运算符    (+,-,*,/,%(取余))
2.关系运算符
3.逻辑运算符
4.赋值运算符
5.自增自减运算符
```

# 五、函数的概念

函数的概念"当它被调用时执行的可重复使用的代码块.

## 1.函数的声明

函数的声明:就相当于写说明书 写第41页说明书 执行程序 程序被CPU执行 函数定义完不会执行

```javascript
function print(){
    for(let i =0;i < 10;i++){
      document.write("Hello World!<br/>");
    }
}
```

当函数调用的时候 告诉CPU 请翻到第41页进行执行.

```javascript
print();
```

## 2.函数的功能

函数可以封装任意多条的语句,而且可以在任何地方,任何时候调用执行.

## 3.函数的分类

1.内置函数(系统函数、官方函数)

```javascript
alert()、
parseInt()、
document.write()
```

2.自定义的函数 用户根据实际需要，自己封装一个函数 封装函数的时候 函数名=标识符(必须见名思意) 当前函数的函数名必须体现出函数的功能

## 4.实例

输出n个Hello world! 【注】到底输出几个是不确定的 我们可以把函数中不确定的值当做形参(形式上的参数)进行声明

```javascript
function print(num){//num形参
     for(let i=0;i<num;i++){
          document.write('Hello World!<br/>');
     }
 }
```

函数的调用 函数调用的时候实参给形参进行赋值

```javascript
print(10);//10 实参
```

封装一个函数怒,计算两个数的和

```javascript
function add(num1, num2) {
     let result = num1 + num2
     document.write(result)
 }
add(5, 6); //11
```

# 六、arguments

## 1.arguments的概念

arguments:在每个函数内,都有一个内置的数组.这个数组是一个变量,叫做**arguments**.

## 2.arguments的特点

arguments可以存储当前函数传入的所以后的参数,而且,是通过传参的顺序进行排列的

## 3.实例

```javascript
function sum(name, age) {
   console.log(arguments);
   //输出传入的参数的个数
   alert("arguments的长度="+arguments.length);
   //访问arguments里面的数据,需要通过对应得房间号/下标进行访问
   alert("我是arguments里面的第二条数据:"+arguments[1])
};
sum("小明", 18);//Arguments(2) ["小明", 18, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

计算所有传入参数的和.具体传入多少参数不确定.

```javascript
function sum() {
  console.log(arguments);
  let result = 0
 //下标可以配合我们循环去使用
  for (let i = 0; i < arguments.length; i++) {
  result += arguments[i];
  }
  alert("计算所有传入参数的和=" + result);
};
sum(20, 18, 30)
```

# 七、函数的返回值

如果我们要在外部获取到函数内运行的结果,我们可以通过**return**语句跟后面的要返回的值来实现返回值.

```javascript
function add(num1,num2) {
  console.log(arguments);
  return num1+num2;
  //下面的代码执行不到
  console.log("我不会执行")
};
let result=add(20, 30);
alert("函数的返回值result="+result)
```

【注】函数执行到**return**语句以后，就执行结束，跟在**return**后面其他的语句就执行不到.

# 八、函数的作用域

作用域:就是起作用的返回,或者说是有效范围.每个函数的声明都会形成一个作用域.

## 1.全局作用域

**全局变量**:全局作用域声明的变量. 全局变量可以在全局(局部也是全局里面的)任意位置被访问.

## 2.局部作用域(函数)

**局部变量**:局部作用域声明的变量. 局部变量的生命周期和生效的范围,都是生命该变量的函数区域.当函数调用完成以后,就直接销毁. **_【注】如果全局作用域和局部作用域变量重名，我们采取就近原则，当前访问这个变量离哪个作用域近，就是哪个作用域_** 1.第一种

```javascript
var a=10;
function sum(){
  a=5;
};
alert(a);//10
sum();
alert(a);//5
```

2.第二种

```javascript
var a=10;
function sum(){
 var a=5;
  alert(a);//5
};
alert(a);//10
sum();
//函数执行完会立刻被释放掉,所以下面的a是function sum(){}外面的a
alert(a);//10
```

# 九、函数 练习

**1.判断一个年份是不是闰年**

> 分析: 参数:年份 返回值:是否是闰年

```javascript
function leapYear(year){
  if(year%400==0||year%4==0&&year%100!=0){
    let trueTip=year+"是闰年"
    return trueTip;
  }else{
     let falseTip=year+"不是闰年"
    return falseTip
  }
}
alert(leapYear(2019));
```

**2.判断一个数是否是素数** 质数（prime number）又称素数，有无限个。 质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。

> 分析: 参数:一个数 返回值:是否是素数

```javascript
function prime(num){
  let isYes=false;//是否是素数
  //只能被1和自身整除的数字就是质数
  //也就是说 如果能找到除了1和自身之外的 其他的数字 如果能整除 就说明不是质数
  for(let i=2;i<num;i++){
    if(num % i ==0){
      isYes=true;//
      break;
   }
  }
  return !isYes;
}
console.log(prime(6))
/*求n以内的质数*/
function findPrime(num) {
  //取遍n以内的数字 看看是不是质数 如果是就输出到控制台
  for (var i = 2; i <= num; i++) {
    if (prime(i)) {
      console.log(i);
    }
  }
}
findPrime(10);
```

# 十、函数 递归

## 1.递归概念

递归：函数可以自己调用自己，称为递归调用。 **【注】** 我们可以写出递归，但是我们并不知道他是如何得出结果的。

## 2..函数的递归调用

### 1.方法:

> 1.首先去找临界值,即无需计算,获得的值. 2.找这一次和上一次的关系 3.假设当前函数已经可以使用了,调用自身计算上一次的运行结果,再写出这次的运行结果.

### 2.特点:

> 1.必须有参数 2.必须有return

## 2.实例:1加到n的和

```javascript
function sum(n){
  if(n==1){
    return 1;
  }
  return sum(n-1)+n
}
console.log(sum(100))
```

【注】递归会在短时间内，是内存剧增

## 3.实例:通过递归，打印n个HelloWorld

```javascript
function print(n){
  if(n==0){
   return;
  }
  document.write('Hello World!<br/>');
  return print(n-1)
}
```

## 4.斐波拉契数列

**拓展训练--兔子繁殖问题.**

> 设有一对新生兔子,从第四个月开始他们每个月月初都生一对兔子.序偶美素佳儿购买的兔子从第四个月月初开始又每个月生一对兔子.按此规律,并假定兔子没有死亡,n(n<=20)个月月末总共有多少对兔子?

```json
一月兔    二月兔     三月兔     四月兔      对
1月     1         0         0         0         1
2月     0         1         0         0         1
3月     0         0         1         0         1
4月     1         0         0         1         2
5月     1         1         0         1         3
6月     1         1         1         1         4
7月     2         1         1         2         6
8月     3         2         1         3         9
9月     4         3         2         4         13
10月    5         4         3         6         19
```

```javascript
function rabbit(month){
 if(month<=20&&month>0){
    if(month<4){
    return 1;
  }
  return rabbit(month-3)+rabbit(month-1);
 }else{
   alert("数值太大,无法计算!")
 }
}
console.log(rabbit(5))
```

# 十一、事件驱动函数

## 1.相关概念

**<1> 什么是事件驱动函数?** 在和页面交互的过程中所调用的函数,该函数被称之为事件驱动函数 **<2> 什么是事件?** 和页面交互的行为称之为之间.比如:鼠标点击某个按钮时(onclick)、鼠标浮动或者离开。 到某个区域时(onmouseover、onmoseout)、文本框获取焦点和失去焦点时(onfocus、onblur)

## 2.实例

我们可以通过document.getElementById找到符合条件的标签节点. 然后我们可以通过事件驱动函数,给当前的按钮绑定一些列的操作.完成用户交互

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    let onBtn = document.getElementById("btn")
    alert(onBtn)
  </script>
</head>
<body>
  <input type="button" value="按钮" id="btn">
</body>
</html>
```

上面的代码执行会弹出null,因为程序是从上往下执行的,当加载到 **_let onBtn=_** 时下面的input的内容还没有加载出来.解决这种办法有两种解决办法

### 第一种

把JavaScript代码放在`<input type="button" value="按钮" id="btn">`下面执行. **【注】这种写法一般不用，一般情况下，我们把script标签写在head标签中.**

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <input type="button" value="按钮" id="btn">
</body>
  <script>
      let onBtn = document.getElementById("btn")
      alert(onBtn)
  </script>
</html>
```

### 第二种

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    window.onload=function(){//写在这里的代码,在页面加载完成以后执行
      let onBtn = document.getElementById("btn")
      alert(onBtn);
    }
  </script>
</head>
<body>
  <input type="button" value="按钮" id="btn">
</body>
</html>
```

**_`window.onload`:在页面加载完成以后执行_**

## 3.给按钮添加事件驱动函数

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    window.onload=function(){//写在这里的代码,在页面加载完成以后执行
      let onBtn = document.getElementById("btn")
      //给按钮添加事件驱动函数.这个函数是在按钮被点击以后触发的.
      onBtn.onclick=function(){
        alert("单击")
      }
    }
  </script>
</head>
<body>
  <input type="button" value="按钮" id="btn">
</body>
</html>
```

## 4.点击清空默认文本

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script>
    window.onload = function () { //写在这里的代码,在页面加载完成以后执行
      let onBtn = document.getElementById("cleatText");
      let changeBtn = document.getElementById("changeText");
      let onText = document.getElementById("text");
      // 给按钮添加事件驱动函数
      onBtn.onclick = function () {
        //要将文本中的内容清空
        onText.value = ""
        // onText.value得到的值是字符串
      }
      changeBtn.onclick = function () {
        //输出文本中的内容
        alert("我是修改前的内容--" + onText.value)
        //修改文本中默认的内容
        onText.value = "我是修改后的内容"
      }
    }
  </script>
</head>
<body>
  <input type="button" value="按钮" id="btn">
  <input type="text" value="默认的文字" id="text">
  <input type="button" value="清空默认的文字" id="cleatText">
  <input type="button" value="修改默认的文字" id="changeText">
</body>
</html>
```

**<5> 函数的递归调用** 示例(阶乘): 5的阶乘为120 **分析:5的阶乘**

```json
5的阶乘=5 * 4 * 3 * 2 * 1
4的阶乘=    4 * 3 * 2 * 1
3的阶乘=        3 * 2 * 1
2的阶乘=            2 * 1
1的阶乘=                1
0的阶乘=                1
```

**n的阶乘=n * (n-1)的阶乘**

```javascript
function factorialize(num) {
  if (num > 0) {
    return (num * factorialize(num - 1));
  } else
    return (1);
}
console.log(factorialize(5))
```

# 十二、数组

## 1.数组属性和方法

### 1.数组的概念和作用

数组的概念:字面意思就是一组数据,一组(一般情况下相同类型的)数据(不一定都是数字) 注:数组是一种数据类型 注:数组的作用是:使用这个单独的变量来存储一系列的值.

### 2.数组的创建

#### 1.使用new运算符创建数组

```javascript
var arr =new Array(1,true,"Hello");
console.log(arr);// [1, true, "Hello"]
```

参数:使我们要在数组中储存的数据.

```javascript
var arr =new Array(10);
console.log(arr);//[empty × 10]
```

参数:如果当前的参数,只有一个,并且这个参数是数字的话.数组长度为这个参数的数组。

#### 2.省略new运算符创建数组

```javascript
var arr = Array(1,true,"Hello");
console.log(arr)
```

#### 3.通过常量来创建数组

```javascript
var arr =[1,false,"World"];
console.log(arr);
console.log(arr[0])
```

注意事项 1.在数组中存储的数据,一般情况下叫做元素 2.数组元素的访问通过下标完成.下标,也交所索引,从0开始.

### 3.数组的长度

`arr.length`访问数组元素的个数. 注:length属性,不是只读的,可以设置的.

```javascript
let arr = ["red","blue","green"];
console.log(arr.length);
arr.length=2;
console.log(arr);
```

### 4.数组的遍历

数组元素的访问和赋值,都是通过数组的下标完成 注:下标就是索引,击元素的序号(从0开始),下标最大取值是:数组的长度(length)-1

```javascript
let arr =[10,20,30,40,50,60]
console.log(arr.length)
console.log(arr[1+2])
```

数组遍历:数组和循环结合使用.决赛中数组和循环是绝配

#### 1.数组的赋值

##### 1.普通循环赋值

1.以下为通过循环给数组的每个元素赋值,付成下标的平方

```javascript
let arr=[]
for(let i=0;i<10;i++){
  arr[i]=i*i
}
console.log(arr)
```

2.以下为通过循环给数组的每个元素赋值,随机数 **_`Math.random()`可以随机0~1之间任意的数_**

```javascript
let arr=[]
for(let i=0;i<10;i++){
  arr[i]=Math.random();
}
console.log(arr)
```

##### 2.for...in

for...in语句用于遍历数组或者对象的属性(枚举) for...in叫做快速遍历,效率比普通for循环高. for...in将数组中每一个元素从头到尾进行遍历

```javascript
let arr =["red","blue","green"]
for(let i=0;i<arr.length;i++){
  document.write(arr[i]+"<br/>");
}
/*
for...in进行遍历.
*/
for(let item in arr){
  console.log("下标(iten)---"+item)
  console.log("数组下标对应的值(arr[item])---"+arr[item])
}
```

### 5.数组的方法

#### 1.堆方法

栈:是古代的木盆(相当于现在的洗衣机) 栈结构:只有一个口,从一个口进,从同一个口出. 栈的特点:先进后出.

##### 1.push()方法

push()方法可以接受任意数量的参数,把他们逐个添加到数组的末尾,并返回修改后数组的长度.

> 【格式】**`数组.push(元素...)`** 参数:我们要添加的元素,参数的个数随意. 功能:给数组末尾添加元素. 返回值:添加完元素以后数组的长度

```javascript
let arr=["资治通鉴","大国的兴衰","资本论"];
console.log("我是push前的arr---"+arr);
arr.push("史记","孙子兵法");
console.log("我是push后的arr---"+arr);
let res =arr.push("道德经");
console.log("我是push后的arr的长度---"+res);
```

##### 2.pop()方法

pop()方法则从数组末尾移除最后一个元素,减少数组的length值,然后返回移除的元素.

> 【格式】**`数组.pop()`** 参数:不能传参数. 功能:移除数组末尾的最后一个元素 返回值:移除的元素

```javascript
let arr=["资治通鉴","大国的兴衰","资本论"];
let res =arr.pop();
console.log("我是arr的最后一个元素---"+res);
console.log("我是pop后的arr---"+arr);
```

#### 2.队列方法

**队列** 队列结构:从一头进,从另外一头出. 特点:先进先出.

##### 1.push()方法

同堆方法中的push方法

##### 2.shift()方法

> 【格式】**`数组.shift()`** 参数:没有参数. 功能:从数组的头部取下一个元素 返回值:取下的元素

> ```javascript
> let arr=["资治通鉴","大国的兴衰","资本论"];
> let res =arr.shift();
> console.log("我是arr的头部取下一个元素---"+res);
> console.log("我是shift后的arr---"+arr);
> ```

##### 3.unshift()方法

> 【格式】**`数组.unshift(参数...)`** 参数:任意个数.我们插入数组的元素,参数的个数随意 功能:从数组的头部插入元素 返回值:插入元素以后数组的长度

> ```javascript
> let arr=["资治通鉴","大国的兴衰","资本论"];
> let res =arr.unshift("论语","韩非子");
> console.log("我是插入元素以后arr的长度---"+res);
> console.log("我是unshift后的arr---"+arr);
> ```

### 6.数组的方法详解

#### 1.concat()

> 【格式】**`数组1.concat(数组2);`** 功能:将两个数组,合并成一个新数组,源数组(原来的数组)并不会被改变. 返回值:我们合并好的新数组. 参数:我们要合并的数组.

> ```javascript
> let arr1 =["钢铁侠","绿巨人"];
> let arr2=["美国队长","鹰眼"];
> let arr=arr1.concat(arr2)
> console.log("合并后的数组="+arr)
> console.log("arr1="+arr1)
> console.log("arr2="+arr2)
> ```

#### 2.slice()

> 【格式】**`数组.slice(start,end);`** 功能:基于当前数组获取指定区域元素并创建一个新数组.源数组不改变 参数:start:开始获取区域的下标,end结束获取取余的下标,不包括end下标位置的元素 返回值:指定区域元素生成的新数组.

```javascript
let arr =["钢铁侠","绿巨人","美国队长","鹰眼"];
let newArr =arr.slice(1,3)
console.log("生成arr下标为1和3之间的新数组="+newArr)
```

#### 3.splice()

> 【格式】**`数组.splice(start,length,元素...);`** 功能:可以完成删除、插入、替换操作 参数: 参数1：截取的开始下标 参数2：截取的长度 参数3: 在截取的开始下标位置，我们要插入的元素，插入的元素的个数随意 返回值:接去掉的元素,组成的数组 注:splice会对源数组进行修改

```javascript
//删除功能  删除Blue
let arr =["red","blue","green"];
let res =arr.splice(1,1)
console.log("我是在arr中被删除的元素="+res)
console.log("我是arr="+arr)
//插入功能  插入yellow
let arr =["red","blue","green","xxx"];
arr.splice(1,0,"yellow")
console.log("我是arr被插入后的数组="+arr)
//替换功能  先删除,然后再插入
let arr =["red","blue","green","xxx"];
let res =arr.splice(1,1,"yellow")
console.log("我是arr被替换的元素="+res)
console.log("我是arr被替换后的新数组="+arr)
```

#### 4.join()

> 【格式】**`数组.join(拼接符);`** 功能:使用拼接符讲数组中的元素拼接成字符串 参数:拼接符(任意字符串) 返回值:拼接好的字符串

```javascript
let arr =[10,12,30,40,50];
let str =arr.join("+")
console.log("我是arr拼接好的字符串"+str)
```

### 7.二维数组

**所谓二维数组,在数组中元素还为数组.** 通过循环安航顺序为一个5x5的二维数组a赋1到25的自然数,然后输出该数组的左下半三角.

```json
1,  2,  3,  4,  5
6,  7,  8,  9,  10
11, 12, 13, 14, 15
16, 17, 18, 19, 20
let arr =[[],[],[],[],[]]
```

```javascript
/*
生成1-25的二维数组
*/
let count =0;//从1到25累加中间变量
let arr =[];
for(let i=0;i<5;i++){//生成5个数组,存储在arr中
  let newArr=[];
  //每一个newArr都有5个数
  for(let j=0;j<5;j++){
    newArr.push(++count);
  }
  arr.push(newArr);
}
console.log(arr)
/*
输出该数组的左下半三角.
*/
for(let i=0;i<arr.length;i++){
  //每一行中打印的元素,和当前的行数相等.
  for(let j =0;j<=i;j++){
    document.write(arr[i][j]+' ')
  }
  document.write("<br/>")
}
```

## 2.数组的排序

### 1.系统排序

系统提供的排序方法

#### 1.reverse()

**格式:数组.reverse(); 功能: 降序排序(从大到小)**

```javascript
let arr=[10,20,30,40];
arr.reverse();
console.log(arr);// [40, 30, 20, 10]
```

#### 2.sort()

**格式:数组.sort(); 功能:升序排序(从小到大) 注:sort默认是按照字符串进行排序.默认情况下,对字符串排序,是按照ASCII的大小(逐位)比较的. 要求:一般情况下,我们需要自己去编写排序算法,系统提供给我们的排序函数用的比较少.**

```javascript
let arr= [4,5,3,1,2];
arr.sort();
console.log(arr);// [1, 2, 3, 4, 5]
/*默认字符串排序*/
let arr= [10,1,5,15];
arr.sort();
console.log(arr);// [1, 10, 15, 5]
```

### 2.冒泡排序(重要)

原理:前后两个数两两进行比较,如果符合交换条件,就交换位置.直到所有数据排序完成,结束比较. 规律:每一轮取出了一个最大的数,放在了正确的位置. 注:下属的排序算法叫做冒泡排序.

```javascript
/*
第一轮:
      9,8,7,6,5,4
      8,9,7,6,5,4
      8,7,9,6,5,4
      8,7,6,9,5,4
      8,7,6,5,9,4
      8,7,6,5,4,9
第二轮:
      8,7,6,5,4
      7,8,6,5,4
      7,6,8,5,4
      7,6,5,8,4
      7,6,5,4,8
第三轮:
      7,6,5,4
      6,7,5,4
      6,5,7,4
      6,5,4,7
第四轮:
      6,5,4
      5,6,4
      5,4,6
第五轮:
      5,4
      4,5
*/
let arr =[9,8,7,6,5,4]
for(let i=0;i<arr.length;i++){//比较轮次
  //每一轮比较的次数
  for(let j=0;j<arr.length-i-1;j++){
    //判断前后两个数是否符合交换条件
    if(arr[j]>arr[j+1]){
      let tmp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=tmp;
    }
  }
}
console.log(arr)// [4, 5, 6, 7, 8, 9]
```

### 2.选择排序(重要)

原理:通过比较首先选出最小的数放在第一个位置,然后在其余的数中选择次小数放在第二个位置,以此类推,直到所有的数成为有序序列.

```javascript
/*
9,8,7,6,5,4
*/
let arr=[9,8,7,6,5,4]
for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
      let tmp=arr[i];
      arr[i]=arr[j];
      arr[j]=tmp
    }
  }
}
console.log(arr); //[4, 5, 6, 7, 8, 9]
```

### 3.数组的引用

声明在当前函数中变量和当前函数的形参,作用域都被限制在该函数内.当函数调用结束以后,这些半两和形参,会被释放.

```javascript
let a=10;
function show(a){
  console.log("传进来的a="+a)
  a=5;
  alert("调用show方法的a="+a)
}
alert(a)//10
show(a);//5
alert(a);//10
```

数组:复合数据类型/引用数据类型. 注:所有的复合数据类型都不直接储存在我们的函数中.存储在堆空间. 注:在堆空间,我们想要使用多少内存,就可以随时分配多少内存. 注:所有的复合数据类型,出巡的都是门牌号,也就是地址.所以这类型的数据,我们叫做引用数据类型. 运行程序的原则:函数运行的内存空间是预先分配好的,一旦被分配好内存空间就不能再去进行改变了.

```javascript
let arr=[10,20];
function show(arr){
  arr.push(30,40);
  console.log("show中的arr"+arr)
}
alert(arr);//10,20
show(arr);//10,20,30,40
alert(arr);//10,20,30,40
```

# 十三、字符串

## 1.字符串的概念、创建、属性

### 1.字符串的概念

在js中将所有单引号或者双引号括起来的都叫做字符串.

### 2.字符串创建的方式:

```javascript
/*
1.通过new运算符创建
注意此刻str为object(对象)类型
用new产生的变量都是引用数据类型的变量,也叫对象.
*/
let str1 =new String(true);
console.log("str1"+typeof str1);
//2.new可以省略
let str2=String(true)
console.log("str2"+typeof str2);
//3.通过常量创建字符串
let str3="Hello"
console.log(str3)
```

### 3.字符串的属性

length:返回的是当前字符串中字符的个数

```javascript
let str ="我是一个字符串" 
console.log(str.length)
```

### 4.访问字符串的字符

charAt()

> 格式:字符串.charAt(下标)<br>
> 返回值:对应小标的字符<br>
> 注:我们可以直接通过字符串下标去访问该字符

```javascript
let str ="我是一个字符串" 
console.log(str.charAt(1))
console.log(str[1])
```

**注:ECMAScript中的字符串是不可变的,也就是说,字符串一旦创建,他们的值就不能改变.要改变某个变量保存的字符串首先要销毁原来的字符串,然后再用另一个包含新值的字符串填充该变量**

```javascript
let str ="hxllo";
str[1]="x";
console.log(str);//hxllo
str="hello";
console.log(str);//hello
str =str +" world!"
console.log(str);//hello world!
```

## 2.字符串的方法

查找方法和分割方法

# 十四、ECMA5严格模式

## 1.严格模式

概念:从字面意思,即这种严格模式下,浏览器会对JavaScript的要求更加苛刻.

格式:"`use strict`"

注:不要轻易在全局范围开头增加"`use strict`",建议在作用域内使用

1._非严格模式_

```javascript
function m1(){
  max=10;
  //如果在给变量赋值的时候,没有使用var声明该变量,就会当做全局变量进行处理
}
m1();
alert(max);
```

2._严格模式_

```javascript
function m1(){
  'use strict'
  max=10;
  //如果在给变量赋值的时候,没有使用var声明该变量,就会当做全局变量进行处理
}
m1();
alert(max);
```

# 十五、对象

函数的写法

```javascript
function show(){

}
```

上述写法可以写成下面这样.

```javascript
let show =function(){

}
```

等到右边的这部分,一般情况下,我们可以焦作市匿名函数

## 1.对象的属性

1.给对象添加属性

```javascript
let person={};
//给对象添加数据/属性
person["name"]="xxx"
//给对象添加函数/方法
person["showName"]=function(){
  console.log(person["name"]);
}
person.showName();
```

```javascript
let person={};
person.age=19
person.showAge =function(){
  console.log(person.age);
}
person.showAge();
```

2.删除对象的属性

delete 删除对象属性

```javascript
let person={}; 
person.sex="男"
console.log(person.sex)//男
delete person.sex
console.log(person.sex)//undefined
```

## 2.日期对象 Date

在js中日期也是一个数据类型/复合数据类型.是对象

对象的属性

对象的方法

### 1.日期对象的创建方式

参数:如果我们在创建对象的时候不传参,它默认获取的是系统当前的时间.

注:我们所用的时间都是根据格林尼治时间(子午线),中国北京处于东八区.格林尼治时间加八小时为北京当前的时间

```javascript
let date =new Date();
console.log(date);//Tue May 28 2019 14:38:44 GMT+0800 (中国标准时间)
```

生成日期对象的参数的参数类型可以是:

1. Date("2019-05-28")
2. Date("2019/05/28")
3. Date(2019,05,28,14,46,55)

```javascript
let date1 = new Date("2014-05-28");
let date2 = new Date("2015/05/28");
let date3 = new Date(2006, 0, 12, 22, 19, 35);
let date4 = new Date(1000);
console.log("date1=" + date1);
console.log("date2=" + date2);
console.log("date3=" + date3);
console.log("date4=" + date4);
```

> 1秒=1000毫秒 参数可以是毫秒数,计算从1970年开始+毫秒数,计算出这个时间.<br>
> 为什么要以170年1月1日0时0分0秒为参照物.1970年是Unix(第一个操作系统)的诞生日

# 十六、BOM(浏览器对象模型)

## 1.BOM的概念

BOM(Browser Object Model)

BOM就是浏览器对象模型

## 2.Window对象

通过window对象来控制BOM

在客户端JavaScript中,window对象是全局对象,所有的表达式都在当前的环境中计算.

### 1.Window的属性:

![](https://i.loli.net/2019/05/29/5cee080b1950585203.png)

### 2.系统对话框

浏览器可以通过调用系统对话框,可向用户显示信息.

系统提供了三个函数,以完成系统对话框的操作.

#### 1.alert()

```javascript
/*
直接弹出警告框
参数,警告框上显示的内容
*/

alert("警告框")
//alert是window下的函数,window下的函数都可以省略window直接调用.怎么去验证呢
window.alert("alert是window下面的函数")
```

#### 2.confirm()

```javascript
/*
功能:弹出一个带有确定和取消按钮的警告框.
返回值:如果点击确定,返回true;如果点击取消,返回false.
参数,警告框上显示的内容
*/

let res = confirm("请选择确定或取消")
console.log(res)
```

#### 3.prompt()

```javascript
/*
功能:弹出一个带有输入框的提示.
【参数】
第一个参数:要在提示框上显示的内容
第二个参数:输入框内默认的值(可省略)
返回值:如果点击确定,返回的是输入的内容;如果点击取消,返回null.
*/

let res1=prompt("请输入一个数");
console.log("res1"=res1)
let res2=prompt("请输入一个数",1);
console.log(res2)
```

### 3.打开新窗口

**HTML DOM opener 属性**

父窗口

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title>父窗口</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      background: yellow
    }
  </style>
  <script>
    window.onload = function () {
      let oBtn = document.getElementById("btn");
      oBtn.onclick = function () {
        open("sub.html", "子窗口", "width=400,height=400,top=200,left=200");
      }
    }
  </script>
</head>
<body>
  <input type="button" id="btn" value="打开子窗口">
</body>
</html>
```

子窗口

```html
<!DOCTYPE html>
<html lang="cn">
<head>
  <title>子窗口</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      background: blue
    }
  </style>
  <script>
    /*
  父窗口打开子窗口后子窗口会捕获到一个对象opener
  opener:打开当前窗口的父窗口的window对象
  */
    window.onload = function () {
      let oBtn = document.getElementById("btn");
      oBtn.onclick = function () {
        console.log(opener);
        opener.document.write("子窗口让我输出的");
      }
    }
  </script>
</head>
<body>
  <input type="button" id="btn" value="按钮">
</body>
</html>
```

## 3.Location对象

location是BOM的对象之一,他提供了与当前窗口中加载的文档有关的信息,还提供了一些导航功能.事实上,location对象是window对象的属性,也是document对象的属性,多以`window.location`和`document.location`等效.

获取当前窗口URL的三种写法

```javascript
console.log(window.location);//获取当前的URL
console.log(location);//window可以省略
console.log(window.document.location);
console.log(window.location==window.document.location);//true
```

### 1.location对象的属性

![](https://i.loli.net/2019/05/29/5cee080b32c5260053.png)

```javascript
/*
hash:
url中#后面的内容(包括#).实现页内跳转
*/
console.log("hash="+location.hash);
/*
host:
主机加端口号
*/
console.log("host="+location.host);
/*
hostname:
域名就是给ip起了一个好记的名字
*/
console.log("hostname="+location.hostname);
/*
href:
整个URL
*/
console.log("href="+location.href);
/*
pathname:
域名或者ip/后面的内容
*/
console.log("pathname="+location.pathname);
/*
默认8080
*/
console.log("port="+location.port);
/*
protocol:
      http:网络协议;
      file:本地文件
*/
console.log("protocol="+location.protocol);
/*
search:
    跟在?后面的东西
*/
console.log("search="+location.search);
```

**URL 统一资源定位符**

protocol(协议):host(主机名):port(端口号)/pathname(路径)?查询字符串(search)#锚点(hash)

_<https://www.google.com:8080/code/xxx.html?username=xxx&age=18#1>_

# 2.location对象的方法

![](https://i.loli.net/2019/05/29/5cee13132abfc13608.png)

# 4.history对象

![](https://i.loli.net/2019/05/29/5cee1552ecd6d19775.png)

# 十七、DOM()

# 十八、事件()

# 十九、正则表达式

## 1.正则表达式的创建方式

### 1.字面量的方式

```javascript
let reg =/abc/
```

### 2.构造函数

```javascript
let reg =new RegExp("abc");
```

## 2.正则表达式的方法

### 1.test方法 用来检测正则字符串中是否含有符合规则的字串.有返回true;无返回false

```javascript
let str ="abc";
let reg =/abc/;
let flag =reg.test(str);
console.log(flag);
```

### 2.match方法,字符串方法

```javascript
let reg =/abc/;
let str ="abcabcabc"; 
console.log(str.match(reg))
```

### 3.search方法用于查找符合规则的字串的位置(索引值),只返回第一个匹配的位置 字符串的方法

```javascript
let reg =/abc/;
let str ="12345abc";
console.log(str.search(reg));//5
```

### 4.split方法 字符串的方法

```javascript
let reg =/good/;
let str ="good good study!";
console.log(str.split(reg));//["", " ", " study!"]
```

### 5.replace方法 字符串的方法

```javascript
let reg =/tmd/ig;
let str ="abc tmd abc TMD";
console.log(str.replace(reg,"*"));//abc * abc *
```

### 6.exec方法,正则表达式的方法 将匹配成功的内容放到数组里,如果没有匹配成功则返回null

```javascript
let reg =/good/;
let str ="good good study";
console.log(reg.exec(str));//["good", index: 0, input: "good good study", groups: undefined]
console.log(reg.exec(str));
```

## 3.正则表达式的修饰符

### 1.g表示全局匹配

```javascript
let reg =/abc/g;
let str ="abcabcabc"; 
console.log(str.match(reg))
```

### 2.i忽略大小写

```javascript
let reg =/abc/gi; 
let str ="AbcAbcAbc"; 
console.log(str.match(reg))
```

## 4.正则表达式的一些特殊字符

### 1.元字符

元字符（Metacharacter）是拥有特殊含义的字符：

元字符    | 描述
------ | -----------------------------
.      | 查找单个字符，除了换行和行结束符。表示任何数
\w     | 查找单词字符。
\W     | 查找非单词字符。
\d     | 查找数字。
\D     | 查找非数字字符。
\s     | 查找空白字符。
\S     | 查找非空白字符。
\b     | 匹配单词边界。
\B     | 匹配非单词边界。
\0     | 查找 NUL 字符。
\n     | 查找换行符。
\f     | 查找换页符。
\r     | 查找回车符。
\t     | 查找制表符。
\v     | 查找垂直制表符。
\xxx   | 查找以八进制数 xxx 规定的字符。
\xdd   | 查找以十六进制数 dd 规定的字符。
\uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。

### 2.量词

量词     | 描述
------ | -----------------------
n+     | 匹配任何包含至少一个 n 的字符串。
n*     | 匹配任何包含零个或多个 n 的字符串。
n?     | 匹配任何包含零个或一个 n 的字符串。
n{X}   | 匹配包含 X 个 n 的序列的字符串。
n{X,Y} | 匹配包含 X 至 Y 个 n 的序列的字符串。
n{X,}  | 匹配包含至少 X 个 n 的序列的字符串。
n$     | 匹配任何结尾为 n 的字符串。
^n     | 匹配任何开头为 n 的字符串。
?=n    | 匹配任何其后紧接指定字符串 n 的字符串。
?!n    | 匹配任何其后没有紧接指定字符串 n 的字符串。
