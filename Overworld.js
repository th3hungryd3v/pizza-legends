//
class Overworld {
  constructor(config) {
    this.element = config.element; // Pass in an element for the overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // Grab the canvas tag and save it to this.canvas
    this.ctx = this.canvas.getContext("2d"); // Attach a reference to ctx, and give it access to 2d canvas drawing tools
  }

  init() {
    console.log("Hello from the Overworld", this)
  }
}
