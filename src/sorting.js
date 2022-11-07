export default function sortingPlayers(playersList) {
  return playersList.sort((a, b) => b.health - a.health);
}