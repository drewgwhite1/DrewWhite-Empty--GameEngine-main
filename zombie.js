class Zombie {
    constructor(game){
         this.game = game;
        // //this.animator = new Animator(ASSET_MANAGER.getAsset("./zombie1.png"), 16, 645, 32, 59, 10, 0.25);
         this.animator = new Animator(ASSET_MANAGER.getAsset("./zombie1.png"), 16, 709, 32, 59, 9, 0.1);
        // //this.animations[1][1] = new Animator(this.spritesheet, 16, 773, 32, 59, 9, 0.1, false, true);

         this.x = 0;
         this.y = 0;
         this.speed = 100;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;

    };

    draw(ctx) {
       
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y)
        //ctx.drawImage(ASSET_MANAGER.getAsset("./zombie1.png"), 0, 0);
    
    };



}