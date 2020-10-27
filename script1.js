(function (window) {
  let sayHello = new Object();
  let testWord = "Hello";
  sayHello.speak = function (name) {
    console.log(testWord + " " + name);
  };
  window.sayHello = sayHello;
})(window);
