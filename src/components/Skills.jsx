import React from 'react'

import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p>Experience</p>
          <p>These are the technologies I've work with</p>
        </div>

        <div>
          <div>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills