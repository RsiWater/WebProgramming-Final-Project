let CHR_IMG_URL=
[
    'images/Link_(TP).png',
    'images/Zelda_img2.png',
    'images/Zelda_img3.png'
]
const showContainer = document.querySelector('#show');

const optionContainer = document.querySelectorAll('.option_container div');
let textDives = document.querySelectorAll('.show_window .text div');
optionContainer.forEach(ele => {
    ele.addEventListener('click', function (event) {
        let index = event.currentTarget.dataset.index;
        let chrImage = document.querySelector('.show_window img');
        chrImage.style.animation = 'hiddenIn 1s';
        chrImage.addEventListener('animationend',function()
        {
            chrImage.style.opacity = '0';
            chrImage.src = CHR_IMG_URL[index];
            chrImage.style.animation = 'showUp 1s';
            chrImage.addEventListener('animationend',function()
            {
                chrImage.style.opacity = '1';
            })
        })
        
        
        textDives.forEach(ele => {
            if (ele.hidden == false) {
                ele.hidden = true;
                textDives[index].hidden = false;
                textDives[index].style.animation = 'change_in 1.5s';
                textDives[index].addEventListener('animationend', function () {
                    textDives[index].style.animation = '';
                })
            }
        })
    })
})