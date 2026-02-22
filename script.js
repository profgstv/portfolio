/*
    Script para criação dinâmica dos cards de projetos, modais de detalhes, badges de tecnologias e badges de comunidades.
    Autor: Gustavo Dal Farra Miguel Jorge
    Data: 2025-10-09
*/
//Objetos, Arrays e Variáveis
const projectsList = {
    projectName: ["Recomendador de Digimons", "Bem vindos ao Egito", "Monalisa no P5.js", "Jogo da Nave no P5.js", "Sorteador de Palavras", "Jogo do Pong no P5.js", "Rádio Inovação CIEBP", "Simulador de Coordenadas", "Scratch Giratório no P5.js", "Digimon Card Battle", "Jogo do Pong no Scratch", "Salve o Planeta no Scratch", "Carrinho de Drift", "Carrinho de Eixo", "Tupã-cera", "Taça de Vinho com Micro:bit", "Ponteiros de LED com Micro:bit", "Shooters com Micro:bit", "Red Alert com GitHub Pages", "CatFlix", "CatFlix Plus"],
    src: ["./img/proj-p5-digimon.png", "./img/proj-p5-egito.png", "./img/proj-p5-monalisa.png", "./img/proj-p5-nave-desvio.png", "./img/proj-p5-palavra.png", "./img/proj-p5-pong.png", "./img/proj-p5-radio.png", "./img/proj-p5-sim-coord-controle-drift.png", "./img/proj-p5-spinning-scratch.png", "./img/proj-scratch-digimon-card-battle.png", "./img/proj-scratch-pong.png", "./img/proj-scratch-salve-o-planeta.png", "./img/proj-tinkercad-carrinho-drift.png", "./img/proj-tinkercad-carrinho-eixo.png", "./img/proj-github-ciebp-minimal.png", "./img/proj-makecode-wineglass.png", "./img/proj-makecode-radio-pointers.png", "./img/proj-makecode-radio-shooters.png", "./img/proj-github-red-alert.png", "./img/proj-github-catflix.png", "./img/proj-github-catflix-plus.png"],
    alt: ["Imagem do Recomendador de Digimon no P5.js.", "Imagem do Projeto Bem vindo ao Egito no P5.js.", "Imagem do Projeto da Mona Lisa no P5.js.", "Imagem do Jogo da Nave no P5.js.", "Imagem do Sorteador de Palavra no P5.js.", "Imagem do Jogo do Pong no P5.js.", "Imagem do Projeto Rádio Inovação CIEBP.", "Imagem do Simulador de Coordenadas para acelerômetro no P5.js.", "Imagem do Scratch Giratório no P5.js.", "Imagem Jogo Digimon Card Battle no Scratch.", "Imagem do Jogo do Pong no Scratch.", "Imagem do Jogo Salve o Planeta.", "Imagem do projeto do carrinho de Drift.", "Imagem do projeto do carrinho com eixo.", "Imagem do tema ciebp-minimal do Tupã-cera.", "Imagem do projeto da taça de vinho com Micro:bit.", "Imagem do projeto dos ponteiros de LED com Micro:bit.", "Imagem do projeto de Shooters de LED com Micro:bit", "Imagem do site Red Alert hospedado no GitHub Pages.", "Imagem do site CatFlix hospedado no GitHub Pages.", "Imagem do site CatFlix Plus hospedado no GitHub Pages."],
    modalID: ["modal001", "modal002", "modal003", "modal004", "modal005", "modal006", "modal007", "modal008", "modal009", "modal010", "modal011", "modal012", "modal013", "modal014", "modal015", "modal016", "modal017", "modal018", "modal019", "modal020", "modal021"],
    basicDescription: ["Interface criada para recomendar um Digimon com base nas escolhas do usuário.", "Projeto básico de introdução ao uso de imagens para storyboard com P5.js.", "Captura do movimento do mouse para sincronização com o movimento dos olhos.", "Movimentação usando as setas de direção lateral para desvio dos meteoros.", "A palavra é revelada acompanhando o movimento do mouse e é sorteada quando está toda escondida.", "Movimentação usando as setas de direção vertical para rebater a bolinha. Vence quem fizer 10 danos ao oponente primeiro.", "Animação com imagens do logotipo do CIEBP de fundo e um letreiro colorido.", "Visualização gráfica para a implementação de um simulador de coordenadas de acelerômetro no P5.js.", "Projeto interativo de demonstração da integração entre as plataformas P5.js e Scratch.", "Jogo feito no Scratch, inspirado no TCG Digimon e nos jogos do tipo Super Trunfo, versão digital.", "Versão do Jogo de Pong com movimentação vertical feito no Scratch.", "Jogo de clique, onde o plantio de árvores é o princípio para a restauração do planeta Terra.","Carrinho movido por meio de Drift com 4 motores DC.", "Carrinho feito com materiais não estruturados para utilização com eixo de servo motor e movimentação com motor DC.", "Console de Jogos Educativos e Projetos de Programação feito com Batocera Linux e tema ciebp-minimal.", "Taça de vinho com iluminação dos LEDs padrões do Micro:bit e sensor de acelerômetro.", "Ponteiros de LED controlados por Acelerômetro e Rádio Frequência com Micro:bit.", "Interação entre dois ou mais Micro:Bits em estilo de jogo de Shooters.", "Projeto de site Red Alert hospedado no GitHub Pages.", "Projeto de site CatFlix hospedado no GitHub Pages.", "Projeto de site CatFlix Plus hospedado no GitHub Pages."],
    description0: ["O projeto utiliza o P5.js para criar uma interface interativa que recomenda um Digimon com base nas escolhas e preferências do usuário.", "Utilizando o P5.js, é possível criar uma narrativa visual trabalhando princípios do storyboard por meio da programação com JavaScript.", "Com uma imagem de fundo da Mona Lisa, o projeto faz uma sátira implementando uma interatividade com o eixo horizontal do mouse para representar a ideia que o olho dela segue o observador.", "Um jogo de nave com a temática de Dragon Ball, contabilizando os desvios dos meteoros que caem em direção ao jogador e os recordes de mais desvios sem deixar ser acertado.", "Criando uma interação gráfica de um conjunto de palavras que começam com a letra 'C' com a posição do mouse na tela, o usuário pode descobrir qual a palavra sorteada expandindo o tamanho da palavra.", "Uma versão especial do clássico jogo do pong feita no P5.js com base em variáveis, condicionais e funções.", "Projeto voltado para a inclusão de imagens na tela do P5.js e a animação de um letreiro colorido.", "Para a melhor compreensão sobre o funcionamento e a programação de controle remoto analógico de carrinho com drift em placas Micro:Bit, o projeto utiliza a interface gráfica do P5.js para a compreensão dos campos aos quais a movimentação do controle alteram o funcionamento dos motores.", "Utilizando os sprites do Scratch e com o desafio de reproduzir uma programação básica nos blocos da plataforma utilizando a biblioteca em JavaScript do P5.js, o projeto recria o mascote com interação em relação ao ponteiro do mouse.", "Digimon Card Battle é originalmente um jogo clássico do PSX, reproduzido em um formato simplificado dentro do Scratch.", "Uma versão especial do clássico jogo do pong feita no Scratch com base em variáveis, condicionais e funções.", "Jogo voltado à conscientização ambiental utilizando os sprites contidos no Scratch.", "Carrinho motorizado movido por meio de Drift. Possui espaço para acoplagem da Shield Robotbit da Kittenbot para Micro:bit, Sensores de Linha com Infravermelho modelo Grove, Sensores Ultrassônicos v2.0 e Sensores RGB TCS3200.", "Carrinho de eixo, montado sobre uma base retangular de acrílico reutilizado, com rodas de tampinhas de leite brancas, motor DC para movimentação e um eixo central movido por um servo motor construído com um canudo plástico e um palito de bambu que permite a rotação.", "Projeto de console de jogos educativos e projetos de programação, feito com Batocera Linux, que é um sistema operacional de código aberto focado em emulação de jogos retrô. O console utiliza o tema ciebp-minimal, desenvolvido no CIEBP Ângelo Mendes, que oferece uma interface limpa e intuitiva para navegação entre os jogos e projetos.", "Projeto de taça de vinho com iluminação dos LEDs padrões do Micro:bit e sensor de acelerômetro para detectar o esvaziamento da taça ao virar.", "Projeto de ponteiros de LED controlados por Acelerômetro e Rádio Frequência com Micro:bit. O projeto utiliza dois Micro:bits, um como transmissor e outro como receptor, para controlar os ponteiros de LED com base na inclinação do transmissor.", "Projeto de interação entre dois ou mais Micro:Bits em estilo de jogo de Shooters, onde os jogadores podem atirar uns nos outros utilizando LEDs e sensores de movimento.", "Projeto de site Red Alert hospedado no GitHub Pages, para introdução ao ecossistema e aos conceitos básicos de desenvolvimento web, utilizando HTML e CSS.", "Protótipo de site CatFlix hospedado no GitHub Pages, que é uma plataforma de streaming fictícia dedicada a filmes e séries sobre gatos. O site é desenvolvido utilizando HTML, CSS e JavaScript, e apresenta uma interface amigável e visualmente atraente.", "Protótipo de site CatFlix Plus hospedado no GitHub Pages, que trabalha alguns fundamentos de responsividade e de linkagem com o CatFlix. O site é desenvolvido utilizando HTML, CSS e JavaScript."],
    description1: ["É possível ainda ver qual a digievolução na fase adulta do Digimon.", "Podem ser adicionados elementos como uma imagem de fundo, personagens, objetos e até mesmo balões de fala.", "Ao clicar a figura solta uma substância vermelha como um sangue, dando um ar creepy ao projeto.", "Quando um meteoro acerta o jogador aparece uma tela de Game Over com o registro da pontuação atual e do recorde, com a possibilidade de reiniciar o jogo apenas apertando uma tecla.", "Ao comprimir novamente a palavra para a letra 'C', o algoritmo sorteia novamente até que o usuário volte a revelar uma outra vez qual a palavra sorteada.", "O jogador enfrenta um nível intermediário de IA e precisa acertar 10 pontos para vencer o jogo.", "A estética dos banners digitais dos anos 90 e 2000 é reproduzida, contrastando 'Inovação' com tecnologias antigas.", "Num plano cartesiano, as posições do Micro:Bit são simuladas pelo ponteiro do mouse, dividindo em oito regiões que ativam os motores de formas diversificadas.", "O objetivo é demonstrar as potencialidades de ambas as plataformas, desafiando a aprendizagem por meio da leitura de documentações em diferentes linguagens e bibliotecas.", "Com referências aos projetos de Super Trunfo, foram implementados mecanismos de digievolução e um nível de dificuldade do intermediário para o difícil.", "Foi realizado como um desafio de reprodução do mesmo jogo em outras plataformas.", "Ao clicar nas árvores elas se multiplicam, mas o jogador precisa tomar cuidado para não deixar os problemas ambientais se alastrarem e destruirem o planeta Terra.", "Pode ser montado e desmontado de diversas formas, utilizando programações também diversas.", "Sobre a base podem ser utilizados diversos microcontroladores. Nesse projeto é utilizado o Micro:bit com a Shield Robotbit da Kittenbot e configurado um controle remoto com outro Micro:bit por rádio frequência e acelerômetro.", "O tema ciebp-minimal foi projetado para ser simples e eficiente, facilitando a navegação e a seleção de jogos. Ele apresenta um design minimalista, com foco na funcionalidade e na experiência do usuário, com a paleta de cores do CIEBP e jogos com temáticas ou abordagens criativas/educacionais.", "A iluminação dos LEDs na taça de vinho pode ser programada para responder a diferentes movimentos, criando efeitos visuais interessantes.", "O Micro:bit transmissor utiliza o sensor de acelerômetro para detectar a inclinação e envia os dados para o Micro:bit receptor via rádio frequência. O Micro:bit receptor então controla os ponteiros de LED com base nos dados recebidos, permitindo que os ponteiros se movam de acordo com a inclinação do transmissor.", "O jogo pode ser utilizado para ensinar conceitos básicos de programação, eletrônica e comunicação sem fio, além de promover a interação social entre os jogadores.", "O site Red Alert pode ser acessado através do link fornecido, e foi projetado para favorecer a aprendizagem do desenvolvimento web.", "O site CatFlix pode ser acessado através do link fornecido e foi desenvolvido como um projeto de aprendizado para praticar habilidades de desenvolvimento web.", "O site CatFlix Plus pode ser acessado através do link fornecido e foi desenvolvido como um projeto de referência para praticar habilidades básicas de desenvolvimento web."],
    description2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link0: ["https://editor.p5js.org/gustavodal/sketches/kz7fL2tDb", "https://editor.p5js.org/gustavodal/sketches/qTJDQoaKi", "https://editor.p5js.org/gustavodal/sketches/QXvpZovlZ", "https://editor.p5js.org/gustavodal/sketches/6RbxdTuLY", "https://editor.p5js.org/gustavodal/sketches/OSxJst87c", "https://editor.p5js.org/gustavodal/sketches/-HbSqY4om", "https://editor.p5js.org/gustavodal/sketches/08-tT-q5H", "https://editor.p5js.org/gustavodal/sketches/ZtqfcN_1j", "https://editor.p5js.org/gustavodal/sketches/NLQ8hj56q", "https://scratch.mit.edu/projects/1075392584/", "https://scratch.mit.edu/projects/1059549889/", "https://scratch.mit.edu/projects/1162238548/", "https://www.tinkercad.com/things/huxaQpIZsmd-robo-drift-shield-robotbit-microbit", "https://www.tinkercad.com/things/6tjgtFD3odC-carrinho-de-material-nao-estruturado-com-eixo","https://github.com/profgstv/ciebp-minimal", "https://makecode.microbit.org/S39116-67680-86141-77929", "https://makecode.microbit.org/S07919-41941-17286-44914", "https://makecode.microbit.org/S74200-62926-55799-70958", "https://profgstv.github.io/Red-Alert", "https://profgstv.github.io/CatFlix", "https://profgstv.github.io/CatFlix-Plus"],
    linkName0: ["Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no P5.js", "Projeto no Scratch", "Projeto no Scratch", "Projeto no Scratch","Protótipo no Tinkercad", "Protótipo no Tinkercad", "Repositório do tema ciebp-minimal no GitHub", "Projeto no MakeCode", "Projeto no MakeCode", "Projeto no MakeCode", "Página do site no GitHub Pages", "Página do site no GitHub Pages", "Página do site no GitHub Pages"],
    link1: [" ", " ", " ", " ", " ", " ", " ","https://editor.p5js.org/gustavodal/sketches/_vy5DUZ8o", "https://scratch.mit.edu/projects/1140165261/", " ", " ", " ","https://profgstv.github.io/microbit-carrinho-de-drift-com-controle-analgico/", "https://github.com/profgstv/microbit-carrinho-de-controle-analogico-com-eixo", " ", "https://profgstv.github.io/microbit-wine-glass", "https://profgstv.github.io/microbit-led-pointers", "https://profgstv.github.io/shooters", "https://github.com/profgstv/Red-Alert", "https://github.com/profgstv/CatFlix", "https://github.com/profgstv/CatFlix-Plus"],
    linkName1: [" ", " ", " ", " ", " ", " ", " ", " ","Projeto no Scratch", " ", " ", " ","Programação com Controle Remoto Analógico", "Programação com Controle por Acelerômetro", " ", "Página do Projeto no GitHub Pages", "Página do Projeto no GitHub Pages", "Página do Projeto no GitHub Pages", "Repositório do Projeto no GitHub", "Repositório do Projeto no GitHub", "Repositório do Projeto no GitHub"],
    link2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName2: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link3: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName3: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    link4: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    linkName4: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
}

