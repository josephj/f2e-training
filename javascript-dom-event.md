# Lesson 4 - 合而為一

用 JavaScript 操縱 HTML 與 CSS


## DOM API

````html
    <div id="article">
        <h1>新店市好吃的餐廳</h1>
        <ul class="restaurant">
            <li>可愛村便當：台北縣新店市大豐街8號</li>
            <li>阿輝現炒黃牛肉：台北縣新店市中興路三段225號</li>
            <li>黑人牛肉麵：台北縣新店市中興路三段176號</li>
            <li>蘇杭：台北縣新店市民權路25號2F</li>
            <li>王家包子：台北縣新店市國校路25號之1</li>
            <li>辣。四川成都小炒：台北縣新店市吉安路2-1號</li>
            <li>山東餃子館：台北縣新店市中央路133巷19號1樓</li>
            <li>樂陶然健康小火鍋：台北縣新店市中央五街2號</li>
            <li>六六火鍋：台北縣新店市中央路89號</li>
            <li>龍門客棧：台北縣新店市中央路98號之1</li>
            <li>麵對麵：台北縣新店市中央路33號</li>
        </ul>
    </div>
````

Reference - [HTML DOM Tutorial @ W3School](http://www.w3schools.com/htmldom/default.asp)

* 意義：
  * API - 統一的存取介面。
  * DOM API - 瀏覽器所提供、讓 JavaScript 可以操作 HTML 元素的 API。
  * jQuery、YUI 的基礎都是在操作 DOM API。
* 取得元素的常用方法
  * document.forms[0], document.images[0], document.anchors[0]
  * document.forms["name"]
  * document.forms["name"].elements["name"]
  * document.getElementById()
  * document.getElementsByTagName()
  * document.getElementsByClassName() - 較新版的瀏覽器才支援
  * document.getElementsByName - 避免使用
* 常用的屬性或方法
  * innerHTML 讀寫其內容
  * nodeName 標籤名稱
  * nodeValue 值
  * style 屬性 = 將屬性名稱從 - 改為 camelSpace 
    * 例如 background-image 可以用 el.style.backgroundImage 做設定。
  * parentNode 屬性
  * childNodes 屬性
  * nextSliblings, previousSliblings - 旁邊的兄弟姊妹節點。
  * appendChild 新增節點
  * removeChild 移除節點
  * cloneNode 複製節點

## Event API
* JavaScript 與其他語言最大的不同：使用者事件驅動
* on<type> - 只能綁一次
* W3C - addEventListener (Event Bubbling)
* IE - attachEvent (Event Capturing)

## Play with YUI
