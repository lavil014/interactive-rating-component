const spans = document.querySelectorAll('span');

console.log(spans)

spans.forEach((span)=>{
    span.addEventListener('click', ()=>{
        console.log(span.innerText);
    })
})