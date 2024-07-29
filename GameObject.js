class GameObject {
  constructor(config) {
    // Position
    this.x = config.x || 0;
    this.y = config.y || 0;
    // Appearance
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "/images/characters/people/hero.png",
    });
  }
}
