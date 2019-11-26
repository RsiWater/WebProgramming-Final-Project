class questionSystem{
    constructor(){
        const yesLine=document.querySelectorAll('.line');
        const yes=document.querySelectorAll('.yes');
        const no=document.querySelectorAll('.no');
        this.lastQuestion=document.querySelector('#lastQ');
        this.finallyQuestion=this.finallyQuestion.bind(this);
        this.lastQuestion.classList.add('hidden');
        this.yesClick=this.yesClick.bind(this);
        this.noClick=this.noClick.bind(this);
        this.joke=this.joke.bind(this);
        this.yesLinBox=[];
        this.yesBox=[];
        this.noBox=[];
        this.isClickBox=[];

        for(let i=0;i<6;i++){
            this.isClickBox.push(0);
        }
        for(const box of yesLine){
            this.yesLinBox.push(box);
        }
        for(const box of yes){
            box.addEventListener('click',this.yesClick);
            this.yesBox.push(box);
        }
        for(const box of no){
            box.addEventListener('click',this.noClick);
            this.noBox.push(box);
        }
    }


    yesClick(event){
        let i=0;
        let position;
        for(const box of this.yesBox){
            if(event.currentTarget===box){
                position=i;
                this.isClickBox[i]=1;
            }
            i++;
        }
        i=0;
        for(const box of this.yesLinBox){
            if(i===position){
                box.style.animation='show 1s';
                box.style.animation='none';
                setTimeout(()=>{
                    box.style.background='rgb(22, 109, 22)';
                    box.style.animation='';
                },0)
            }
            i++;
        }
        if(this.isClickBox[5]===1){
            this.joke();
        }
        if(this.isClickBox[0]===1 && this.isClickBox[1]===1 && this.isClickBox[2]===1 && this.isClickBox[3]===1 && this.isClickBox[4]===1){
            this.finallyQuestion();
        }
    }

    noClick(event){
        let i=0;
        let position;
        for(const box of this.noBox){
            if(event.currentTarget===box){
                position=i;
                this.isClickBox[i]=1;
            }
            i++;
        }
        i=0;
        for(const box of this.yesLinBox){
            if(i===position){
                box.style.animation='show 1s';
                box.style.animation='none';
                setTimeout(()=>{
                    box.style.background='rgb(211, 16, 16)';
                    box.style.animation='';
                },0)
            }
            i++;
        }
        if(this.isClickBox[5]===1){
            this.joke();
        }
        if(this.isClickBox[0]===1 && this.isClickBox[1]===1 && this.isClickBox[2]===1 && this.isClickBox[3]===1 && this.isClickBox[4]===1){
            this.finallyQuestion();
        }
    }

    finallyQuestion(){
        this.lastQuestion.classList.remove('hidden');
    }

    joke(){
        const mybody=document.querySelector('body');
        mybody.style.background='white';
        mybody.innerHTML='';
        const finallJoke=document.createElement('div');
        finallJoke.classList.add('finallJoke');
        setTimeout(()=>{
            mybody.appendChild(finallJoke);
            const carbi=document.createElement('img');
            const jokeText=document.createElement('h1');
            carbi.src='image/carbi.gif';
            jokeText.textContent='感謝您填完這份問卷，口頭獎勵乙次以資鼓勵';
            finallJoke.appendChild(carbi);
            finallJoke.appendChild(jokeText);

            const backContainer=document.createElement('div');
            const back=document.createElement('a');
            back.textContent='Back';
            back.href='page-title.html';
            back.classList.add('back');
            finallJoke.appendChild(back);
        },1500)
    }
}
const question=new questionSystem();