(function () {
  names = ["Nancy", "Dona", "Jane", "Jacob", "Alice", "jennifer", "Robert"];
  for (let i = 0; i < names.length; i++) {
    let char = names[i].charAt(0).toLowerCase();

    if (char === "j" || char === "J") {
      sayGoodbye.speak(names[i]);
    } else {
      sayHello.speak(names[i]);
    }
  }
})();

//Alternative ways
// testBoth.sayBoth();
