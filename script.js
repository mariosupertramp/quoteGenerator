// Mario H. Yañez - maheya@gmail.com


const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader');

let apiQuote = [];



// loader

function loading(){
loader.hidden = false;
quoteContainer.hidden = true;

}


function completado(){

loader.hidden = true;
quoteContainer.hidden = false;

}



// Nueva frase desde la API

function newQuote(){

    loading();
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];    
    authorText.textContent = quote.author;
    
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }    
    quoteText.textContent = quote.text;
    completado()

}



// get las frases desde la API

async function getQuote() {

    loading();

    const apiURL = 'https://type.fit/api/quotes'; 
    
    try {
        const response = await fetch(apiURL);
        apiQuote = await response.json();
         
        newQuote();
        
    } catch (error) {
        console.log('Upss esta cosa falló!!', error);
    }    

}    



// tweet quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}    


// carga la función

getQuote();


// Event listener
    newQuoteBtn.addEventListener('click', newQuote);
    twitterBtn.addEventListener('click', tweetQuote);


