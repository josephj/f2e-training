(function () {
    var YUD = YAHOO.util.Dom;
    var YUE = YAHOO.util.Event;
    /* #ad 廣告模組 {{{ */
    YUE.onContentReady('ad', function () { 
        var dModule = this;
        var dLink = YUD.getElementsByClassName('view-link')[0];
        var dImage = dModule.getElementsByTagName('img')[0];
        var oButton = new YAHOO.widget.Button(dLink);
        var oPanel = null;
        var onButtonClick = function(oEvent) {
            YUE.stopEvent(oEvent);
            if (!oPanel) {
                var dPanel = document.createElement('div');
                dPanel.innerHTML = [
                    '<div class="hd">觀看圖片</div>',
                    '<div class="bd"><img src="' + dImage.src.replace('_m', '') + '" width="500" height="375" alt="YDN 2009 筆記本"></div>'
                ].join('');
                document.body.appendChild(dPanel);
                oPanel = new YAHOO.widget.Panel(dPanel, {
                    close: true, 
                    fixedcenter: true, 
                    modal: true,
                    underlay:'shadow', 
                    visible: false,
                    width:'600px' 
                });
                oPanel.render();
            }
            oPanel.show();
        }
        oButton.addListener("click", onButtonClick); 
    });
    /* }}} */
    /* #nav 導覽列模組 {{{ */
    YUE.onContentReady('nav', function () { // onContentReady：當模組內容顯示在網頁上時就立刻執行
        // 在這裡 this 為此模組
        var dModule = this;
        // 將選單初始化 
        var oMenu = new YAHOO.widget.MenuBar('nav', {
            autosubmenudisplay: true, // 設 true 讓滑鼠移到母選單就顯示（預設是點選才顯示）
            hidedelay: 750,           // 等待滑鼠移開子選單 0.75 秒後才隱藏
            lazyload: true            // 效能選項，直到滑到母選單才建立子選單
        });
    });
    /* }}} */
})();
