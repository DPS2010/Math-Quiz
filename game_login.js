function login() {
    var player1 = document.getElementById("player1_name").value 
    var player2 = document.getElementById("player2_name").value

localStorage.setItem("Player 1 Name", player1)
localStorage.setItem("Player 2 Name", player2)

window.location = "game_page.html"
}