import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';
import ME from '../assets/me.png';

const Home = () => {
  return (
    <section name='home' className=' w-full  bg-[#0a192f] h-[calc(100vh-10%)] flex flex-col 			 '>
        {/* container */}
      
        <article className='  max-w-[1000px]  mx-auto px-8 flex flex-col justify-center	 h-[calc(100vh-10%) 	 '>
        <figure className=' flex flex-col  mx-auto justify-center mt-6 mb-4  w-full	xs:max-w-xs '>
              <img src={ME} alt="meface" className=" 		 border-2 mx-auto rounded-full mt-6 mb-4 hover:bg-pink-600 hover:border-pink-600  " />

        </figure>
            <p className='text-pink-600 ' >Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] xs:text-3xl '>Mohamed Soliman</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] xs:text-3xl'>I am a full stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full stack developer specializing in building(and occassionally desgining)
                 exceptional digital experience. currently,
                  I'm focused on building responsive full-stack web applications</p>
                  <div className='	'>
                      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center xs:mb-10 sm:mb-10 hover:bg-pink-600 hover:border-pink-600'>
                        
                      <Link to="work"  smooth={true}  duration={500} >
                        View Work
                    </Link>
                      <span className='group-hover:rotate-90 duration-300 '>
                      
                        <HiArrowNarrowRight className='ml-3' />

                      </span>
                       </button>
                  </div>
        </article>
    </section>
  )
}

export default Home;