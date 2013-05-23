(function() {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    // Load an image url or an array of image urls
    function load(urlOrArr) {
        if(urlOrArr instanceof Array) {
            urlOrArr.forEach(function(url) {
                load(url);
            });
        }
        else {
            _load(urlOrArr);
        }
    }

    function _load(objNameUrl) {
        if(resourceCache[objNameUrl.name]) {
            return resourceCache[objNameUrl.name];
        }
        else {
            var img = new Image();
            img.onload = function() {
                resourceCache[objNameUrl.name] = img;

                if(isReady()) {
                    readyCallbacks.forEach(function(func) { func(); });
                }
            };
            resourceCache[objNameUrl.name] = false;
            img.src = objNameUrl.url;
        }
    }

    function get(name) {
        return resourceCache[name];
    }

    function isReady() {
        var ready = true;
        for(var k in resourceCache) {
            if(resourceCache.hasOwnProperty(k) &&
               !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.loader = { 
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();