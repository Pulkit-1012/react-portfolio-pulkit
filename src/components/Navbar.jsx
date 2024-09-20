import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from "../assets/PulkitLogo.png"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        {/* upper left side logo */}
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-12' src={logo} href='#' alt="Logo"/>
        </div>

        {/* upper right side icons */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/pulkit-ab3b73262/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <FaGithub/>
            <FaSquareInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar
