import { NegociacaoController } from './controllers/negociacao-controllers.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('sumit', event => {
    event.preventDefault();
    controller.adiciona();
});
