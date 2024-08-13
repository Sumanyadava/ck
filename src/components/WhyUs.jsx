import React from 'react'

const WhyUs = () => {
  return (
    <div className='flex h-[50vh] w-full text-black justify-center items-center gap-5 sm:flex-col md:flex-row'>
      <div className=' sm:w-1/3 '>
        <p >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In voluptatibus eius corrupti maiores deleniti. Molestias sed id magni commodi eius, magnam ratione dignissimos impedit est blanditiis officia, odio alias eum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eligendi, distinctio, 
          <br /><br />
          
          fugit dolorem iusto nesciunt adipisci nulla eum architecto nostrum sint molestiae, placeat quae inventore minima amet aperiam possimus esse.
        </p>
        <button>CTA</button>
      </div>
      <h1 className='text-6xl sm:w-2/3'>
        <p className='text-sm'>Your Partner</p>
        Why Choose HubCentral</h1>
    </div>
  )
}

export default WhyUs



