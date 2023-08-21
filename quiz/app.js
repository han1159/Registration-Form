 const startbtn = document.getElementById('start-btn')
 const nextbtn = document.getElementById('next')
 const endbtn = document.getElementById('end')
 const questioncontainerelement = document.getElementById('question-container')
 const questionelement = document.getElementById('question')
 const answerbuttonselement = document.getElementById('ans-buttons')
const score=document.getElementById('score')
 let shuffledquestions,currentquestionindex,crtans;
 let quizscore=0
 let no=0;
startbtn.addEventListener('click',startgame)
nextbtn.addEventListener('click',()=>
{
    currentquestionindex++
    setquestion()
})
function startgame(){
    startbtn.classList.add("hide");
    shuffledquestions=questions.sort(()=>Math.random()-0.5);
    currentquestionindex=0;
    nextbtn.classList.remove('hide');
    questioncontainerelement.classList.remove('hide');
    quizscore=0;
    setquestion()

}

function setquestion(){
    let i=0

   if(currentquestionindex<questions.length) {questionelement.innerText=questions[currentquestionindex].question
}
else{
    nextbtn.classList.add('hide')
    endbtn.classList.remove('hide')

}
document.getElementById('1').innerText=questions[currentquestionindex].answers[0].text
document.getElementById('2').innerText=questions[currentquestionindex].answers[1].text
document.getElementById('3').innerText=questions[currentquestionindex].answers[2].text
document.getElementById('4').innerText=questions[currentquestionindex].answers[3].text
}
function handleClick(button) {
    const answerButtons = document.querySelectorAll('.btn');
    answerButtons.forEach(btn => {
        btn.classList.toggle('selected');
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    correctans()
    if(button.innerText==crtans){
        ++quizscore
    }

}

function correctans(){
    while(no<4){
        if(questions[currentquestionindex].answers[no].correct){
            crtans=questions[currentquestionindex].answers[no].text
            break
        }
        no+=1
    }
}

function showresult(){
    score.classList.remove('hide')
    document.getElementById('right-answers').innerHTML=quizscore
}


 const questions=[
    {question:'Which one of these is js framework?',
    answers:[
        {text:'Python',correct:false},
        {text:'React',correct:true},
        {text:'Mongodb',correct:false},
        {text:'Django',correct:false}
    ]},
    {question:'Who is the current Prime Miinister of India?',
    answers:[
        {text:'Narendra Modi',correct:true},
        {text:'Jawaharlal Nehru',correct:false},
        {text:'Manmohan Singh ',correct:false},
        {text:'Droupadi Murmu',correct:false}
    ]},
    {question:'which among these is not a supernatural series?',
    answers:[
        {text:'Supernatural',correct:false},
        {text:'Teen Wolf',correct:false},
        {text:'13 Reasons why',correct:true},
        {text:'Manifest',correct:false}
    ]}
    
 ]