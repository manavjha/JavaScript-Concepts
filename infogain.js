import "./styles.css";
import React, { useMemo } from "react";

 

export default function App() {
  const [count, setCount] = React.useState(0);
  
 

  const onIncrement = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const TestView = () => {
     alert('Rendering TestView Component');
     return <div>This is Test View</div>;
   };
  // const Memoisecompo = useMemo(() => TestView(),[])
  return (
<div className="App">
<h1>Counter App</h1>
<h4>Current Value: {count}</h4>
<button onClick={onIncrement}>Increment</button>
<h5>
<TestView />
</h5>
</div>
  );
}

 

////////////////////////////////////
import "./styles.css";
import { useEffect, useState } from "react";

const employees = [
  { id: 101, name: "Amit", salary: 30000 },
  { id: 102, name: "Ajay", salary: 35000 },
  { id: 103, name: "Rahul", salary: 40000 }
];
export default function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState(employees);
// const counter = 0

//couter++


  const handleChange = (e) => {
    setVal(e.target.value);
    filtereddata();
  };
  useEffect(() => {
    filtereddata();
  }, []);
  const filtereddata = () => {
    const filtered = [...employees];
    const filter = filtered.filter(val1 => val1 ===val);
    console.log(filter);
    setData(filter);
  };
  return (
    <div className="App">
      <input type="text" value={val} onChange={handleChange} />
      <p>{val}</p>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        {data.map(({ id, name, salary }) => {
          return (
            <li key={id}>
              {name} {salary}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
 