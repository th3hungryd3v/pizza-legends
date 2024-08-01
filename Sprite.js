class Sprite {
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      // A flag to tell us the sprite is loaded
      this.isLoaded = true;
    };

    // Shadow
    this.shadow = new Image();
    this.useShadow = true; // config.useShadow || false
    if (this.useShadow) {
      this.shadow.src = "/images/characters/shadow.png";
    }
    // Hardcoded
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    // Configure Animation & Initial State
    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    // Capture the frame within the animation and show it
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // Reference Game Object
    this.gameObject = config.gameObject;
  }
  // Method to take in the context
  draw(ctx) {
    const x = this.gameObject.x * 16 - 8;
    const y = this.gameObject.y * 16 - 17;
    // Shadow must come before the image, since it is shown underneath the character
    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
    // If the image isLoaded, draw
    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y - 16, 32, 32);
  }
}
