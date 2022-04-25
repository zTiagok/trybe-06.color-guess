// GLOBAL

let randomizer = []

for (let index = 0; index < 6; index += 1)
{

    
    randomColors()

    randomizer[index] = "(" + random1 + ', ' + random2 + ', ' + random3 + ')'

    console.log(randomizer[index]);
}

let scoreElement = document.querySelector('#score')

if (!localStorage.getItem('score'))
{

    score = 0
}
else
{

    score = parseInt(localStorage.getItem('score'));
}
scoreElement.innerText = score




// FUNCTIONS

function guessRGB()
{

    const element = document.querySelector('#rgb-color')
    let randomAnswer = Math.floor(Math.random() * 5)

    element.innerHTML = randomizer[randomAnswer]
}

function checkAnswer(origin)
{

    const element = document.querySelector('#rgb-color').innerText
    const answer = document.querySelector('#answer')

    if (origin.target.innerText === element)
    {

        answer.innerText = 'Acertou!'
        score += 3;
        scoreElement.innerText = score
        
    }
    else
    {

        answer.innerText = 'Errou! Tente novamente!'
    }
}

function circleRGB()
{


    const element = document.querySelector('#ball-holder')
    
    for (let index = 0; index < 6; index += 1)
    {

        const child = document.createElement('div')
        
        element.appendChild(child)
        child.className = 'ball'    
        child.style.backgroundColor = "rgb" + randomizer[index]
        child.style.color = 'transparent'
        child.innerText = randomizer[index]
        child.addEventListener('click', checkAnswer)
    }
}

function resetGame()
{
    localStorage.setItem('score', score)
    location.reload()
}


function randomColors()
{

    random1 = Math.floor(Math.random() * 256);
    random2 = Math.floor(Math.random() * 256);
    random3 = Math.floor(Math.random() * 256);
}


// CALL FUNCTIONS

guessRGB()
circleRGB()



// EVENT LISTENERS

const resetButton = document.querySelector('#reset-game')
resetButton.addEventListener('click', resetGame)