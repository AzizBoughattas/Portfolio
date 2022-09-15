import React from 'react'
import CVFR from '../../assets/CV_Aziz_Boughattas_Fr.pdf'
import CVEN from '../../assets/CV_Aziz_boughattas_En.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CVFR} download className='btn'>Download My CV (FR)</a>
        <a href={CVEN} download className='btn'>Download My CV (EN)</a>
        {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
    </div>
  )
}

export default CTA