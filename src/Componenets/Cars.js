import React, { useState } from 'react'
import {carData} from '../api/cars'
import {CarModel} from "./CarModel";
export default function Cars() {
    const [input, setInput] = useState("")
    function inputHandler(e){
        setInput(e.target.value)
        //console.log(e.target.value)
    }
    const data=carData;
  return (
    <>
        <div className='main_container'>
            <div className='carosel_container'>
                {data.map((car)=>{
                return(
                    <div>
                        <CarModel data= {car} />
                    </div>  
                )
                })}
            </div>    
        </div>
        <div>
            <input type="search" onChange={inputHandler} value={input} />
            {
        
                // eslint-disable-next-line array-callback-return
                data.filter((value)=>{
                    if(input==="")
                    return value;
                    else if(value.bodyType.toLowerCase().match(input.toLowerCase()))
                    {
                        return value;
                    }
                }).map((data)=>{
                    return(
                        <>
                            <CarModel data= {data} />
                        </>
                    )
                })
            }
        </div>
    </>
  )
}
