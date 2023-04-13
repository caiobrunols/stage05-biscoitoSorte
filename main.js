const screen1 = document.querySelector(".screen1"); 
const screen2 = document.querySelector(".screen2"); 
const btnLuck = document.querySelector("#btnLuck");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 9);
let phrases = [`A vida trará coisas boas se tiver paciência.`,
 `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`,
 `Não há que ser forte. Há que ser flexível.`,
 `Podemos escolher o que semear, mas somos obrigados a colher o que plantamos`,
 `Uma bela flor é incompleta sem as suas folhas.`,
 `O riso é a menor distância entre duas pessoas.`,
 `A sorte favorece a mente bem preparada.`,
 `Se você se sente só é porque construiu muros ao invés de pontes.`,
 `Deixe de lado as preocupações e seja feliz.`,
 `O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.`]

btnLuck.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnter)

function handleTryClick(e){
  e.preventDefault();
  
  toggleScreen();
  screen2.querySelector("p").innerText = phrases[randomNumber];
 
}

function handleResetClick(){
  randomNumber = Math.round(Math.random() * 10);
  toggleScreen()
}

function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
}
}
