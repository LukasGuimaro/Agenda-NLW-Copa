function createGame(player1, hour, player2) {
  return `
     <li>
        <img src="./src/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./src/icon-${player2}.svg" alt="Bandeira ${player2}">
      </li>
  `
}

function createCard(date, day, games){
  return `<div class="card1">
                <h2>${date} <span>${day}</span></h2> <!--alterando o valor dos cartoes de acordo com os parametros passados -->
                <ul>
                  ${games}
                </ul>
            </div>`
}

document.querySelector(
  "#app"
).innerHTML = ` <!-- Definindo o conteudo de #app -->
        <header>
            <img src="./src/logo.svg" alt="Logo NLW Copa">
        </header>

        <main class="cards">
            ${createCard(
              "24/11",
              "quinta",
              createGame("brazil", "13:00", "serbia")
            )} <!-Criando um catao pela funcao-->
            ${createCard(
              "28/11",
              "sexta",
              createGame("serbia", "18:00", "brazil") +
              createGame("serbia", "18:00", "brazil")
            )}
        </main>
`