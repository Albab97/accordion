let ques = document.querySelector('.ques');
let answer = document.querySelector('.answer');
let listOfQues = document.getElementsByClassName('content');

// console.log(listOfQue);
for(i=0;i<listOfQues.length;i++){
    listOfQues[i].children[0].addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('active');
    })
}

