player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

update_player1_score = 0;
update_player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;


    

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " x " + number2 +"</h4>";
    input_box = "<br> Answer: <input type = 'text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='Check()'>Check</button><br><br> ";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function Check(){
    question_turn = "player1";
    answer_turn = "player2";
        
    console.log("function Check invoked");
    console.log("actual_answer: " + actual_answer);
    console.log("player1_name: " + player1_name);
    console.log("player2_name: " + player2_name);
    get_answer = document.getElementById("input_check_box").value;

    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").value = update_player1_score;
        }
    else{
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").value = update_player2_score;
        }
    }
    console.log("player_score check");
    console.log("update_player1_score: " + update_player1_score);
    console.log("update_player2_score: " + update_player2_score);
    console.log("question_turn: " + question_turn);
    console.log("answer_turn: " + answer_turn);
    console.log("actual_answer: " + actual_answer);
    
    if(question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn: " + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player1_name; 
    }
    else{
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").value = "Question turn: " + player1_name;
        document.getElementById("player_answer").value = "Answer turn: " + player2_name; 
    }
    console.log("player_name check");
    console.log("update_player1_score: " + update_player1_score);
    console.log("update_player2_score: " + update_player2_score);
    console.log("question_turn: " + question_turn);
    console.log("answer_turn: " + answer_turn);
    console.log("actual_answer: " + actual_answer);
}