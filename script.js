(function(d,w,script){
    console.log('Test');
    console.dir({d, w, script});
    console.log(new URL(w.location.href));
    console.log(w.parent);
    console.log(new URL(w.parent.location.href));
})(document, window, document.currentScript);
