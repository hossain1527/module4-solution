(function (window) {
  let sayGoodbye = new Object();
  let testWord = "Goodbye";
  sayGoodbye.speak = function speak(name) {
    console.log(testWord + " J" + name);
  };
  window.sayGoodbye = sayGoodbye;
})(window);

// Alternative ways
// let testBoth = {};

// testBoth.names = ["Nancy","Dona","Jane","Jacob","Alice","jennifer","Robert"];

// testBoth.sayBoth = function  () {

//     let output = testBoth.names.map(name => {
//         if (name[0] == 'j' || name[0] == 'J') {
//             console.log("GoodBye "+"J"+name)
//         }else {
//             console.log("Hello "+name)
//         }

//     })

// }
