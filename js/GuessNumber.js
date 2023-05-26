export default class GuessNumber{
    constructor(app){
        this.app = app;
        this.screen = this.app.querySelector('#screen');
        this.inputGuess = this.app.querySelector('#input-guess');
        this.sendBtn = this.app.querySelector('#button-send');
        this.counter = 0;
        this.trueUnswer = 8;



        this.sendBtn.addEventListener('click', ()=>{
            this.clickOnBtn();
        });

        this.init();
    }

    init(){
        const block = this.getGuess("Привет, я загадал число от 1 до 10. Попробуй угадать");
        this.screen.appendChild(block);
    }

    clickOnBtn(){
        console.log(this.inputGuess)
        unswer = this.inputGuess.value;
        console.log(unswer);
    }

    getGuess(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-left');
        block.innerHTML = `<span class='bubble__text bubble__text-quess'>${text}</span> `
        return block;
    }
    getAnswer(text){
        const block = document.createElement('div');
        block.classList.add('bubble', 'bubble-right');
        block.innerHTML = `<span class='bubble__text bubble__text-answer'>${text}</span> `
        return block;
    }


    // sendGuess(){
    //     const block = document.createElement('div');
    //     block.classList.add('bubble', 'guess');
    //     this.counter +=1;

    //     block.dataset.bubbleId = this.counter;
    //     block.innerHTML = '<div><p>Hello</p></div>';
    //     block.addEventListener('click', ()=>{console.log('hello')});

    //     this.screen.appendChild(block);
    //     // this.screen.prepend(block);
    //     console.log(block);
    // }
    
}