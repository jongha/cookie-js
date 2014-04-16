var cookieAPI = {
    set: function(key, values, expires) {
        "use strict";
        
        var val = "", i;
        if(values instanceof Array) {
            for(i in values) {
                if(values.hasOwnProperty(i)) {
                    if(val !== "") { val += "|"; }
                    val += encodeURIComponent(values[i]);
                }
            }
        }else {
            val = values;
        }
        
        var expire = new Date();
        expire.setDate(expire.getDate() + (expires || 365) * 24 * 60 * 60 * 1000);
        document.cookie = (key + "=" + val + "; path=/; expires=" + expire);
    },
    get: function(key) {
        "use strict";
        
        key = key + "=";
        var c = document.cookie;
        var start = c.indexOf(key);
        var val = "";
        
        if(start !== -1) {
            start += key.length;
            var end = c.indexOf(";", start);
            if(end === -1) { end = c.length; }
            
            val = c.substring(start, end);
        }
        return decodeURIComponent(val);    
    },
    empty: function() {
        "use strict";
        var cookies = document.cookie.split(";");
        var i;
        for (i=0; i<cookies.length; i++) {
            var c = cookies[i];
            var pos = c.indexOf("=");
            var name = pos > -1 ? c.substr(0, pos) : c;
            
            document.cookie = name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }        
    }   
};
