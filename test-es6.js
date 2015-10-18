export default {
  run() {
    //simple example of let
    let message = "hi";
    {
      let message = "bye";
    }
    console.log(message);

    //another example of scoping
    var fs = [];

    //if this is 'for', i will be 10 every time.
    for(let i=0; i < 10; i++){
      fs.push(function(){
        console.log(i);
      })
    }

    fs.forEach(function (f) {
      f();
    });

    //example of arrow functions =>
    var createGreeting = function(message, name){
      return message + name;
    }

    var arrowGreeting = (message, name) => message + name;

    //handler with arrow functions
    // var deliveryBoy = {
    //   name: "John",

    //   handleMessage: function (message, handler){
    //     handler(message);
    //   },

    //   receive: function() {
    //     var that = this;

    //     this.handleMessage("Hello, ", function(message) {
    //       that.name;
    //       console.log(message + that.name);
    //     })
    //   }
    // }
    // deliveryBoy.receive();
    //-------- with arrows
    var deliveryBoy = {
      name: "John",

      handleMessage: function (message, handler){
        handler(message);
      },

      receive: function() {
        this.handleMessage("Hello, ", (message) => console.log(message + this.name))
      }
    }
    deliveryBoy.receive();

    // default values for function params
    function greet(greeting, name = "John"){
      console.log(greeting + ", " + name);
    } 

    greet("Hello");

    function receive(complete = () => console.log("complete")){
      complete();
    }
    receive();

    //destructuring
    // var obj = {
    //   color: "blue"
    // }
    // console.log(obj.color)

    let {color, position} = {
      color: "blue",
      name: "john",
      state: "new york",
      position: "forward"
    }
    console.log(color, position);
    //or
    function generateObj(){
      return{
        color: "blue",
        name: "john",
        state: "new york",
        position: "forward"
      }
    }
    var {name, state} = generateObj();
    console.log(name, state);

    var [first,,,,fifth] =["red", "yellow", "green", "blue", "orange"];
    console.log(first);
    console.log(fifth);

  //string templates
  var salutation = "Hello"; 
  var greeting = `${salutation}, World`;
  console.log(greeting);
  
  function* greet(){
    console.log(`You called 'next()'`);
  }

  let greeter = greet();
  console.log(greeter);
  let next = greeter.next();
  console.log(next);
  }
}