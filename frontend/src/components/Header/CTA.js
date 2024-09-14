import React from 'react'
import Resume from '../../Assets/MohibRehman_Resume_F_Hidden2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href='#Contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA