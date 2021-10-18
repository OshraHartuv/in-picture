'use strict'

var gCurrQuestIdx = 0;
var gQuests = createQuests();

function init() {
    renderQuest()
}


function createQuests() {
    var Quests = [
        { id: 1, opts: ['rottweiler', 'pug', 'doberman'], correctOptIndex: 1 },
        { id: 2, opts: ['german sheperd', 'malinois', 'cane corso', 'border Cllie'], correctOptIndex: 2 },
        { id: 3, opts: ['german sheperd', 'labrador', 'golden retriever'], correctOptIndex: 3 },
        { id: 4, opts: ['pug', 'german sheperd', 'oshra\'s best doggo'], correctOptIndex: 3 },

    ]
    return Quests;
}

function reset(elReset){
    // var elReset= document.querySelector('.reset');
    elReset.style.display='none'
    var elBody = document.querySelector('body');
    elBody.classList.remove('winner');
    var elH3 = document.querySelector('h3')
    elH3.style.display = 'none';
    var elH2 = document.querySelector('h2')
    elH2.style.display = 'block'
    var elH1 = document.querySelector('h1')
    elH1.style.display = 'block'
    gCurrQuestIdx = 0;
    init();
}

function endGame() {
    var elImg = document.querySelector(`.img${gCurrQuestIdx}`);
    elImg.style.display = 'none';
    var elOpt = document.querySelector('.options');
    elOpt.style.display = 'none'
    var elH3 = document.querySelector('h3')
    elH3.style.display = 'block'
    var elH2 = document.querySelector('h2')
    elH2.style.display = 'none'
    var elH1 = document.querySelector('h1')
    elH1.style.display = 'none'
    var elBody = document.querySelector('body');
    elBody.classList.add('winner')
    var elReset= document.querySelector('.reset');
    elReset.style.display='block'
}

function renderQuest() {
    // clearing previous picture
    if (gCurrQuestIdx !== 0) {
        var elPrevImg = document.querySelector(`.img${gCurrQuestIdx}`);
        elPrevImg.style.display = 'none';
    }
    // displaying current picture
    var elCurrImg = document.querySelector('.img' + [gCurrQuestIdx + 1]);
    elCurrImg.style.display = 'block';
    // changing and displaying bottuns
    var elOpt = document.querySelector('.options');
    var strHtml = '';
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHtml += `<button class="btn btn${i + 1}" onclick="checkAnswer(${i + 1})">${gQuests[gCurrQuestIdx].opts[i]}</button>`
    }
    elOpt.innerHTML = strHtml;
    elOpt.style.display = 'block'
}

function checkAnswer(optIdx) {
    var currBtn = document.querySelector(`.btn${optIdx}`)
    var currQuest = gQuests[gCurrQuestIdx];
    if (optIdx === currQuest.correctOptIndex) {
        currBtn.classList.add('true')
        currBtn.innerText = 'you are so smart!'
        gCurrQuestIdx++
        (gCurrQuestIdx === gQuests.length) ? setTimeout(endGame, 500) : setTimeout(renderQuest, 700);
    }
    else {
        currBtn.classList.add('false')
        currBtn.innerText = 'nope'
    }
}