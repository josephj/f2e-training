# Question - DOM 2 與 DOM 3 的差別

早期瀏覽器廠商各自去開發存取文件的 API<br>
後期進入網頁標準化的時代，W3C 開始制定規範<br>
在規範前、瀏覽器廠商自定的方法與屬性納入 DOM 0<br>
之後陸續有 DOM 1、DOM 2、DOM 3 的標準<br>
實作程度則依瀏覽器而有相異<br>


## 參考文件

* [JavaScript.13.DOM2、DOM3、遍历、范围](http://blog.qinyip.com/2011/04/24/405/)
  * DOM 2 - 模組 Core, Views, Event, Style, Traversal and Range, HTML
  * DOM 3 - 強化 DOM 2 的模組、並增加了 XPath, Load and Save

## 查詢方式 可透過以下方式查詢是否支援：

    document.implementation.hasFeature("Traversal", "2.0");

## DOM 2

像我們上次介紹的 parentNode, nextSibling, previousSibling, firstChild, lastChild
是在 DOM 2 時所制定

## DOM 3

* 新增的方法
  * isSameNode
  * isEqualNode
  * setUserData
  * getUserData
* 新增的屬性
  * contentDocument

## 結語

其實現在的 JavaScript Library 都已經替我們去處理掉 DOM 的差異性了
除非是有寫 Pure JavaScript 的需求，我們才有必要去懂版本間的差異

