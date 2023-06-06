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
        this.getGuess('Давай теперь новое от 1 до 10');
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

    getGuess(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-guess');
        block.innerHTML = text;
        this.screen.appendChild(block);
        block.scrollIntoView();
    }
    getAnswer(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-answer');
        block.innerHTML =  text;
        this.screen.appendChild(block);
        block.scrollIntoView();
    }

    lengthChenck(unswer){
        if (unswer.length > 2){
            this.getAnswer('o_o');
            this.getGuess('Слишком длинное сообщение');
            this.getGuess('Для нашей игры');
            return false
        }
        if(unswer.length === 0){
            return false
        }
        return unswer;
    }


    clickOnBtn(){
        let unswer = this.inputGuess.value;
        
        unswer = this.lengthChenck(unswer);

    
        if (unswer == false){
            return;
        } 

        this.getAnswer(unswer+'?');
        if (isNaN(unswer) || unswer.length === 0) {
            this.getGuess('Это не число');
        } else{
            unswer = +unswer;
            this.numberCheck(unswer);
        }
    }

}