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

  drawLowerImage(ctx) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(ctx) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 5,
        y: 6,
      }),
      npcA: new GameObject({
        x: 7,
        y: 9,
        src: "/images/characters/people/npc1.png",
      }),
      npcB: new GameObject({
        x: 6,
        y: 7,
        src: "/images/characters/people/npc2.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/images/maps/KitchenLower.png",
    upperSrc: "/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5,
      }),
      npcA: new GameObject({
        x: 9,
        y: 6,
        src: "/images/characters/people/npc1.png",
      }),
      npcB: new GameObject({
        x: 10,
        y: 8,
        src: "/images/characters/people/npc2.png",
      }),
    },
  },
};
