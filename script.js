(function(){
    var insertedStyle = false;

    // PJAX links!
    pjax.connect({
        'container': 'feather-body',
        'parseJS': true,
        'ready': function(){
            insertLoader();
            console.log("PJAX loaded!");
        },
        'beforeSend': function(){
            document.getElementById('fluid-nav-loader').style.display = "inline-block";
        },
        'complete': function(){
            insertLoader();
            document.getElementById('fluid-nav-loader').style.display = "none";
        },
        'success': function(event){
            var url = (typeof event.data !== 'undefined') ? event.data.url : '';
            console.log("Successfully loaded "+ url);
        },
        'error': function(event){
            var url = (typeof event.data !== 'undefined') ? event.data.url : '';
            console.log("Could not load "+ url);
        }
    });

    // Insert loader div after footer (hidden by default)
    function insertLoader() {
        // Check if style has already been added to <head>
        if (!insertedStyle) insertLoaderStyle();
        var loaderDiv = '<div id="fluid-nav-loader">\
            <div class="line-scale">\
                <div></div><div></div><div></div><div></div>\
            </div>\
        </div>';
        document.getElementById('brdfooter').insertAdjacentHTML('beforeend', loaderDiv);
    }
    // Insert loader style
    function insertLoaderStyle() {
        // Set css for loader
        var loaderStyle = '@-webkit-keyframes line-scale {\
        0% {\
        -webkit-transform: scaley(1);\
                transform: scaley(1); }\
        50% {\
        -webkit-transform: scaley(0.4);\
                transform: scaley(0.4); }\
        100% {\
        -webkit-transform: scaley(1);\
                transform: scaley(1); } }\
        @keyframes line-scale {\
        0% {\
        -webkit-transform: scaley(1);\
                transform: scaley(1); }\
        50% {\
        -webkit-transform: scaley(0.4);\
                transform: scaley(0.4); }\
        100% {\
        -webkit-transform: scaley(1);\
                transform: scaley(1); } }\
        .line-scale > div:nth-child(1) {\
        -webkit-animation: line-scale 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\
              animation: line-scale 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }\
        .line-scale > div:nth-child(2) {\
        -webkit-animation: line-scale 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\
              animation: line-scale 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }\
        .line-scale > div:nth-child(3) {\
        -webkit-animation: line-scale 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\
              animation: line-scale 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }\
        .line-scale > div:nth-child(4) {\
        -webkit-animation: line-scale 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\
              animation: line-scale 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }\
        .line-scale > div {\
            background-color: #1895e6;\
            width: 4px;\
            height: 30px;\
            border-radius: 2px;\
            margin: 2.5px;\
            -webkit-animation-fill-mode: both;\
                  animation-fill-mode: both;\
            display: inline-block; }\
        #fluid-nav-loader {\
            position: fixed;\
            bottom: 5px;\
            right: 25px;\
            z-index: 1000;\
            display: none;\
        }';
        // Insert loader style in <head>
        var styleElement = document.createElement("style");
        styleElement.type = "text/css";
        if (styleElement.styleSheet) {
            styleElement.styleSheet.cssText = loaderStyle;
        } else {
            styleElement.appendChild(document.createTextNode(loaderStyle));
        }
        document.getElementsByTagName("head")[0].appendChild(styleElement);
        insertedStyle = true;
    }
}());