const techsList = ["Linux", "JavaScript", "HTML", "CSS", "Scratch", "Micro:bit", "MakeCode", "Python"/*, "Arduino", "C++"*/];

const communitiesList = {
    "GitHub": "https://github.com/profgstv",
    "P5.js": "https://editor.p5js.org/gustavodal/sketches",
    "Scratch": "https://scratch.mit.edu/users/profgstv/",
    "Tinkercad": "https://www.tinkercad.com/users/fCvRHkvJnfc"
}

const jobsList = {
    "Secretaria da Educação - SEDUC/SP (2019-2025)": "https://www.educacao.sp.gov.br/",
    "Centro de Inovação da Educação Básica Paulista - CIEBP (2024 - 2025)": "https://centrodeinovacao.educacao.sp.gov.br/"
}

const randomizedProjects = arrayRandomizer(projectsList.projectName);
const randomizedJobs = arrayRandomizer(jobsList);
const randomizedTechs = arrayRandomizer(techsList);
const randomizedCommunities = arrayRandomizer(Object.keys(communitiesList));

const parentElement = document.body;
const referenceElement = document.getElementById("reference");


function createCard(a) {
    let i = projectsList.projectName.indexOf(randomizedProjects[a]);

    let cards = document.getElementById("projectsCards");
    let cardDiv0 = document.createElement("div");
    let cardDiv1 = document.createElement("div");
    let cardDiv2 = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardName = document.createElement("h5");
    let cardDescription = document.createElement("p");
    let cardButton = document.createElement("button");

    cards.appendChild(cardDiv0);

    cardDiv0.setAttribute("class", "col-md-4");
    cardDiv0.appendChild(cardDiv1);

    cardDiv1.setAttribute("class", "card");
    cardDiv1.setAttribute("style", "width: 18rem;");
    cardDiv1.appendChild(cardImg);
    cardDiv1.appendChild(cardDiv2);
    
    cardImg.setAttribute("src", projectsList.src[i]);
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("alt", projectsList.alt[i]);
    cardImg.setAttribute("data-bs-toggle", "modal");
    cardImg.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);

    cardDiv2.setAttribute("class", "card-body");
    cardDiv2.appendChild(cardName);
    cardDiv2.appendChild(cardDescription);
    cardDiv2.appendChild(cardButton);

    cardName.setAttribute("class", "card-title local-wine");
    cardName.innerHTML = projectsList.projectName[i];

    cardDescription.setAttribute("class", "card-text local-wine");
    cardDescription.innerHTML = projectsList.basicDescription[i];
    
    cardButton.setAttribute("type", "button");
    cardButton.setAttribute("class", "btn-link");
    cardButton.setAttribute("data-bs-toggle", "modal");
    cardButton.setAttribute("data-bs-target", "#" + projectsList.modalID[i]);
    cardButton.innerHTML = "Detalhes";
}

