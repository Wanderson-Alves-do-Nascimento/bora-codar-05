const body = document.querySelector('body');
const value = document.querySelector('div.result > span');
const lastCalc = document.querySelector('.last-calc');

const buttons = document.querySelectorAll('button');

const keys = document.querySelector('.keys');

for(let i = 0; i < buttons.length ; i++){
  buttons[i].addEventListener('click', ()=>{
    if(buttons[i].value == "=" ){
      if(value.innerHTML){
        const result  = eval(value.innerHTML);
        value.innerHTML = result;
      }
      lastCalc.innerHTML = value.innerHTML
    }else{
      if(buttons[i].value == "CE"){
        value.innerHTML = "";
      }else{
        if(buttons[i].value == "C"){
          value.innerHTML = value.innerHTML.substring(0 ,(value.innerHTML.length - 1))
        }else{
          if(buttons[i].value == "plus"){
            value.innerHTML = value.innerHTML * -1;
          }else{
            value.innerHTML += buttons[i].value      
          }
        }
      }
    }
  })
}

