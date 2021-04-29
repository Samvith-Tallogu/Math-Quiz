function addUser() {
    playerName1 = localStorage.getItem("player1_name");
    playerName2 = localStorage.getItem("player2_name");
    document.getElementById("player1_name").innerHTML = playerName1 + ": ";
    document.getElementById("player2_name").innerHTML = playerName2 + ": ";

    window.location = "game_page.html" ;
}
