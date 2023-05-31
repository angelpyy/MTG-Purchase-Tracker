var ck = ck || {};

$(function () {
    ck.trackSettingByCookie('.perPage','limit');
    ck.trackSettingByCookie('#sortBy','sortBy');
});

ck.trackSettingByCookie = function(fieldSelector,fieldName) {
    $(document).on('change', fieldSelector, (function () {
        let newValue = $(this).val();
        let cookieString = fieldName + '=' + newValue + ';path=/';
        let url = window.location.href;
        document.cookie = (cookieString);
        url = ck.removeUrlParam(url, 'page');
        window.location.href = url;
    }));
};

ck.removeUrlParam = function(url, param) {
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
        var urlBase = urlparts.shift(); //get first part, and remove from array
        var queryString = urlparts.join("?"); //join it back up
        var prefix = encodeURIComponent(param) + '=';
        var pars = queryString.split(/[&;]/g);

        for (var i = pars.length; i-- > 0;) {               //reverse iteration as may be destructive
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        if (pars.length > 0) {
            url = urlBase + '?' + pars.join('&');
        } else {
            url = urlBase;
        }
    }

    return url;
};

ck.addUrlParam = function(url, param, value, encode) {
    encode = !!encode;
    // Using a positive lookahead (?=\=) to find the
    // given parameter, preceded by a ? or &, and followed
    // by a = with a value after than (using a non-greedy selector)
    // and then followed by a & or the end of the string
    var val = new RegExp('(\\?|\\&)' + param + '=.*?(?=(&|$))'),
        qstring = /\?.+$/, urlSplit = "", anchor = "";

    //check to see if we have an anchor (#) tag
    if (url.indexOf("#") !== -1) {
        urlSplit = url.split("#");
        url = urlSplit[0];
        anchor = urlSplit[1];
    }

    // Check if the parameter exists
    if (val.test(url)) {
        // if it does, replace it, using the captured group
        // to determine & or ? at the beginning
        url = url.replace(val, '$1' + param + '=' + value);
    } else if (qstring.test(url)) {
        // otherwise, if there is a query string at all
        // add the param to the end of it
        url += (encode) ? encodeURIComponent('&' + param + '=' + value) : '&' + param + '=' + value;
    } else {
        // if there's no query string, add one
        url += '?' + param + '=';
        url += encode ? encodeURIComponent(value) : value;
    }

    //now place our anchor if there was any to the end of the query string
    if (anchor !== "") {
        url += "#" + anchor;
    }
    return url;
};