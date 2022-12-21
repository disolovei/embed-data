(function(script,wrapper,d,w){
    console.log(script.parentElement);
    console.log(w.location.href);
})(document.currentScript,document.currentScript.parentElement,document,window);
