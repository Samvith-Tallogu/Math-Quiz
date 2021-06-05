function addUsers() {
    player1_name = document.getElementById('player1_name').value;
    player2_name = document.getElementById('player2_name').value;

    p1 = document.getElementById("player1_name").value;
    console.log("p1: " + p1);

    localStorage.setItem("player1_name", "user1");
    localStorage.setItem("player2_name", "user2");

    console.log(player1_name + " " + player2_name);

    window.location = "game_page.html" ;
}
