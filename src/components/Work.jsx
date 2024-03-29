import React from 'react'
import realEstate from '../assets/realestate.jpg'
import SRC1 from '../assets/src1.png'
import NEWSRC from '../assets/newscr.png'
import NEWSRC2 from '../assets/newscr2.png'
import SRC4 from '../assets/src4.png'
import SRC5 from '../assets/src5.png'
import MOESTORE from "../assets/moestore.png"
import MOESTORE1 from "../assets/moestore1.png"
import STATEMENT from '../assets/statementsscr.png'


const Work = () => {
  return (
    <section name="work" className= " w-full xs:flex xs:flex-col  text-gray-300  bg-[#0a192f] box-border  ">

        <article className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full  ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className='py-6'> Check out some of my recent work </p>
            </div>

            {/* Container */}
            {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
            <figure className='xs:flex xs:flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                {/* grid item */}
                <div style={{backgroundImage: `url(${MOESTORE})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full object-cover'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           <h2>Mern Stack With</h2>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://moeonlinestore.com/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/soccerdataapi">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${STATEMENT})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h2>Mern Stack/firebase App</h2>  
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://statementanalysis.netlify.app/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/statementsFE">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SRC1})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full object-cover'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           <h2>HTML5/CSS/JS</h2>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://moeabraham.github.io/soccerdataapi/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/soccerdataapi">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${NEWSRC})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-full object-cover'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            <h2>NodeJS/Express App</h2>
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://activity-project-unit.herokuapp.com/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/Activity-Tracker-Project">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style={{backgroundImage: `url(${NEWSRC2})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h2>Mern Stack App</h2>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://reactmusicdata.netlify.app/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/Muzika-FE">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SRC4})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        <h2>Mern Stack App/AWS</h2>


                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://soccercards.herokuapp.com/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/soccercards">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SRC5})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            <h2>Old Gatsby Portfolio</h2>  
   
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://moeabraham.netlify.app/">
                                <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/moeabraham/portfolio">
                            <button className='text-center rounder-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
            </figure>

        </article>
    </section>
  )
}

export default Work