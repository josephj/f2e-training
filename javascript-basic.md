# Lession 3 - 賦予生命 (JavaScript)

從上次計時器的[範例](http://jsfiddle.net/josephj/jZrgW/4/)出發 

```javascript
    // setInterval(<要執行的函式>, <每 N 毫秒執行一次>);
    window.timer = setInterval(function () {
        // 取得此 DOM 節點的元素
        var el = document.getElementById("sec");
        // 以 innerHTML 取得此元素的內容
        sec  = el.innerHTML;
        // 內容是字串、需要透過 parseInt 轉為數字
        // 將目前的秒數減 1
        sec = parseInt(sec) - 1;
        // 以 innerHTML 再度塞回去此元素中
        el.innerHTML = sec;
        // 若目前秒數為 0
        if (sec === 0) {
            // 則透過 clearInterval 停止此計時器
            clearInterval(window.timer);
        }
    }, 1000);
```

## JavaScript

與 HTML 無關的部份！

1. 敘述 [Statement](http://www.w3schools.com/js/js_statements.asp)
   * 注意大小寫有差、結尾一律 ;
<img src="http://farm9.staticflickr.com/8151/7174006748_8a09841844.jpg" width="500" height="292" alt="Semicolon">
1. 變數 [Variable](http://www.w3schools.com/js/js_variables.asp)
   * 若不使用 var、會成為全域變數（可能會破壞別人的程式）
   * 字串，用 "" 或 '' 括起來
   * 布林值 true、false
   * 物件 {} 存取使用 .

```javascript       
         var students = {
            knock: {
                gender: "male",
                position: "manager" 
            },
            allen: {
                gender: "male",
                position: "engineer"
            }
         };
         alert(students.knock.position);  // "manager"
```
        
       
   * 陣列 [] 存取使用 index (從 0 開始)
   
```javascript       
         var students = [
            {
                name: "knock",
                gender: "male",
                position: "manager"
            },
            {
                name: "allen",
                gender: "male",
                position: "engineer"
            }
         ];
        
         alert(students[1].name); // ?
```

   * 函式 [Function](http://www.w3schools.com/js/js_functions.asp)     有兩種寫法 
    
```javascript       
          var setUI = function () {
              // do something here...
          };
          
          function setUI() {
              // do something here...
          }
```

       * Arguments
       * Return 
       * Closure - 跟別的語言很不一樣、一定要搞懂的地方！！！

        
        
1. 運算子 [Operator](http://www.w3schools.com/js/js_operators.asp) 
    
        a = 1;
        a = a + 2; // a = ?
        str = "10" + a; // str = ?
        y = 5;
        z = 2;
        x = y + z; // ?
    
1. 比較 [Comparision](http://www.w3schools.com/js/js_comparisons.asp)

        // 註：alert 是 window 物件 API 下的方法
        alert(1 == "1"); // ?
        alert(1 === "1"); // ?
        alert(1 != "1"); // ?
        alert(1 !== "1"); // ?
        alert(2 > 1); // ?
        alert(2 >= 1); // ?
        alert(1 < 2); // ?
        alert(1 <= 1); // ?
                
1. 判斷 [If…Else…](http://www.w3schools.com/js/js_if_else.asp)
   * if … else if … else if … else ...
   * 寫一個判斷式：hour 變數在 6 ~ 12 時 alert("Good Morning")、在 12 ~ 18 時 alert("Good Afternoon");、在 18 ~ 24 時 alert("Good Evening");、其他時段則 alert("It's midnight");

```javascript 
         var hour = 8;
         var greeting = "";
         if (hour >= 6 && hour < 12) {
             greeting = "Good Morning";
         } else if (hour >= 12 && hour < 18) {
             greeting = "Good Afternoon";
         } else if (hour >=18 && hour < 24){
             greeting = "Good Evening";
         } else {
             greeting = "It's midnight";
         }       
         alert(greeting);
```
        
1. 迴圈 [For Loop](http://www.w3schools.com/js/js_loop_for.asp)
   * for (i=開始值; i<結束值; i++) { … }
   * 從 1 加到 10 怎麼做？
   
## 物件

### 什麼是物件？

* 元件是個軀殼、用來產生物件（天神用來造人的模子）
* 物件是獨立的個體，有自己的屬性及方法（人）
* 屬性是此個體的資料（例如人的身高體重）
* 方法是此個體的可允許的動作（人講話、走路...）
* 事件是此個體有可能碰到的情況 (人跌倒、講完話)
* 物件導向就是以這樣的概念來實作。

````javascript
    // 建立元件
    function People(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    People.prototype.say = function () {
    };
    People.prototype.speak = function () {
    };
    
    // 建立物件
    var people = new People();
    people.say();   
````


### JavaScript 中、所有的型別都是物件！

#### String
* [JavaScript String Object @ W3School](http://www.w3schools.com/jsref/jsref_obj_string.asp)
* length 此字串總長度
* replace(from, to) 把 from 改為 to
* indexOf(str) 從字串中找到 str 的位置
* substr(x, y)  以索引值 x 開始取 y 個字
* substring(x, y) 以索引值 x ~ y 取得部份內容
* split() 拆開成字串

#### Array
* [JavaScript String Object @ W3School](http://www.w3schools.com/jsref/jsref_obj_array.asp)
* length
* push()
* join()

#### Date 
* [JavaScript Date Object](http://www.w3schools.com/jsref/jsref_obj_date.asp)
* getHours(), getDate(), getMinutes
* getTime() 你等了多久才按下按鈕
