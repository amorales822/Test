document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Click Me';
    button.className = 'btn-styled';

    button.onclick = function() {
        document.getElementById('message');
        button.innerHTML = "Hello WORLD!"
    };
    var container = document.getElementById('container'); 
    container.appendChild(button);
}, false);
