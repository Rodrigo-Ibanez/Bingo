// Definindo o número máximo de bolas
const MAX_BALLS = 10;

// Criando uma lista de números das bolas
let balls = [];
for (let i = 1; i <= MAX_BALLS; i++) {
  balls.push(i);
}


// Função para sortear uma bola aleatória
function pickRandomBall() {
  const randomIndex = Math.floor(Math.random() * balls.length);
  const pickedBall = balls[randomIndex];
  balls.splice(randomIndex, 1);
  return pickedBall;
}

// Função para atualizar a tabela de bolas com uma imagem
function updateBingoTableWithImage(ballNumber, pickedBall) {
  const tableBody = document.querySelector("#bingo-table tbody");
  const newRow = document.createElement("tr");
  const ballNumberCell = document.createElement("td");
  ballNumberCell.textContent = ballNumber;
  const pickedBallCell = document.createElement("td");
  pickedBallCell.textContent = pickedBall;
  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = `imagens/bola-${pickedBall}.jpg`; // supondo que as imagens estejam em uma pasta chamada "imagens" e tenham nomes como "bola-1.jpg", "bola-2.jpg", etc.
  image.width = 50; // ajuste o tamanho da imagem de acordo com a sua preferência
  image.height = 50;
  imageCell.appendChild(image);
  newRow.appendChild(ballNumberCell);
  newRow.appendChild(pickedBallCell);
  newRow.appendChild(imageCell);
  tableBody.appendChild(newRow);
}

// Adicionando um listener ao botão para sortear uma bola
const sortearButton = document.querySelector("#sortear-button");
sortearButton.addEventListener("click", () => {
  const ballNumber = document.querySelectorAll("#bingo-table tbody tr").length + 1;
  const pickedBall = pickRandomBall();
  if (pickedBall === null) {
    alert("Todas as bolas já foram sorteadas!");
    return;
  }
  updateBingoTableWithImage(ballNumber, pickedBall);
});

function reiniciarSorteio() {
  // redefinir as variáveis usadas no sorteio
  balls = [];
  for (let i = 1; i <= MAX_BALLS; i++) {
    balls.push(i);
  }

  // limpar a tabela que mostra as bolas sorteadas
  const tableBody = document.querySelector("#bingo-table tbody");
  tableBody.innerHTML = "";

  // limpar a div que contém as bolas sorteadas
  const divBolasSorteadas = document.getElementById("bolas-sorteadas");
  divBolasSorteadas.innerHTML = "";
}



const reiniciarButton = document.querySelector("#botao-reiniciar");
reiniciarButton.addEventListener("click", () => {
  reiniciarSorteio();
});
