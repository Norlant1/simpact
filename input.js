export default class InputHandler {

  constructor(player){

  
 
  

  window.addEventListener("keydown",event=> {

    switch (event.key){

     
      
      case "d": 
      player.moveleft();
      break;

      case "a":
        player.moveright();
        break;

     

    }
   });
 
    
  
  
       window.addEventListener("keydown",event1=>{
        switch(event1.key){
          case "w":
            player.moveup();
            break;
    
            case "s":
              player.movedown();
              break;
             
        }
       });
  
  
       window.addEventListener("keyup",event2=> {
        switch(event2.key){
  
  
          case "d":
            if(player.jetspeedx === 3) {
              player.stopx();
            }
          
          break;
  
          case "a":
            if (player.jetspeedx === -3){
              player.stopx();
            }
            break;
  
       case "w":
             if(player.jetspeedy === -3){
                player.stopy();
              }
        case "s":
              if(player.jetspeedy === 3){
                player.stopy();
              }
        }
       });
  
     


    

  }

}