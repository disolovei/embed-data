(function(script,wrapper,d,w){
    console.log(script.parentElement);
    console.log(w.location.href);

    fetch('https://disolovei.github.io/embed-data/template.html')
        .then(response => response.text())
        .then(template => wrapper.innerHTML = template)
        .catch(console.warn);
})(document.currentScript,document.currentScript.parentElement,document,window);
