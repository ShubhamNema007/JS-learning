let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerText;
        if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText =='+/-'){
            if(screen.value.substring(0, 1) == "-")
            screen.value = screen.value.substring(1, screen.value.length)
            else
            screen.value = "-" + screen.value
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText =='del'){
            screenValue = screen.value.slice(0,-1);
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
