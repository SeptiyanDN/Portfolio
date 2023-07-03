import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'

const services = [
  {
    name : 'Go Language',
    description : "I have a strong understanding of the Go programming language and can utilize it to develop efficient and reliable backend applications. With Go, I can build robust systems.",
    link : "Learn More"
  },
  {
    name : 'Node JS',
    description : "I possess knowledge and experience in utilizing Node.js for backend development. Using Node.js, I can create responsive and scalable applications.",
    link : "Learn More"
  },
  {
    name : 'Laravel Framework',
    description : "I am skilled in utilizing the Laravel Framework for backend development. With Laravel, I can construct powerful and efficient web applications.",
    link : "Learn More"
  },
  
  {
    name : 'Postgresql | MongoDB | Redis',
    description : "I have hands-on experience working with databases such as Postgresql, MongoDB, and Redis. I can design and manage databases efficiently while optimizing application performance.",
    link : "Learn More"
  },
]

const Services = () => {
  return <services className="section" id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Backend Software Engineer with over 2 years of experience.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
         className='flex-1'>
          <div>
            {services.map((service, index)=>{
              const {name, description, link} = service
              return (
              <div className='border-b border-white/20 h-[136px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='font-secondary leading-tight '>{description}</p>
                  {/* <h4>{link}</h4> */}
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a className='text-sm text-gradient' href='#'>{link}</a>
                </div>
              </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </services>;
};

export default Services;
