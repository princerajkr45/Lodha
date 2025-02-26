//document.cookie = 'mycookie=valueOfCookie;expires=DateHere;path=/'


function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function deleteCookie(name) {
    setCookie(name,"",-1);
}
/*
  Changed function names from readCookie(), createCookie()
  and eraseCookie() to getCookie(), setCookie() and
  deleteCookie().
*/

// Setting a cookie
//$.cookie('myCookie':'myValue');

// Creating cookie with all availabl options
//$.cookie('myCookie2', 'myValue2', { expires: 7, path: '/', domain: 'uat.lodhagroup.in', secure: true });

//$.cookie('myCookie2', null);
// Get a cookie
//var getCoo = $.cookie('myCookie2'); 
//console.log(getCoo);
// Delete a cookie