import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

        <button 
          type='button'
          onClick={() => window.open('https://github.com/viidane')}
          className="black_btn"
          >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Entire Articles Using <br className='max-md:hidden' />
        <span className='purple_gradient'>OpenAI GPT4</span> 
      </h1>
      <h2 className='desc'>
        Here you can summarize entire articles, simply just by pasting your article link down below and voila, your summary is done.
        </h2>
    </header>
  )
}

export default Hero