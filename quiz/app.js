 const startbtn = document.getElementById('start-btn')
 const nextbtn = document.getElementById('next-btn')

 const questioncontainerelement = document.getElementById('question-container')
 const questionelement = document.getElementById('question')
 const answerbuttonselement = document.getElementById('ans-buttons')

 let shuffledquestions,currentquestionindex;
 let quizscore=0

startbtn.addEventListener('click',startgame)
nextbtn.addEventListener('click',()=>
{
    currentquestionindex++
    setnextquestion()
})

function startgame(){
    startbtn.classList.add("hide")
    shuffledquestions=questions.sort(()=>Math.random()-0.5)
    currentquestionindex=0
    questioncontainerelement.classList.remove('hide');
    setnextquestion()
    quizscore=0
}


function setnextquestion(){
    resetstate()
    showquestion(shuffledquestions[currentquestionindex])
}

function showquestion(question){
    questionelement.innerText=question.question
    question.answers.forEach((answer)=>{
        const
    button=document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');

        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectans)
        answerbuttonselement.appendChild(button)
    })

}

function resetstate(){
    nextbtn.classList.add('hide')
    while(answerbuttonselement.firstChild){
        answerbuttonselement.removeChild(answerbuttonselement.firstChild)
    }
    
}

function selectans(e){
    const selectedbtn=e.target
    const correct=selectedbtn.dataset.correct

    setstatusclass(document.body,correct)
    
    Array.from(answerbuttonselement.children).forEach((button)=>{
        setstatusclass(button,button.dataset.correct)
    })
    if(shuffledquestions.length>currentquestionindex+1){
        nextbtn.classList.remove('hide')
    }
    else{
        startbtn.innerText="restart"
        startbtn.classList.remove('hide')
    }
    if(selectedbtn.dataset==correct){
        quizscore++
    }
    document.getElementById('right-answers').innerText=quizscore
}

function setstatusclass(element,correct){
    if(correct){
        element.classlist.add("correct");}
    else{
        element.classlist.add("wrong");
    }
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