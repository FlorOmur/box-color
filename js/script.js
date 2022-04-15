const box = document.querySelectorAll('.inner-box')

box.forEach(oneClick => {
    oneClick.addEventListener('click', () => {
        if(oneClick.classList.contains('color-box')){
            oneClick.classList.remove('color-box')
        }else {
            box.forEach(color => {
                color.classList.remove('color-box')
            })
            oneClick.classList.add('color-box')
        }
    })
})
const redBtn = document.querySelector('.btn-task2-red')
const blueBtn = document.querySelector('.btn-task2-blue')
const ovalBtn = document.querySelector('.btn-task2-radius')
const boxTask2 = document.querySelector('.box-task2')
redBtn.addEventListener('click', () => {
    boxTask2.classList.toggle('color-red')
})
blueBtn.addEventListener('click', () => {
    boxTask2.classList.toggle('color-blue')
})
ovalBtn.addEventListener('click', () => {
    boxTask2.classList.toggle('oval-task')
})

const btnGo = document.querySelector('.btn-go')
const textInput = document.querySelector('.text')
btnGo.addEventListener('click', () => {
    if (textInput.value.length) {
        alert(`Привет, ${textInput.value}`)
    } else {
        alert('Чё без имянный что-ли ?')
    }
})

const clanse = document.querySelector('.btn-text')
clanse.addEventListener('click', () => {
    if (textInput.value.length) {
        textInput.value = ''
    }
})

const randomNumber = Math.floor(Math.random() * 5 ) + 1
console.log(randomNumber)
const number = document.querySelector('.number')
const numbBtn = document.querySelector('.numb-btn')
let ques = 3
numbBtn.addEventListener('click', () => {

    ques = ques - 1
    if (ques < 1){
        alert('Ты проиграл')
        location.reload()
    }else if(randomNumber.toString() === number.value){
        location.reload()
        alert(`Ты выйграл, осталось ${ques} попытки`)
    }else if (randomNumber !== number.value){
        alert(`Ты не угадал, осталось ${ques} попытки`)
    }
})
