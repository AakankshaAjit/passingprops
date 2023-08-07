import React, { useState } from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Home from './Screens/Home'


const Routing = () => {

    const [count,setcount] = useState(0)


const inc = ()=>setcount(count+1)
const dec = ()=>{
    if(count <=0){
        setcount(0)
    }
    else{

        setcount(count-1)
    }


}

  return (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path='/' element={<Home inc={inc} dec={dec} count={count}/>}/>
                
            </Route>
        </Routes>
    
    
    </BrowserRouter>
  )
}

export default Routing