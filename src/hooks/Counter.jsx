import React, {useState} from 'react'
import './styles.css'

const Counter = () => {
    const [count, setcount] = useState(0);

    const handleCount =(e) => {
        if(e.target.innerHTML === 'Increase'){
            setcount(count+1);
        }else if(e.target.innerHTML === 'Decrease'){
            setcount(count-1);
        }else{
            setcount(0);
        }
    }
  return (
    <>
    <div className="container text-center ">
        <h1 className= {`display-1 ${count > 0 ? 'text-success' : 'text-danger'} ${count == 0 && 'yellow'} `}>{count}</h1>
        <button onClick={handleCount}  className="btn btn-danger mx-4">Decrease</button>
        <button onClick={handleCount}  className="btn btn-outline-warning mx-4">Reset</button>
        <button onClick={handleCount}  className="btn btn-success mx-4">Increase</button>
        
    </div>
    </>
    
  )
}

export default Counter