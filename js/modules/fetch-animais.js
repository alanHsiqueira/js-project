import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  //cria a div contendo informações de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  //preenche cada animal no dom
  function preencherAnimais(animal){
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  //anima os numeros de cada animal
  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  //faz a requisição da api e cria os animais
  async function criarAnimais() {
    try {
      //fetch e espera a resposta
      const animaisResponse = await fetch(url);
      //transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(target);
      //apos a transformação de json, ativa as funções para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
  fetchAnimais('./animaisapi.json');
}
