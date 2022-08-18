import { player } from "/simpact/main.js";

export default class bullets {


  constructor(bullet,player,bullets){
   
  this.arrayofbullets = bullets;
  this.firing = false;
  this.hold = false;
  this.firstbullet = false;
 

    
     window.addEventListener("keydown",event=> {

    
      
  
      if(event.key === " " && this.firing === false && !player.destroyed){
       
       if(!this.firstbullet){
        this.arrayofbullets.push({fire:bullet, x:player.jetpos_x + (player.jetwidth), y: player.jetpos_y + (player.jetheight/2)});         
          this.firstbullet = true;
       }

        this.firing = true;
        this.hold = false;
      const test = setInterval(() => {
        if(this.hold === false && !player.destroyed){
           
          this.arrayofbullets.push({fire:bullet, x:player.jetpos_x + (player.jetwidth), y: player.jetpos_y + (player.jetheight/2)});         
        }
        else{
          clearInterval(test);
        }


      }, 250);
    }   
     
      
 
     });


     window.addEventListener("keyup",event=> {
     
         if(event.key === " "){
          this.hold = true;
          this.firing = false;
          this.firstbullet = false;
         }

     });


  
  }

 

}