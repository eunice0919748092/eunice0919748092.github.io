var users = prompt("剪刀、石頭、布?");
var computer = Math.random();
if (computer<=0.33){
    computer="剪刀";
}
else if (computer<=0.66){
    computer="石頭";
}
else{
    computer="布";
}
alert("電腦出" + computer);
if (users==computer){
    alert("平手!");
}
else if(users == "剪刀"){
    if(computer == "石頭"){
        alert("電腦獲勝")
    }
    else{
        alert("玩家獲勝")
    }
}
    else if(users=="石頭"){
    if(computer=="布"){
        alert("電腦獲勝")
    }
    else{
        alert("玩家獲勝")
    }
    }
 else if(users=="布"){
    if(computer=="剪刀"){
        alert("電腦獲勝")
    }
    else{
        alert("玩家獲勝")
    }       
}