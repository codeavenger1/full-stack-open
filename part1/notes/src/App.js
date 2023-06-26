const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by Shiva
    </div>
  )
}

// const App = () => {
//   const name = "Shiva";
//   const age = 18;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Eshaan" age={20}/>
//       <Hello name={name} age={age}/>
//       <Footer/>
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

const App = () => {
  const friends = [
    {name: "Shiva", age: 18},
    {name: "Eshaan", age: 20}
  ]
  
  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

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

// must stay at the bottom of the component
// without the export, the component and the whole app breaks down
export default App