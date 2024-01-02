import React, { useRef, useState } from 'react'

const Board = () => {

    const [value, setValue] = useState(Array(9).fill(null))
    const [display, setDisplay] = useState("X")
    const [allow, setAllow] = useState(true)
    let title = useRef(" ")


    const handleClick = (i) =>  {
        
        if (allow){
        
        if (value[i]!==null){
            return
        }
        
           let square=[...value]
          
            square[i]=display
           
            setValue(square)
            if (display==="X"){
                setDisplay("O")
            }
            else{
                setDisplay("X")
            }
            
        checkWinner(square)
            
        checkDraw(square)
          
    }
}


    const checkWinner =  (val) => {

        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        
        conditions.forEach(element =>{

            if (val[element[0]]!== null && val[element[1]]!== null && val[element[2]]!==null){
            if (val[element[0]]===val[element[1]] && val[element[1]]===val[element[2]]){
                won(val[element[2]])
            }

        }
    })
        
        }
    
        const checkDraw = (val) =>{
            let count=0
            val.forEach(element=>{
                if  (element!==null){
                    count++
                }
            })

            if (count===9){
                title.current.innerHTML="It's a draw"
            }
        }

    const won = (val) =>  {
        setAllow(false)
        title.current.innerHTML=`${val} won the  game`
    }

    const btnClick = () =>{
        let square=[...value]
        square.fill(null)
        setValue(square)
        setAllow(true)
        title.current.innerHTML="Welcome to the Game"
    }
    


  return (
    <>
    <h1 ref={title}>Welcome to the Game</h1>
    <div className='column'>
        <div  className='row' onClick={()=>handleClick(0)}>{value[0]}</div>
        <div className='row'  onClick={()=>{handleClick(1)}}>{value[1]}</div>
        <div className='row' onClick={()=>{handleClick(2)}}>{value[2]}</div>
    </div>

    <div className='column'>
        <div className='row'onClick={()=>handleClick(3)}>{value[3]}</div>
        <div className='row'onClick={()=>handleClick(4)}>{value[4]}</div>
        <div className='row'onClick={()=>handleClick(5)}>{value[5]}</div>
    </div>

    <div className='column'>
        <div className='row'onClick={()=>handleClick(6)}>{value[6]}</div>
        <div className='row'onClick={()=>handleClick(7)}>{value[7]}</div>
        <div className='row'onClick={()=>handleClick(8)}>{value[8]}</div>
    </div>

    <button  type='submit' className='btn'
    onClick={btnClick}
    >Reset</button>
    </>
  )
}

export default Board