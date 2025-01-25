const spans = document.querySelectorAll('span');
const submitBtn = document.querySelector('button');
const score = document.getElementById('score');
const ratingMessage = document.querySelector('.rating-state-end');
const mainParagraph = document.getElementById('main-paragraph');
let spanValue = 0;

const showRating = (spanValue)=>{
    score.innerText = spanValue;
}


spans.forEach((span)=>{
    span.addEventListener('click', ()=>{
        spanValue = parseInt(span.innerText);
        showRating(spanValue)
    })
})




submitBtn.addEventListener('click', ()=>{
    
    if (spanValue <= 0){
        alert('Select a number');
        return
    }

   

    ratingMessage.style.visibility = 'visible';
    ratingMessage.style.opacity = '1';
    
    setTimeout(()=>{
        ratingMessage.style.visibility = 'hidden';
        ratingMessage.style.opacity = '0';
    }, 3000)

    spanValue = 0;

    
})

/* Create a conditional to validate that the score has beeb selected*/ 

/* Reset the score value*/