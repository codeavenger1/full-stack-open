import {useState} from "react"

// INTRO TO REACT
// const Footer = () => {
//   return (
//     <div>
//       Greeting app created by Shiva
//     </div>
//   )
// }

// const App = () => {
//   const name = "Shiva";
//   const age = 18;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Eshaan" age={20}/>
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }

// const App = () => {
//   return [
//     // empty elements are called fragments
//     // avoids extra "div" elements
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Shiva" age={18}/>
//       <Footer/>
//     </>
//   ]
// }

// const App = () => {
//   const friends = [
//     {name: "Shiva", age: 18},
//     {name: "Eshaan", age: 20}
//   ]
  
//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// const App = () => {
//   const now = new Date();
//   const a = 10;
//   const b = 20;
//   console.log(now, a+b);

//   return (
//     <div>
//       {/* JS code within the curly braces is evaluated and the rest of this evaluation is embedded into the defined place in the HTML produced by the component */}
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// DESTRUCTURING
// const Hello = ({name, age}) => {
//   // const name = props.name
//   // const age = props.age

//   // from that to this:
//   // const {name, age} = props
//   // to replacing the property above

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }


// PASSING STATE - TO CHILD COMPONENTS
// const Display = (props) => {
//   return (
//     <div>
//       {props.counter}
//     </div>
//   ) 
// }

// can destruct the above Display component to:
// const Display = ({counter}) => <div>{counter}</div>

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//     {props.text}
//     </button>
//   )
// }

// can destruct the above Button component to:
// const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

// Stateful components
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log("rendering with counter value", counter)

//   // EVENT HANDLING
//   // const handleClick = () => {
//   //   console.log("clicked")
//   // }

//   // setTimeout(() => setCounter(counter + 1), 1000)

//   // separate functions:
//   const increaseByOne = () => {
//     console.log("increasing, value before", counter)
//     setCounter(counter + 1)
//   }
//   const decreaseByOne = () => {
//     console.log("decreasing, value before", counter)
//     setCounter(counter - 1)
//   }
//   const setToZero = () => {
//     console.log("resetting to zero, value before", counter)
//     setCounter(0)
//   }

//   // console.log("rendering ... " + counter)

//   return (
//     <div> 
//     {/* {counter} */}

//     {/* <button onClick={handleClick}>
//       plus
//     </button> */}

//     {/* combine to one line: */}
//     {/* <button onClick={() => setCounter(counter + 1)}>
//       plus
//     </button>
//     <button onClick={() => setCounter(0)}>
//       zero
//     </button> */}

//     {/* better to separate into functions: */}
//     {/* <button onClick={increaseByOne}>
//       plus
//     </button>
//     <button onClick={setToZero}>
//       zero
//     </button> */}

//     {/* using the components: */}
//     <Display counter={counter}/>
//     <Button handleClick={increaseByOne} text="plus"/>
//     <Button handleClick={setToZero} text="zero"/>
//     <Button handleClick={decreaseByOne} text="minus"/>

//     </div>
//   )
// }

// COMPLEX STATE
// const App = () => {
//   // const [left, setLeft] = useState(0)
//   // const [right, setRight] = useState(0)

//   // combine left/right into a single object:
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = {
//       // {...clicks} creates a new object that has copies of all of the properties of the clicks object
//       // when we specify a particular property (ie: right in {...clicks, right: 1}, the value of the right prop in the new obj will be 1)
//       ...clicks,
//       left: clicks.left + 1
//       // right: clicks.right
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       // left: clicks.left,
//       ...clicks,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//   }

//   // return (
//   //   <div>
//   //     {left}
//   //     <button onClick={() => setLeft(left + 1)}>
//   //       left
//   //     </button>
//   //     <button onClick={() => setRight(right + 1)}>
//   //       right
//   //     </button>
//   //     {right}
//   //   </div>
//   // )

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
// }

// HANDLING ARRAYS
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   // every click is stored in a separate piece of state called allClicks that is initialized as an empty array:
//   const [allClicks, setAll] = useState([])

//   // when the left button is clicked, we add the letter L to the allClicks array
//   // adding the new item to the array is accomplished with the concat method
//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       {/* "join" joins all the items into a single string, separated by the string passed as the function parameter (an empty space in this case) */}
//       <p>{allClicks.join(" ")}</p>
//     </div>
//   )
// }

// CONDITIONAL RENDERING
// The behavior of the component depends on whether or not any buttons have been clicked
// const History = (props) => {
//   if (props.allClicks.length === 0){
//     return (
//       // if nothing has been pressed (aka allClicks array is empty), the component renders a div element with some instructions instead 
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     // in all other cases, the component renders the clicking history
//     <div>
//       button press history: {props.allClicks.join(" ")}
//     </div>
//   )
//   // the History component renders completely different React elements depending on the state of the application
//   // this is called conditional rendering
// }

// const Button = ({handleClick, text}) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>)

// // UPDATE OF THE STATE IS ASYNCHRONOUS
// // Let's expand the application so that it keeps track of the total number of button presses in the state "total", whose value updates when the buttons are pressed
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat("L"))
//     // using the updatedLeft variable, the number of button presses is definitely based on the correct number of left button presses
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat("R"))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       {/* <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button> */}
//       {/* refactoring the buttons to use the Button component */}
//       <Button handleClick={handleLeftClick} text="left"/>
//       <Button handleClick={handleRightClick} text="right"/>
//       {right}
//       <History allClicks={allClicks}/>
//       <p>total {total}</p>
//     </div>
//   )
// }

const Display = props => <div>{props.value}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>)

// A FUNCTION THAT RETURNS A FUNCTION
const App = () => {
  const [value, setValue] = useState(10)

  // const hello = () => {
  //   const handler = () => console.log("hello world")
  //   return handler
  // }

  // let's evolve the code:
  // const hello = (who) => {
  //   const handler = () => {
  //     console.log("hello", who)
  //   }
  //   return handler
  // }

  // let's condense the above code:
  // const hello = (who) => () => {
  //     console.log("hello", who)
  // }

  // to this:
  const setToValue = newValue => {
    console.log("value now", newValue) // print the new value to the console
    setValue(newValue)
  }

  return (
    <div>
      {/* {value} */}
      {/* the event handler is set to a function call */}
      {/* this works because when the component is rendered, the hello function gets executed */}
      {/* the return of the hello function is another function that is assigned to the handler variable: */}
      {/* <button onClick={hello()}>button</button> */}

      {/* the line above essentially gets transformed to: */}
      {/* <button onClick = {() => console.log("hello world")}> button </button */}
      

      {/* now the application has three buttons with event handlers defined by the hello function that accepts a param */}
      {/* <button onClick={hello("world")}>button</button>
      <button onClick={hello("react")}>button</button>
      <button onClick={hello("function")}>button</button> */}

      {/* <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button> */}

      <Display value ={value} />

      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />

    </div>
  )
}


// must stay at the bottom of the component
// without the export, the component and the whole app breaks down
export default App