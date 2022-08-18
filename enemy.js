import Jet from "/simpact/jet.js";


export default class enemy extends Jet {

  constructor(ctx,numberofsprites,ms,arrayofenemies){
    super(ctx,numberofsprites,ms);


    this.unitsize = 25;
    this.arrayofenemies = arrayofenemies;
   
  }

  addenemy(speedx,speedy,posx,posy,enemy_sprites,size){

    this.enemy_sprites = enemy_sprites;
    this.speedx = speedx;
    this.speedy = speedy;
    this.posx = posx;
    this.posy = posy;
    this.size = size;


    this.type = "spawn";
    if(size >= 200){
      this.type = "boss"
      this.hp = 150;

    }
    else{
      this.type = "spawn";
      this.hp = 3;
    }

    this.arrayofenemies.push({type:this.type,hp:this.hp,sprite:this.enemy_sprites,speedx:this.speedx,speedy:this.speedy,posx:this.posx,posy:this.posy,size:this.size});
    
    

  }


 draw(){

  this.arrayofenemies.forEach(enemy=> {

    
    this.ctx.drawImage(enemy.sprite[this.counter],enemy.posx,enemy.posy,enemy.size,enemy.size);

  });

   };

 update(){

  this.arrayofenemies.forEach(enemy=> {

   
    enemy.posx += enemy.speedx;
    enemy.posy += enemy.speedy;


    if(enemy.posy < 0) enemy.speedy = -(enemy.speedy);
    if(enemy.posy > 150) enemy.speedy = -enemy.speedy;

    if(enemy.type === "boss"){
      if(enemy.posx < 300){
        enemy.speedx = 0;
      }
    }


  });


 }

  
}