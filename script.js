'use strict';

// Selecionando elementos
const diceElement = document.querySelector('.dice')
const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')

// Condições iniciais
score0Element.textContent = 0
score1Element.textContent = 0
diceElement.classList.add('hidden')