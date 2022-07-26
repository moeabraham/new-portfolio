import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';
import JavaScript from '../assets/javascript.png';
import ME from '../assets/me.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
      
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center 	  h-full'>
        <div className='photo flex flex-col justify-center mt-6 mb-4 '>
              <img src={ME} alt="" className="w-60 h-50 border-2 mx-auto rounded-full mt-6 mb-4  hover:bg-pink-600 hover:border-pink-600 border-radius: 50%;" />

        </div>
            <p className='text-pink-600' >Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohamed Soliman</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a full stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full stack developer specializing in buiklding(and occassionally desgining)
                 exceptional digital experience. currently,
                  I'm focused on building responsive full-stack web applications</p>
                  <div>
                      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        
                      <Link to="work"  smooth={true}  duration={500} >
                        View Work
                    </Link>
                      <span className='group-hover:rotate-90 duration-300 '>
                      
                        <HiArrowNarrowRight className='ml-3' />

                      </span>
                       </button>
                  </div>
        </div>
    </div>
  )
}

export default Home;