function createModal(a) {
    let i = projectsList.projectName.indexOf(randomizedProjects[a]);

    let modalDiv0 = document.createElement("div");
    let modalDiv1 = document.createElement("div");
    let modalDiv2 = document.createElement("div");
    let modalDiv3 = document.createElement("div");
    let modalDiv4 = document.createElement("div");
    let modalDiv5 = document.createElement("div");
    let modalName = document.createElement("h5");
    let modalCloseButton = document.createElement("button");
    let modalDescription0 = document.createElement("p");
    let modalDescription1 = document.createElement("p");
    let modalDescription2 = document.createElement("p");
    let modalImg = document.createElement("img");
    let modalLink0 = document.createElement("a");
    let modalLink1 = document.createElement("a");
    let modalLink2 = document.createElement("a");
    let modalLink3 = document.createElement("a");
    let modalLink4 = document.createElement("a");

    parentElement.insertBefore(modalDiv0, referenceElement);

    modalDiv0.setAttribute("class", "modal");
    modalDiv0.setAttribute("id", projectsList.modalID[i]);
    modalDiv0.setAttribute("tabindex", "-1");
    modalDiv0.appendChild(modalDiv1);

    modalDiv1.setAttribute("class", "modal-dialog");
    modalDiv1.appendChild(modalDiv2);
    
    modalDiv2.setAttribute("class", "modal-content");
    modalDiv2.appendChild(modalDiv3);

    modalDiv3.setAttribute("class", "modal-header");
    modalDiv3.appendChild(modalName);
    modalDiv3.appendChild(modalCloseButton);

    modalName.setAttribute("class", "modal-title");
    modalName.innerHTML = projectsList.projectName[i];

    modalCloseButton.setAttribute("type", "button");
    modalCloseButton.setAttribute("class", "btn-close");
    modalCloseButton.setAttribute("data-bs-dismiss", "modal");
    modalCloseButton.setAttribute("aria-label", "Close");
    modalDiv2.appendChild(modalDiv4);

    
    modalDiv4.setAttribute("class", "modal-body");
    modalDiv4.appendChild(modalDescription0);
    modalDescription0.innerHTML = projectsList.description0[i];
    if(projectsList.description1[i] != " ") {
        modalDiv4.appendChild(modalDescription1);
        modalDescription1.innerHTML = projectsList.description1[i];
    }
    if(projectsList.description2[i] != " ") {
        modalDiv4.appendChild(modalDescription2);
        modalDescription2.innerHTML = projectsList.description2[i];
    }
    modalDiv4.appendChild(modalImg);

    modalImg.setAttribute("src", projectsList.src[i]);
    modalImg.setAttribute("class", "img-fluid w-100");
    modalImg.setAttribute("alt", projectsList.alt[i]);

    modalDiv2.appendChild(modalDiv5);
    modalDiv5.setAttribute("class", "modal-footer");
    modalDiv5.appendChild(modalLink0);
    modalLink0.setAttribute("href", projectsList.link0[i]);
    modalLink0.innerHTML = projectsList.linkName0[i];
    if(projectsList.linkName1[i] !== " ") {
        modalDiv5.appendChild(modalLink1);
        modalLink1.setAttribute("href", projectsList.link1[i]);
        modalLink1.setAttribute("class", "left-link");
        modalLink1.innerHTML = projectsList.linkName1[i];
    }
    if(projectsList.linkName2[i] !== " ") {
        modalDiv5.appendChild(modalLink2);
        modalLink2.setAttribute("href", projectsList.link2[i]);
        modalLink2.setAttribute("class", "left-link");
        modalLink2.innerHTML = projectsList.linkName2[i];
    }
    if(projectsList.linkName3[i] !== " ") {
        modalDiv5.appendChild(modalLink3);
        modalLink3.setAttribute("href", projectsList.link3[i]);
        modalLink3.setAttribute("class", "left-link");
        modalLink3.innerHTML = projectsList.linkName3[i];
    }
    if(projectsList.linkName4[i] !== " ") {
        modalDiv5.appendChild(modalLink4);
        modalLink4.setAttribute("href", projectsList.link4[i]);
        modalLink4.setAttribute("class", "left-link");
        modalLink4.innerHTML = projectsList.linkName4[i];
    }

}

