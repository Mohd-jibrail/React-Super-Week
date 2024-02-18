import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count,setCount] = useState(0);
  const [newCount,setNewCount]= useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCount = event.target.value;

      if(!/^\d+$/.test(newCount)){
        alert('Please enter the decimal value')
      }else{
        event.target.value = "";
        setCount(parseInt(newCount));
        setNewCount(false)
      }
    }
  }; 

  return (
    <div className="App">
      
        <h1>Workout Time</h1>
        <h2>{count || <h3>Let's count the reps</h3>}</h2>
        { newCount &&
                      <input className='form-control form-control-sm'
                      type="text"
                      placeholder="Set the count"
                      onKeyDown={handleKeyDown}
                   />
        }
        <br></br>
        <div className='App-buttons'>
          <button type="button" class="btn btn-primary" onClick={() => setCount((count) => count + 1)}>Up</button>
          <button type="button" class="btn btn-secondary" onClick={()=>setCount((count)=> count-1)}>Down</button>
          <button type="button" class="btn btn-danger" onClick={()=>setCount((count)=> 0)}>Reset</button>
          <button type="button" class="btn btn-success" onClick={()=>setNewCount((newCount)=> true)}>Set</button>
        </div>
    </div>
  );
}

export default App;
