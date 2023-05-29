export default class GuessNumber{
    constructor(app){
        this.app = app;
        this.screen = this.app.querySelector('#screen');
        this.inputGuess = this.app.querySelector('#input-guess');
        this.sendBtn = this.app.querySelector('#button-send');
        this.counter = 0;
        this.trueUnswer = Math.floor(Math.random() * 10) + 1;



        this.sendBtn.addEventListener('click', ()=>{
            this.clickOnBtn();
        });

    }

    init(){
        this.getGuess("Привет");
        
        this.getGuess("Я загадал число от 1 до 10");
        this.getGuess("Попробуй угадать");

    }



    finally(){
        this.getGuess(`Ты победил это число: ${this.trueUnswer}`);
        this.getGuess('А сейчас новое от 1 до 10');
        this.trueUnswer = Math.floor(Math.random() * 10) + 1;
    }

    numberCheck(number){
        if (number == this.trueUnswer){
            
            this.finally()
        } else{
            if(number < this.trueUnswer){
            this.getGuess('Моё число больше');
            } else{
            this.getGuess('Моё число меньше');
            }
        }
    }

    clickOnBtn(){
        let unswer = this.inputGuess.value;
        this.getAnswer(unswer+'?');
        if (isNaN(unswer)) {
            this.getGuess('Это не число');
        } else{
            unswer = +unswer;
            this.numberCheck(unswer);
        }


    }

    getGuess(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-left');
        block.innerHTML = `<span class='bubble__text bubble__text-quess' id='bubble'>${text}</span> `
        this.screen.appendChild(block);
    }
    getAnswer(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-right');
        block.innerHTML = `<span class='bubble__text bubble__text-answer'>${text}</span> `
        this.screen.appendChild(block);
    }

}