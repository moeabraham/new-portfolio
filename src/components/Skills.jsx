import React from 'react'




import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';



const Skills = () => {
  return (
    // height options that work so far overflow-y-scroll/calc/
    <section name="skills" className= " w-full flex flex-col bg-[#0a192f] text-gray-300 box-border   ">
        {/* container */}
        <article className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full ">

              <div>
                  <p className="text-4xl font-bold inline border-b-4 border-pink-600  "> Skills</p>
                  <p className="py-4">   These are the technologies I've worked with </p> 
              </div>

              <figure className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={HTML} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >HTML5</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={CSS} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >CSS</p>
                    </div>

                    
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={JavaScript} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >JAVASCRIPT</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={ReactImg} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >REACT</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={Github} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >GITHUB</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={Node} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >NODE JS</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={Mongo} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >MONGO DB</p>
                    </div>

                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                          <img src={AWS} alt="" className="w-20 mx-auto" />
                          <p className="my-4" >AWS</p> 
                    </div>
              </figure>
        </article>
        
    </section>
  )
}

export default Skills