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

    // Hero coordinates
    const x = 5; // x coordinates
    const y = 6; // y coordinates

    // Main Hero Character
    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        // drawImage() needs 3, 5, or 9 parameters to work
        hero, // where to cut/draw pixels from
        0, // Left cut
        0, // Top cut
        32, // Width of cut
        32, // Height of cut
        // These parameters will be the placement of what we cut
        x * 16 - 8, // Multiply by 16 and subtract by 8 to compensate for the grid (16x16)
        y * 16 - 17, // Same as above (subtract by 7)
        // These parameters provide the size of which the character should be drawn
        32, // Width to draw image
        32 // Height to draw image
      );
    };
    hero.src = "/images/characters/people/hero.png";

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(shadow, 0, 0, 32, 32, x * 16 - 8, y * 16 - 17, 32, 32);
    };
    shadow.src = "/images/characters/shadow.png";
  }
}
