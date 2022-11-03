function createGame(player1, hour, player2) {
  return `
     <li>
        <img src="./src/icon=${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./src/icon=${player2}.svg" alt="Bandeira ${player2}">
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
    "20/11",
    "domingo",
    createGame("qatar", "A | 12:00", "ecuador") //Criando os games
  ) + //Criando um catao pela funcao
  createCard(
    "21/11",
    "segunda",
    createGame("england", "B | 09:00", "iran") +
      createGame("senegal", "A | 12:00", "netherlands") +
      createGame("united states", "B | 15:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "C | 06:00", "saudi arabia") + //Criando os games
      createGame("denmark", "D | 09:00", "tunisia") +
      createGame("mexico", "C | 12:00", "poland") +
      createGame("france", "D | 15:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "F | 06:00", "croatia") +
      createGame("germany", "E | 09:00", "japan") +
      createGame("spain", "E | 12:00", "costa rica") +
      createGame("belgium", "F | 15:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "G | 06:00", "cameroon") +
      createGame("uruguay", "H | 09:00", "south korea") +
      createGame("portugal", "H | 12:00", "ghana") +
      createGame("brazil", "G | 15:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "B | 06:00", "iran") +
      createGame("qatar", "A | 09:00", "senegal") +
      createGame("netherlands", "A | 12:00", "ecuador") +
      createGame("england", "B | 15:00", "united states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "D | 06:00", "australia") +
      createGame("poland", "C | 09:00", "saudi arabia") +
      createGame("france", "D | 12:00", "denmark") +
      createGame("argentina", "C | 15:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "E | 06:00", "costa rica") +
      createGame("belgium", "F | 09:00", "morocco") +
      createGame("croatia", "F | 12:00", "canada") +
      createGame("spain", "E | 15:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "G | 06:00", "serbia") +
      createGame("south korea", "H | 09:00", "ghana") +
      createGame("brazil", "G | 12:00", "switzerland") +
      createGame("portugal", "H | 15:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "A | 11:00", "senegal") +
      createGame("netherlands", "A | 11:00", "qatar") +
      createGame("iran", "B | 15:00", "united states") +
      createGame("wales", "B | 15:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "D | 11:00", "france") +
      createGame("australia", "D | 11:00", "denmark") +
      createGame("poland", "C | 15:00", "argentina") +
      createGame("saudi arabia", "C | 15:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "F | 11:00", "belgium") +
      createGame("canada", "F | 11:00", "morocco") +
      createGame("japan", "E | 15:00", "spain") +
      createGame("costa rica", "E | 15:00", "germany")
  ) 
