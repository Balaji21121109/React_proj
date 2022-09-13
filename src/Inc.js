import React, { useState } from 'react'


const Inc=()=>{

    const [num, setNum] = useState(0)


    function incNum(){
        setNum(num+1)

    }
    function decNum(){
   setNum(num-1)
    }
 return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={incNum}> Incremnet</button>
                <button onClick={decNum}>Decrement</button>


            </div>
        </div>
    </div>
    </>
 )
}
export default Inc;