import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(new Date().toLocaleTimeString())
  
  // console.log(count);
  

  setInterval(() => {
    setCount(new Date().toLocaleTimeString())
  }, 1000);

  return (
    <div >
      <h1 id="time">
        {count}
      </h1>
    </div>
  )

}

export default App
