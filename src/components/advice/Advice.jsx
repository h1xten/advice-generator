import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "./Advice.css"

const Advice = () => {
    const [advice, setAdvice] = useState("")
    const [i, setI] = useState(0)
    useEffect(()=> {
        axios.get('https://api.adviceslip.com/advice').then(({data}) => {
            setAdvice(data.slip)
        })
    }, [i])
  return (
    <div className='advice'>
        <div className='advice__content'>
            <p className='advice__id'>ADVICE #{advice.id}</p>
            <p className='advice__text'> “ {advice.advice} ”</p>
            <div className='advice__line'>
                <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
            </div>
            <div className='advice__btn'>
                <button onClick={() => setI(i+1)}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Advice