import React from 'react'

import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f]'>
      <div>
        <div>
          <p>Experience</p>
          <p>These are the technologies I've work with</p>
        </div>

        <div>
          <div>
            <img src={HTML} alt="HTML icon" />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills