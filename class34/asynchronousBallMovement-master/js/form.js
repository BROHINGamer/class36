class Form{
    constructor(){
        this.input=createInput("Name")
         this.button=createButton("PLAY")
         this.greeting=createElement("h3")
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }
    display(){
     var title=createElement("h2")
     title.html("Car Racing Game")
     title.position(350,100);
     
     this.input.position(350,300)
    
     this.button.position(350,350);
     
     this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
          player.name=this.input.value();
         playerCount=playerCount+1
         player.index=playerCount
         player.update()
         player.updateCount(playerCount);
         this.greeting.html("Hello "+player.name )
         this.greeting.position(400,300)
     })
    }
}