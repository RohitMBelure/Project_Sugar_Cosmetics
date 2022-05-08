
    function z(e,n,p,c){
        var len = document.getElementById(c).value.length
        var maxlen = document.getElementById(c).getAttribute("maxlength")
        if(len==maxlen){
            if(n!=='')
            {
                document.getElementById(n).focus();
            }
        }
        if(e.key === "Backspace")
        {
            if(p !== '')
            {
                document.getElementById(p).focus();
            }
        }
    }
    function x(e,n,p,c){
        var len = document.getElementById(c).value.length
        var maxlen = document.getElementById(c).getAttribute("maxlength")
        if(len==maxlen){
            if(n!=='')
            {
                document.getElementById(n).focus();
            }
        }
        if(e.key === "Backspace")
        {
            if(p !== '')
            {
                document.getElementById(p).focus();
            }
        }
    }



    document.querySelector("#close").addEventListener("click",close)
    function close(){
        var main = document.querySelector("#main")
        main.style.display = "none"
    }
