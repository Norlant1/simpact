import Jet from "/simpact/jet.js";
import InputHandler from "/simpact/input.js";
import bullets from "/simpact/bullet.js";
import background from "/simpact/gamebg.js";
import enemy from "/simpact/enemy.js";
import { loader,execute_respawn } from "/simpact/loader.js";









const maincanva = document.querySelector(".main_canvas");
const ctx = maincanva.getContext("2d");
const playbutton = document.querySelector(".button1");
const buttondiv = document.querySelector(".button_div");
const game_over = document.querySelector(".gameover");
const tryagain = document.querySelector("#tryagain");

let game_end = false;
let running = false;
let ui_anim;
let main_game;

playbutton.addEventListener("click",()=> {
  if(!running){
    running = true;   
    buttondiv.style.display = "none";
    gamestart();
  }

});

tryagain.addEventListener("click",()=> {
   
   cancelAnimationFrame(main_game);
});


let explosion_sprites = await loader(10,"Explosion","Explosion");
let jet_sprites = await loader(10,"jet","image");
export let enemy_sprites =  await loader(5,"enemy","enemy");
let bg_sprite = await loader(1,"background","bg");
let bullet_sprite = await loader(1,"bullet","image1");
export let boss_sprites = await loader(5,"boss","boss");
let heart_sprites = await loader(1,"heart","heart1");



// loaded sprites 





    
//array of objects

let arrayofbullets = [];
let arrayofenemies = [];



export let player = new Jet(ctx,4,80,arrayofbullets,jet_sprites,explosion_sprites,heart_sprites);
export let Enemy = new enemy(ctx,5,100,arrayofenemies);
let bg = new background(ctx,bg_sprite);
new bullets(bullet_sprite,player,arrayofbullets);
new InputHandler(player);








function ui_animation() {

  if(player.arrayofhealths.length === 0 && !game_end){

   setTimeout(()=>{game_end = true;
    game_over.style.display = "flex";},1000);
    
  }
  bg.draw();
  bg.update();
  

 ui_anim = requestAnimationFrame(ui_animation);
}

ui_animation();






function gamestart() {
  
  
 function start(){
  Enemy.draw();
  Enemy.update();
  player.draw();
  player.drawbullet();
  player.update(arrayofenemies,arrayofbullets);
  main_game =  requestAnimationFrame(start);
 }


  requestAnimationFrame(start);
  execute_respawn();

 
  
 
}






