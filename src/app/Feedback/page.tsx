'use client'
import React from "react";

const Feedback = () => {
  
  const [feedbackType, setFeedbackType] = React.useState<string>("")
  
  const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setFeedbackType(e.currentTarget.value)
  }
   const handleOnSubmit = () => {

  }
  
  return (
   <div className="w-full flex flex-col justify-center items-center">
    <h1 className="text-3xl mb-6 text-center uppercase">Your Feedback Matters!</h1>
      <form className="md:w-1/2 w-11/12 p-4 border-transparent items-center shadow-xl rounded-xl form-control">
      <p className="text-center text-gray-200"></p>
      <label className="label w-full md:w-3/4 md:flex justify-start">
      <span className="label-text">Select your Feedback</span>
      </label>
      <select onChange={handleOnChange} className="select select-bordered w-full md:w-3/4 mb-4">
         <option value='technical'>Technical Feedback</option>
         <option value='services'>Feeback for Services</option>
      </select>
      <label className="label w-full md:w-3/4 md:flex justify-start">
          <span className="label-text">Summary of Feedback</span>
      </label>
      <input type="text" className="input input-bordered input-md md:w-3/4 w-full mb-4" />
      <label className="label w-full md:w-3/4 md:flex justify-start">
        <span className="label-text">Detailed Feedback</span> 
      </label>
      <textarea className="md:w-3/4 w-full h-56 textarea textarea-bordered mb-4"></textarea>
      <button type="submit" className="btn btn-secondary w-1/2 text-white hover:bg-primary-focus">Sumbit</button>
    </form>
   </div>
  )
  
}

export default Feedback;
