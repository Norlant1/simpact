export default class Background {

  constructor(ctx,bg){
    this.ctx = ctx;
    this.bg = bg;
    this.bgs = {background:this.bg, x:0,y:0};
    this.bgarray = [this.bgs,this.bgs];
    this.bgwidth = this.bg.width;
    this.maxbg = 2;
    this.screenspeed = -1;
    this.counter = 0;
  }
    

  draw(){

  
    
    this.bgarray.forEach((item,index) => {
 
        this.ctx.drawImage(item.background, this.counter +index * this.bgwidth,item.y);    
  
    }); 


    
  }

  update(){
      
    this.bgarray.forEach(()=> {
  
      this.counter += this.screenspeed;
        

     });

     
    if(this.counter === -700) this.counter = 0;
  
    }
    
}