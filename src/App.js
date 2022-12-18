import { useState } from 'react';


function App() {
  const [calc, setcalc] = useState("");
  // const [result, setresult] = useState("");

  const operator = ["/", "*", "-", "+"];

  // const forminus = e=>{
  //  if(e.target.innerText === "-"){
  //   setcalc('-');
    
  //  }
  //  console.log(calc);
  // }
  // console.log(forminus());

  const updatecalc = (value) => {
    // if (operator.includes("-") && calc === '' ||
    //   operator.includes("-") && operator.includes(calc.slice(-1))
    // ){
    //   forminus();
    // }
    if (operator.includes(value) && calc === '' ||
      operator.includes(value) && operator.includes(calc.slice(-1))
    ) {
     
      return;
    }
    setcalc(calc + value);

    // if(!operator.includes(value)){
    //   setresult(eval(calc + value).toString());
    // }
  }

  const createdigit = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updatecalc(i.toString())}
          key={i}>{i}</button>
          
      )
    }
    return digits;
  }

  const calculate = () => {
    setcalc(eval(calc).toString());
  }

  const deletelast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setcalc(value);
  }

  const clearResult = () => {
    if (calc == '') {
      return;
    }
    setcalc('');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || "0"}
        </div>

        <div className="operators">
          {
            operator.map((ops) => {
              return <button onClick={() => updatecalc(ops)}>{ops}</button>
            })
          }
          {/* <button onClick={()=> updatecalc("/")}>/</button>
          <button onClick={()=> updatecalc("*")}>*</button>
          <button onClick={()=> updatecalc("-")}>-</button>
          <button onClick={()=> updatecalc("+")}>+</button> */}

          <button onClick={() => deletelast()}>DEL</button>
          <button onClick={() => clearResult()}>CLR</button>
        </div>

        <dev className="digits">
          {createdigit()}
          <button onClick={() => updatecalc(".")}>.</button>
          <button onClick={() => updatecalc("0")}>0</button>

          <button onClick={() => calculate()}>=</button>
        </dev>
      </div>

    </div>
  );
}

export default App;
