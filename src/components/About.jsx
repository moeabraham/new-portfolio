import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full flex flex-col   bg-[#0a192f] text-gray-300 box-border content-center min-h-screen	items-center  '>
       <article className='flex flex-col justify-center items-center w-full  min-h-screen	mx-auto		'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <article className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </article>
                <div>
                </div>
                </div>
            <article className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi, I'm Mohamed, Nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about building excellent software that improves 
                        the lives of those around me, I specialize in creating software 
                        for clients ranging from individuals and small-busiesses all the
                         way to large enterprise corporations.
                        What would you do if you had a software expert available at your fingertips ?
                    </p>
                </div>
            </article>
        </article> 
    </section>
  )
}

export default About