p1_name = localStorage.getItem("Player 1 Name")
p2_name = localStorage.getItem("Player 2 Name")
p1_score = 0
p2_score = 0
document.getElementById("p1_score").innerHTML = p1_score
document.getElementById("p2_score").innerHTML = p2_score
document.getElementById("p1_name").innerHTML = p1_name + " : "
document.getElementById("p2_name").innerHTML = p2_name + " : "
aturn = "player2"
qturn = "player1"
document.getElementById("QTurn").innerHTML = "Question Turn : " + p1_name
document.getElementById("ATurn").innerHTML = "Answer Turn : " +p2_name
function SendNumber() {
    n1 = document.getElementById("numberinput1").value 
    n2= document.getElementById("numberinput2").value
    
    correctanswer = n1 - n2

    
    qtag = `<h4 id="number_display">Q. ${n1}-${n2} </h4>`
    atag = `<br> Answer <input id="ansinput">`
    btntag = `<br><br><button class="btn btn-warning" onclick=Check()>Check</button>`


    document.getElementById("output").innerHTML = qtag + atag + btntag

document.getElementById("numberinput1").value = ""
document.getElementById("numberinput2").value = ""

}
function Check() {
    get_ans = document.getElementById("ansinput").value
    if (get_ans == correctanswer) {
        if (aturn == "player1") {
            p1_score = p1_score + 1
            document.getElementById("p1_score").innerHTML = p1_score
        }
        else {
p2_score = p2_score + 1
document.getElementById("p2_score").innerHTML = p2_score
        }
    }
    if (qturn == "player1") {
        qturn = "player2"
        document.getElementById("QTurn").innerHTML = "Question Turn : " + p2_name
    }
    else {
        qturn = "player1"
        document.getElementById("QTurn").innerHTML = "Question Turn : " + p1_name
    }
    if (aturn == "player1") {
        aturn = "player2"
        document.getElementById("ATurn").innerHTML = "Answer Turn : " +p2_name
    } else {
        aturn = "player1"
        document.getElementById("ATurn").innerHTML = "Answer Turn : " +p1_name
    } 
    document.getElementById("output").innerHTML = ""}