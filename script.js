(function(d,w,script){
    console.log('Test');
    console.dir({d, w, script});
    console.log(new URL(w.location.href));
})(document, window, document.currentScript);
