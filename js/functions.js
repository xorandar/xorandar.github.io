function findIMG(id){
    return "img/" + id + ".png";
}

function changeState(id){ //change gamestate depending on button pressed
    switch(id){
        case "TLButton":
            for(var s in State){//check all states within State
                if(gameState == State[s].state){//if gameState finds match
                    gameState = State[s].tl; //change to state specified
                    break;
                } 
            }
        break;
        case "TRButton":
            for(var s in State){
                if(gameState == State[s].state){
                    gameState = State[s].tr;
                    break;
                }
            }
        break;
        case "BLButton":
            for(var s in State){
                if(gameState == State[s].state){
                    gameState = State[s].bl;
                    break;
                }
            }
        break;
        case "BRButton":
            for(var s in State){
                if(gameState == State[s].state){ 
                    gameState = State[s].br;
                    break;
                }
            }
        break;
    }
    player.setOrigin()
    player.inventory.addItem({id:"sword",dmg:20})
    console.log(player.inventory.items[0])
}

function changeGUIText(){ //changes text according to gamestate
    for(var s in dialogue){ //label should have a matching state
        if(gameState == dialogue[s].label){
            screenTitle.innerHTML = dialogue[s].t;
            gameDialogue.innerHTML = dialogue[s].m;
            TLButton.innerHTML = dialogue[s].tl;
            TRButton.innerHTML = dialogue[s].tr;
            BLButton.innerHTML = dialogue[s].bl;
            BRButton.innerHTML = dialogue[s].br;
            canvasColor = dialogue[s].col;
        }
    }
}

function handleButton(id){//btn press changes state and text of screen
    changeState(id);
    changeGUIText();
}

function handleArrowButtons(id){
    if(gameState == "inv"){
        if(id == "prevButton")gameDialogue.innerHTML = player.inventory.items[0].dmg;
        if(id == "nextButton")gameDialogue.innerHTML = Items[0].id;
    }
}