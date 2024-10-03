const facts = [
    "Cats have 32 muscles in each ear.",
    "A group of cats is called a clowder.",
    "Cats sleep for 70% of their lives.",
    "A cat's nose is as unique as a human's fingerprint.",
    "Kittens are born blind and deaf."
];

const factElements = document.querySelectorAll(".catfact-box p");
let currentFactIndex = 0;

function changeFacts() {
    
    factElements.forEach(fact => {
        fact.style.animation = 'fadeOut 1s ease forwards'; 
    });

    setTimeout(() => {
        factElements.forEach((fact, index) => {
            fact.textContent = facts[(currentFactIndex + index) % facts.length];
            fact.style.animation = 'fadeIn 1s ease forwards'; 
        });
        currentFactIndex = (currentFactIndex + 1) % facts.length; 
    }, 500); 
}

document.querySelector(".cat-fact-btn").addEventListener("click", changeFacts);
