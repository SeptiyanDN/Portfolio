import React from 'react';
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube, FaLinkedin, FaGitlab, FaDribbble} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Banner = () => {
  return <banner className="min-h-[85vh] lg:min-h-[78vh] flex items-center " id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'}  viewport={{once: false, amount :0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>SEPTIYAN <span>DN</span></motion.h1>
          <motion.div variants={fadeIn('up',0.4)} initial="hidden" whileInView={'show'}  viewport={{once: false, amount :0.7}}  className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>I am a</span>
            <TypeAnimation sequence={[
              'Software Engineer', 2000,'Backend Developer', 2000,'Go-Lang Developer', 2000, 'PHP Developer',2000
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            ></TypeAnimation>
            
          </motion.div>
          <motion.p variants={fadeIn('up',0.5)} initial="hidden" whileInView={'show'}  viewport={{once: false, amount :0.7}}  className='mb-8 max-w-lg mx-auto mx-auto lg:mx-0'>
          Hi, I'am Septiyan Dwi Nugroho <br/>
Back End Developer with a demonstrated history of working in the information technology and services industry. Skilled in Go-Language, Node Js, PHP<br/><br/>

I currently work as a Backend Developer with the Go language at an IoT company<br/>

            </motion.p>
            <motion.div variants={fadeIn('up',0.6)} initial="hidden" whileInView={'show'}  viewport={{once: false, amount :0.7}}  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='btn-link text-gradient'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up',0.7)} initial="hidden" whileInView={'show'}  viewport={{once: false, amount :0.7}}  className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaGithub></FaGithub>
              </a>
              <a href='#'>
                <FaLinkedin></FaLinkedin>
              </a>
              <a href='#'>
                <FaDribbble></FaDribbble>
              </a>
            </motion.div>
        </div>
        <motion.div variants={fadeIn('down',0.8)} initial="hidden" whileInView={'show'}    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''></img>
        </motion.div>
      </div>
    </div>
  </banner>;
};

export default Banner;
