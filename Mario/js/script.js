// Vamos chamar o elemento da imagem do mario,
// vamos chamar de acordo como esta no CSS
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')

// escrevendo a funcao, para criar uma classe chamada 'jump' dentro da imagem no html
// vamos chamar o elemento da imagem e a funcao add para adicionar uma class atraves do 'classlist'
// e chamar a class 'jump'
const jump = () => {
    mario.classList.add('jump')

    // recebemos 2 parametros uma funcao e um tempo
    // o tempo tem que ser de acordo com o que definimos no css de 500ms
    // vamos utilizar outros parenteses dentro para criar uma funcao anonima na primeira chamada
    setTimeout(() => {
        mario.classList.remove('jump')
    },500);
}

// criando uma constante de Loop para verificar se perdemos ou não
// tera um intervalo de tempo para cada verificacao, esta funcao funciona igual timeout precisa de 2 parametros
const loop = setInterval(() => {
    // vamos primeiro criar a constante do pipe=cano la em cime para pegar o elemento do pipe=cano
    // vamos pegar a posicao do deslocamento esquerdo a traves de uma constante
    const pipePosition = pipe.offsetLeft;

    // se adicionarmos o sinal '+' antes da palavra windown vamos obter o numeros tambem
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    // chamei o elemento imagem tambem para poder para quando finalizar o jogo ou perder
    const cloudsPosition = clouds.offsetLeft;

    //agora vamos criar as condicoes
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        //vamos parar a animacao do css
        pipe.style.animation='none';
        //agora vamos dizer que a imagem vai ficar na onde encostou no mario vamos fazer uma chamada como se fosse um format do python apenas do valor da constante "pipeposition"
        pipe.style.left = `${pipePosition}px`;
        //agora vamos ter que chamar o elemento do mario de forma diferete para obter o valor do pulo, vamos chamar os elementos dentro da imagem e converter o valr str para numeor com replace
        
        // neste mesmo if vamos realizar a verificacao do pipe com a condiccao &&=e
    
        // vamos aplicar as mesmas regras da imagem pipe para o mario
        mario.style.animation='none';
        mario.style.bottom = `${marioPosition}px`;

        // como já temos o elemento imagem em cima já temos acesso ao arquivo da pasta, então por aqui mesmo podemos alterar a imagem do mario
        mario.src = './images/game-over.png';

        //por aqui mesmo já vamos alterar o tamanho da imagem para ficar proporcional as outras
        mario.style.width = '75px'
        // vamos tirar o espaco entre essa nova imagem e o cano com marginLeft
        mario.style.marginLeft = '40px'

        // definindo uma pausa para as nuvens também
        clouds.style.animation='none';
        clouds.style.left = `${cloudsPosition}px`;

        //para que o loog não continue apos perdermos precisamos finalisar a constante LOOP
        clearInterval(loop)
    }

},10)



// criado uma esculta de enventos, 
// ao precionarmos qualquer tecla com a funcao'keyboard' iremos chamar a clase 'jump' para o mario pular
document.addEventListener('keydown', jump);