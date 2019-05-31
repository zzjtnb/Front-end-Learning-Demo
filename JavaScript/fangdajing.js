//通过ID获取DOM节点对象
function $ (id) {
  return document.getElementById(id);
}

window.onload = function () {
  /**
   * tab切换
   */
  let
    oBox = $('box'),
    oMiddleBox = $("middle-box"),
    oLargeBox = $("large-box"),
    oShadow = $("shadow"),
    oLargrImg = $('large-img'),
    oMiddleImg = $('middle-img'),
    oSmallBox = $("small-box"),
    aSmallImg = oSmallBox.getElementsByTagName("img");
  //缩略图选项卡的效果
  for (let i = 0; i < aSmallImg.length; i++) {
    // aSmallImg[i].onmouseenter = function () {
    aSmallImg[i].onclick = function () {
      // 修改小图片的className
      for (let j = 0; j < aSmallImg.length; j++) {
        aSmallImg[j].className = ""
      }
      this.className = "current"
      //修改中型图片和大型图片的src地址
      oMiddleImg.src = aSmallImg[i].src
      oLargrImg.src = aSmallImg[i].src
      /**
       * 如果图片格式为
       * 小图片:small-1.jpg,small-2.jpg...
       * 中图片:middle-1.jpg,middle-2.jpg...
       * 大图片:large-1.jpg,large-2.jpg...
       */
      // oMiddleImg.src = "../images/middle" + this.src.sclice(this.src.indexOf('-'));
      // oLargrImg.src = "../images/large" + this.src.sclice(this.src.indexOf('-'));
    }
  }
  //鼠标进入middle-box,显示遮罩层和右侧大图区域
  oMiddleBox.onmouseenter = function () {
    oLargeBox.style.display = "block";
    oShadow.style.display = "block";
  }
  // 鼠标离开middle - box, 隐藏遮罩层和右侧大图区域
  oMiddleBox.onmouseleave = function () {
    oLargeBox.style.display = "none";
    oShadow.style.display = "none";
  }
  //给middle-box添加鼠标移动事件
  oMiddleBox.onmousemove = function (e) {
    let ev = e || window.event;
    console.log(oShadow.offsetWidth)
    let iL = ev.clientX - oShadow.offsetWidth / 2
    let iT = ev.clientY - oShadow.offsetHeight / 2 - oBox.offsetTop;
    console.log(e)
    //限定左侧方向
    if (iL < 0) {
      iL = 0;
    }
    //限定上边方向
    if (iT < 0) {
      iT = 0;
    }
    //left可移动的最大范围
    let iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
    //top可移动的最大范围
    let iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;
    if (iL > iMaxL) {
      iL = iMaxL
    }
    if (iT > iMaxT) {
      iT = iMaxT
    }
    oShadow.style.left = iL + 'px';
    oShadow.style.top = iT + 'px';
    //比例:iShadowL / iShadowMaxL=iLargeImgL /iLargeImgMaxL
    //计算大图片所移动的left值
    let iLargeImgL = iL * (oLargrImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
    let iLargeImgT = iT * (oLargrImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;
    oLargrImg.style.left = -iLargeImgL + "px";
    oLargrImg.style.top = -iLargeImgT + "px";

  }
}