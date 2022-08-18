import {Enemy,enemy_sprites,boss_sprites,player} from "/simpact/main.js"




export function loader(numberofsprites,spritename,image_name) {
 
  if(numberofsprites > 1){
 
   let animation = [];
   for(let i = 0; i < numberofsprites; i++ ){
     animation.push((`/simpact/assets/${spritename}/${image_name}${i+1}.png`));
   }
 
 
   return new Promise(resolve=> {
     let test2 =[];
    for(let i = 0 ; i < animation.length; i++ ){
     let image = new Image();
     image.onload = (()=>{test2.push(image)});
     image.src = animation[i];
    }
 
    resolve(test2);
   })
  }
 
 
  else{
    let single_ref = `/simpact/assets/${spritename}/${image_name}.png`;
 
   return new Promise(resolve=> {
     let image = new Image();
     image.onload = (()=> { 
      resolve(image)}); 
     image.src = single_ref;
   });
  }
   
 }  








 // spawner

 
const spawnsize = 25;
const bosssize = 200; 

 function spawner(enemy,speedx,speedy,posx,posy,interval,spawn_sprites,size){
  return new Promise((resolve,reject)=> {
    
    if(player.arrayofhealths.length > 0){
      setTimeout(()=>{resolve(enemy.addenemy(speedx,speedy,posx,posy,spawn_sprites,size))},interval);
    }
    else{
     
        reject();
      
      
    }
  });

}

export async function execute_respawn(){ 
 
try {
    
  await spawner(Enemy,-1,0,420,20,2000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,20,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,20,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,250,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,250,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,250,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,150,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,150,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,150,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,200,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,200,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0,420,200,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,2,420,20,2000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,2,420,20,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,2,420,20,1000,enemy_sprites,spawnsize);
  await spawner(Enemy,-1,0.2,420,20,3000,boss_sprites,bosssize);
}

catch(error){
  
}

  
}
 