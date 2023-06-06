/* 
# Lógica da aplicação

  // Primeiro, validar se o primeiro caracter é um número.
  // Se o input estiver com valores e o botão pressionado for CE, executar a limpeza do conteúdo.
  // Se o input estiver com valores e o botão pressionado for C, executar a remoção do último valor do input. Repetir até que não haja mais valores.
*/

// Esse loop irá contar quantos botões existem e com isso possibilitar que monitoremos qualquer um que for pressionado.

// Como é uma aplicação muito pequena, isso é víavel, mas em um projeto mais complexo seria interessante abstrair as funções de cálculo para outro ambiente.

// Mapeamento de dados no documento para interatividade da calculadora.

const display = document.querySelector('div.result > span');
const calcHistory = document.querySelector('.last-calc');

// Botões gerais e principais botões de ação.
const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('button[value="CE"]')
const deleteButton = document.querySelector('button[value="C"]')
const equalsButton = document.querySelector('button[value="="]')
const decimalDotButton = document.querySelector('button[value="."]')
const plusMinusButton = document.querySelector('button[value="plus"]')

// Funções auxiliares executadas quando os botões principais forem pressionados.

// Aplica a limpeza completa do display apenas se houverem valores preenchidos.
clearButton.addEventListener('click', ()=>{
  if(display.innerHTML){
    display.innerHTML = "";
  }
})
// Aplica a remoção de cada caracter preenchido no display, também apenas se ele estiver preenchido.

deleteButton.addEventListener('click', ()=>{
  display.innerHTML = display.innerHTML.substring(0 ,(display.innerHTML.length - 1))
})

// Botão com a lógica mais complexa.
// Valida se o display possui valores, se os valores não são um número e se o último valor é um número para poder executar o cálculo preenchido.
equalsButton.addEventListener('click', ()=>{
  if(display.innerHTML && isNaN(display.innerHTML)&& !isNaN(display.innerHTML[display.innerHTML.length -1])){
    if(eval(display.innerHTML) ===Infinity){
    }else{
      display.innerHTML = eval(display.innerHTML)
    }
  }
})

// Botão para poder alterar o valor de negativo para positivo.
// Ele só executa a operação se o display for um número e diferente de zero.

plusMinusButton.addEventListener('click', ()=>{
  if(!isNaN(display.innerHTML) && display.innerHTML!=0){
    display.innerHTML = display.innerHTML * -1;
  }
})

// Aqui só observo os botões pressionados para poder 
function displayUpdate(inputValue){
    if(inputValue === "CE" || inputValue === "C" || inputValue === "plus"){
      console.log(inputValue)
    }else{
      display.innerHTML += inputValue
    }
}
for(let i = 0; i < buttons.length ; i++){

  // É iniciado um observador de eventos na DOM para possibilitar ações com base nos cliques dos botões.

  // Há outras formas de fazer isso, mas preferi essa por ser a mais curta que conheço.
  buttons[i].addEventListener('click', ()=>{
  // Aqui entramos nas regras de negócio da aplicação
  // Nela, estou validando alguns critérios para executar uma ação. 
  
  // Aqui eu aplico um filtro para impedir que o primeiro caracter seja um sinal.
  
  if(!isNaN(buttons[i].value)){
    displayUpdate(buttons[i].value)      
  }else{
    if(display.innerHTML && buttons[i].value !=="="){
      displayUpdate(buttons[i].value)
    }
  }
  })
}

