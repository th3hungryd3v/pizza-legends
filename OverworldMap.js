//
class OverworldMap {
  constructor(config) {
    // Array of Game Objects
    this.gameObjects = config.gameObjects;
    // Bottom Image
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    // Top Image
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }
}
