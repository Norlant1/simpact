


 export default class Jet{

  constructor(ctx,numberofsprites,ms,arrayofbullets,jet,explosion,health){
    
    this.health = health;
    this.arrayofhealths = [this.health,this.health,this.health];
    this.jet = jet;
    this.temp_jet = jet;
    this.numberofsprites = numberofsprites - 1;
    this.numberofsprites_temp = numberofsprites - 1;
    this.alive = true;
    this.ms = ms;
    this.ctx = ctx;
    this.bullets = arrayofbullets;
    this.jetwidth = 60;
    this.jetheight = 30; 
    this.jetpos_x = 10;
    this.jetpos_y = 100;
    this.jetspeedx = 0;
    this.jetspeedy = 0;
    this.bulletspeed = 10;
    this.explosion = explosion;
    this.destroyed = false;
    this.maxspeed = 3;

    
    this.counter = 0;

    setInterval(()=>{if (this.counter === this.numberofsprites){
      this.counter = 0;
    }
    else{
      this.counter += 1;
    }
    
      },this.ms);
        
  
  }


  moveleft(){
    this.jetspeedx = this.maxspeed;
  }

  moveright(){
    this.jetspeedx = -this.maxspeed;
  }

  moveup(){
    this.jetspeedy = -this.maxspeed;
  }

  movedown(){
    this.jetspeedy = this.maxspeed;
  }

  stopx(){
   this.jetspeedx = 0;
  }
  stopy(){
   this.jetspeedy = 0;
  }



  draw(){
    
   if(this.alive){
    this.arrayofhealths.forEach((health,index)=>{
      this.ctx.drawImage(health,10 +(index * health.width/2),10,15,15);
    });
    this.ctx.drawImage(this.jet[this.counter],this.jetpos_x,this.jetpos_y,this.jetwidth, this.jetheight);

   }
   
    
  }



  drawbullet(){
   
    this.bullets.forEach(bullet=> {

      this.ctx.drawImage(bullet.fire,bullet.x,bullet.y);
    });
  }

  update(arrayofenemies,arrayofbullets,anim){
   

    this.jetpos_x +=  this.jetspeedx;
    this.jetpos_y += this.jetspeedy;
    
    this.bullets.forEach(bullet => {

      bullet.x += 5;
    });

    
    

    if (this.jetpos_y < 0 && !this.destroyed) this.jetpos_y = 0;
    if (this.jetpos_y > 300 - this.jetheight && !this.destroyed) this.jetpos_y = 300 - this.jetheight;
    if (this.jetpos_x < 0 && !this.destroyed) this.jetpos_x = 0;
    if (this.jetpos_x > 500 - this.jetwidth && !this.destroyed) this.jetpos_x = 500 - this.jetwidth;

    
   
    this.bullets.forEach((bullet,index)=> {


      for(let i = 0; i < arrayofenemies.length; i++){
        
        if(bullet.x >= arrayofenemies[i].posx && bullet.x <= arrayofenemies[i].posx + arrayofenemies[i].size  && bullet.y >= arrayofenemies[i].posy && bullet.y <= arrayofenemies[i].posy + arrayofenemies[i].size){
          arrayofenemies[i].hp -= 1;
          arrayofbullets = arrayofbullets.splice(index,1);
          if(arrayofenemies[i].hp === 0){
            arrayofenemies = arrayofenemies.splice(i,1);
          }
      
        }
      }

    });

    arrayofenemies.forEach((enemy,index)=> {

    if(this.jetpos_x + this.jetwidth >= enemy.posx && this.jetpos_x  <= enemy.posx + enemy.size && this.jetpos_y + this.jetheight >= enemy.posy && this.jetpos_y  <= enemy.posy + enemy.size){
    

         

      if(!this.destroyed){
   
      this.destroyed = true;
      this.counter = 0;
      this.numberofsprites = this.explosion.length - 1;
      this.jet = this.explosion;
      this.jetwidth = 150;
      this.jetheight = 150;
      this.jetpos_x = this.jetpos_x - 50;
      this.jetpos_y = this.jetpos_y - 50;
      this.arrayofhealths.pop();
      this.maxspeed = 0;
      this.stopx();
      this.stopy();

      if(enemy.type === "spawn" && this.alive){
        arrayofenemies = arrayofenemies.splice(index,1);
      }
        
      }
   
    
      
    
    }
    });
 


    if(this.destroyed && this.counter === 9){
      if(this.arrayofhealths.length === 0){
        this.alive = false;
      }
      this.counter = 0;
      this.numberofsprites = this.numberofsprites_temp;
      this.jet = this.temp_jet;
      this.jetwidth = 60;
      this.jetheight = 30;
      this.jetpos_x = 10;
      this.jetpos_y = 150;
      this.destroyed = false;
      this.maxspeed = 3;
      

    }
   
  
}


 }
