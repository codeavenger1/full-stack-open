import {useState} from "react"

// Destructuring
// const Hello = (props) => {

//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

// Destructuring
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

// Intro to React
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


// passing state - to child components
// const Display = (props) => {
//   return (
//     <div>
//       {props.counter}
//     </div>
//   ) 
// }

// can destruct the above Display component to:
const Display = ({counter}) => <div>{counter}</div>

// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//     {props.text}
//     </button>
//   )
// }

// can destruct the above Button component to:
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

// Stateful components
const App = () => {
  const [counter, setCounter] = useState(0)
  console.log("rendering with counter value", counter)

  // Event handling
  // const handleClick = () => {
  //   console.log("clicked")
  // }

  // setTimeout(() => setCounter(counter + 1), 1000)

  // separate functions:
  const increaseByOne = () => {
    console.log("increasing, value before", counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log("resetting to zero, value before", counter)
    setCounter(0)
  }

  // console.log("rendering ... " + counter)

  return (
    <div> 
    {/* {counter} */}

    {/* <button onClick={handleClick}>
      plus
    </button> */}

    {/* combine to one line: */}
    {/* <button onClick={() => setCounter(counter + 1)}>
      plus
    </button>
    <button onClick={() => setCounter(0)}>
      zero
    </button> */}

    {/* better to separate into functions: */}
    {/* <button onClick={increaseByOne}>
      plus
    </button>
    <button onClick={setToZero}>
      zero
    </button> */}

    {/* using the components: */}
    <Display counter={counter}/>
    <Button handleClick={increaseByOne} text="plus"/>
    <Button handleClick={setToZero} text="zero"/>
    <Button handleClick={decreaseByOne} text="minus"/>

    </div>
  )
}


// must stay at the bottom of the component
// without the export, the component and the whole app breaks down
export default App