import React from 'react'
import { useState } from 'react'


const Section = () => {
  const [input, setInput] = useState('')
    const [tag, setTag] = useState([])
    


    const handleClick = (e) => {
      e.preventDefault()
      if (!input) {
        alert("Please input a name");
        return
      }
      const id = Math.floor(Math.random() * 1000 + 1)
      const newTag = { id, input }
      setTag([ ...tag, newTag ])
      setInput('')
      return
    }

    const onAct = (k)=>{
      return () => {
        setTag(tag.filter((tag) => tag.id !== k))
      } 
    }

  return (
    <>
    <header className='header'>
        <h1>Name Tag Generator</h1>
        <form method="post" onSubmit={handleClick}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add a tag name here' className='input' />
          <button type='submit' className='btn'>Create Name Tag</button>
        </form>
        
    </header>
    <section className='container'>
        {tag.map((input, i) => (
          <div key={i} onDoubleClick={onAct(input.id)}>
            <div className="head"><span> </span><h1 className="h1">HELLO</h1> <p className="pp">My name is</p></div> <p className="p">{input.input} </p> <div className="tail"></div>
          </div>
        ))}
    </section>
    </>
    
  )
}

export default Section