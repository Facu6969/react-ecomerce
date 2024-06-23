import { useState } from 'react'

const useCount = (initial, min ,max) => {
    
    let [count , setCount] = useState(initial);

    const handLeRestar = () => {
        count > min && setCount ((prev) => prev - 1);
    }
    const handLeSumar = () => {
        count > max && setCount ((prev) => prev + 1);
    }
    const handLeReset = () => {
        setCount (initial);
    }

    
  return { count, handLeRestar, handLeSumar, handLeReset }
}

export default useCount
