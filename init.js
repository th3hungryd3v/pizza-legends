// Write a function that executes itself
(function () {
  // console.log("It's working!")
  // Create a new instance
  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });
  // Call the function available to the instance
  overworld.init();
})();
