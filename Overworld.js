//
class Overworld {
  constructor(config) {
    this.element = config.element; // Pass in an element for the overworld to operate on
    this.canvas = this.element.querySelector(".game-canvas"); // Grab the canvas tag and save it to this.canvas
    this.ctx = this.canvas.getContext("2d"); // Attach a reference to ctx, and give it access to 2d canvas drawing tools
  }

  init() {
    // console.log("Hello from the Overworld", this)
    const image = new Image();
    image.onload = () => {
      // (Where to draw pixels from, x coordiante, y coordinate)
      this.ctx.drawImage(image, 0, 0); //
    };
    image.src = "/images/maps/DemoLower.png";

    // Place some Game Objects
    const hero = new GameObject({
      x: 5,
      y: 6,
    });
    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: "images/characters/people/npc1.png",
    });
    // Make sure the Image is loaded then draw sprites to the canvas
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
    }, 200);
  }
}
