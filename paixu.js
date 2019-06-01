/**
 * 冒泡排序
 * @param {*} arr 
 */
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) { //比较轮次
    //每一轮比较的次数
    for (let j = 0; j < arr.length - i - 1; j++) {
      //判断前后两个数是否符合交换条件
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
}
/**
 * 选择排序
 * @param {*} arr 
 */
function choose(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp
      }
    }
  }
}