//
class Overworld {
  constructor(config) {
    this.element = config.element; // Pass in an element for the overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // Grab the canvas tag and save it to this.canvas
    this.ctx = this.canvas.getContext("2d"); // Attach a reference to ctx, and give it access to 2d canvas drawing tools
    this.map = null;
  }

  // Game Loop
  startGameLoop() {
    const step = () => {
      // Clean up old drawings
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // Draw Lower Layer
      this.map.drawLowerImage(this.ctx);

      // Draw Game Objects
      Object.values(this.map.gameObjects).forEach((object) => {
        // Everytime this runs, move the character to the right
        object.x += 0.02;
        object.sprite.draw(this.ctx);
      });

      // Draw Upper Layer
      this.map.drawUpperImage(this.ctx);
      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Kitchen);
    this.startGameLoop();
  }
}
