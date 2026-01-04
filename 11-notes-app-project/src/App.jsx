import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [task, setTask] = useState([])

  const changeHeader = (e) => {
    setHeader(e.target.value);
  }

  const changeDescription = (e) => {
    setDescription(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTask( prev =>[...prev , {header, description}] );
    setHeader('');
    setDescription('');
    console.log(task);
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-[#0B1D51] lg:flex text-white'>
      <form onSubmit={(e) => {submitHandler(e)}} 
            className='flex flex-col lg:w-1/2 items-start p-10 gap-5'>

          <h1 className='text-3xl font-bold'>Add Notes</h1>

            {/* First Input for Heading */}
          <input 
          type="text" 
        placeholder='Title' 
        className='px-5 py-3 w-full border-2 font-medium outline-none rounded'
        value={header}
        onChange={(e) => {changeHeader(e)}}       
        />

        {/* Second Input for Description */}
        <textarea 
        type="text" 
        placeholder='Details' 
        className='px-3 py-1 h-30 w-full border-2 font-medium outline-none rounded'
        value={description}
        onChange={(e) => {changeDescription(e);}}
        />
        

      <button className='bg-[#797596] cursor-pointer active:bg-[#BBADA0] px-5 py-3 w-full outline-none font-medium rounded-full' type='submit'>Add Notes</button>
      </form> 
      <div className='lg:w-1/2 lg:border-l-2 p-10 h-full relative'>
        <h1 className='text-3xl font-bold'> Your Notes </h1>
        <div className='flex flex-wrap items-start justify-start gap-5 overflow-auto h-full '>
        {task.map( (elem,idx) => {
          return (<div key={idx} className=' relative h-52 w-40 rounded-2xl text-black bg-cover flex flex-col items-center pt-10 bg-[url("https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")] '>
            <h2 onClick={() => {deleteNote(idx)}} className='absolute flex justify-center items-center top-8 right-2 bg-red-800 p-1 rounded-full text-amber-50 hover:bg-amber-50 hover:text-red-800 '><X size={13} strokeWidth={6} /></h2>
            <h3 className='leading-tight mt-5 text-lg font-bold'>{elem.header}</h3>
            <p className='w-full mt-4 px-4 leading-tight text-xs font-medium  text-[#797596]'>{elem.description}</p>
          </div>)
        })}
        
        </div>
      </div>
    </div>
  )
}

export default App