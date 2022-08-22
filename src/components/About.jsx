import React from 'react';

import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'







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
                        for clients ranging from individuals and small-businesses all the
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




// // 

// <article>
// <section className=" xs:flex xs:flex-row xs:w-[250px] xs:mt-[50px] sm:hidden    ">
// <ul className='flex'>
// <li className="w-[160px] h-[60px] flex justify-between items center ] hover:ml-[-10px] duration-300 bg-blue-600">
// <a className='flex justify-between items-center w-full text-gray-300'
// href="https://www.linkedin.com/in/moeabraham
// ">
// Linkedin <FaLinkedin size={30} />
// </a>
// </li>
// <li className="w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
// <a className='flex justify-between items-center w-full text-gray-300'
// href="https://github.com/moeabraham">
// Github <FaGithub size={30} />
// </a>
// </li>
// <li className="w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
// <a className='flex justify-between items-center w-full text-gray-300'
// href="mailto:moeabraham12@gmail.com">
// Gmail <HiOutlineMail size={30} />
// </a>
// </li>
// <li className="w-[160px] h-[60px] flex justify-between items center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
// <a className='flex justify-between items-center w-full text-gray-300'
// href="https://drive.google.com/file/d/1oOlQPIEs0w-sZieeDkxF7eRhZwouwgYI/view?usp=sharing"
// >
// Resume <BsFillPersonLinesFill size={30} />
// {/* resume <Resume /> */}
// </a>
// </li>
// </ul>

// </section>

// </article>
