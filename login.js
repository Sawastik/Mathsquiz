function addUser(){
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;
    localStorage.setItem("P1",player1_name);
    localStorage.setItem("P2",player2_name);
    window.location="Quiz.html";
}