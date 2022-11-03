function createGame(player1, hour, player2) {
  return `
     <li>
        <img src="./src/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./src/icon-${player2}.svg" alt="Bandeira ${player2}">
      </li>
  `
}
let delay = -0.5;
function createCard(date, day, games){
  delay = delay + 0.5;
  return `<div class="card" style="animation-delay: ${delay}">
                <h2>${date} <span>${day}</span></h2> <!--alterando o valor dos cartoes de acordo com os parametros passados -->
                <ul>
                  ${games}
                </ul>
            </div>`
}

document.querySelector(".cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "13:00", "serbia") + //Criando os games
      createGame("brazil", "13:00", "serbia")
  ) + //Criando um catao pela funcao
  createCard(
    "28/11",
    "sexta",
    createGame("serbia", "18:00", "brazil") +
      createGame("serbia", "18:00", "brazil")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "13:00", "serbia") + //Criando os games
    createGame("brazil", "13:00", "serbia")
  )
