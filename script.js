(function(d,w,script){
    console.log('Test');
    console.dir({d, w, script});
    console.log(new URL(w.location.href));
    console.log(w.parent);
})(document, window, document.currentScript);