for(let i in projectsList.projectName) {;
    createCard(i);
    createModal(i);
}

for(let i in randomizedJobs) {
    let jobs = document.getElementById("previousJobs");
    let jobsButton = document.createElement("button");
    jobs.appendChild(jobsButton);
    jobsButton.setAttribute("class", "badge local-link");
    jobsButton.innerHTML = randomizedJobs[i];
}

for(let i in randomizedTechs) {
    let techs = document.getElementById("techBadges");
    let techButton = document.createElement("button");
    techs.appendChild(techButton);
    techButton.setAttribute("class", "badge local-link");
    techButton.innerHTML = randomizedTechs[i];
}

for(let i in randomizedCommunities) {
    let communityURL = communitiesList[randomizedCommunities[i]];
    let communities = document.getElementById("communitiesBadges");
    let communityLink = document.createElement("a");
    let communityButton = document.createElement("button");
    communities.appendChild(communityLink);
    communityLink.setAttribute("href", communityURL);
    communityLink.appendChild(communityButton);
    communityButton.setAttribute("class", "badge local-link");
    communityButton.innerHTML = randomizedCommunities[i];
}

function arrayRandomizer(arrayToRandomize) {
    let randArray = [];

    function getRandomElement(localArray) {
        return localArray[Math.floor(Math.random() * localArray.length)];
    }

    for(let i in arrayToRandomize) {
        let element = getRandomElement(arrayToRandomize);
        while(randArray.includes(element)) {
            element = getRandomElement(arrayToRandomize);
        }
        randArray.push(element);
    }
    return randArray
}