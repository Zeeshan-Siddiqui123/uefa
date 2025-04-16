import React from 'react'
import { FaFacebookF, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";
import { SiGoogleplay } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-5'>
      <img src="https://tpc.googlesyndication.com/simgad/5298045565481263900" alt="" />
      </div>
      <div className='flex flex-col gap-3 items-center justify-center mt-8'>
        <div>Official Global Partner</div>
        <div className="flex items-center flex-wrap gap-2 justify-center">
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/01-01A_RGB_Heineken.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/25_playstation.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/RGB_Lays.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/25_fedex.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/25_mastercard.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/01A_RGB_crypto.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/bet365.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/04_01A_RGB_JET-House.png?imwidth=75" alt="" />
            <img src="https://img.uefa.com/imgml/uefacom/sponsors/club/Qatar.png?imwidth=75" alt="" />
        </div>
      </div>
      <div className='bg-img2 mt-6'>
      <footer className=" text-white px-8 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div>
          <div className="mb-4">
            <img src="https://img.uefa.com/imgml/uefacom/ucl/2024/logos/logo_dark.svg" alt="UEFA Champions League" className="w-[100px]" />
          </div>
          
        </div>

        {/* Center Left */}
        <div>
        <ul className="space-y-1">
            <li>Matches</li>
            <li>UEFA.tv</li>
            <li>Table</li>
            <li>Gaming</li>
            <li>Stats</li>
            <li>Teams</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-1">
            <li>New format</li>
            <li>News</li>
            <li>Final</li>
            <li>History</li>
            <li>About</li>
            <li>Store</li>
          </ul>
        </div>

        {/* Center Right */}
        <div>
          <h4 className="font-semibold mb-2">ALSO VISIT</h4>
          <ul className="space-y-1">
            <li>UEFA.com</li>
            <li>UEFA Foundation</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="font-semibold mb-2">CHANGE LANGUAGE</h4>
          <ul className="space-y-1">
            <li>English</li>
            <li>Français</li>
            <li>Deutsch</li>
            <li>Русский</li>
            <li>Español</li>
            <li>Italiano</li>
            <li>Português</li>
          </ul>
        </div>
      </div>

      {/* Socials & Apps */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4 border-t border-white/20 pt-6">
        <div className="flex items-center gap-4">
          <span>Follow us on</span>
          <FaXTwitter className="text-xl" />
          <FaFacebookF className="text-xl" />
          <FaYoutube className="text-xl" />
          <FaInstagram className="text-xl" />
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-black px-4 py-2 rounded">
            <AiFillApple className="text-xl" />
            <span>App Store</span>
          </button>
          <button className="flex items-center gap-2 bg-black px-4 py-2 rounded">
            <SiGoogleplay className="text-xl" />
            <span>Google Play</span>
          </button>
        </div>
      </div>

      {/* Legal */}
      <div className="text-center mt-6 space-x-6 text-xs text-white/80">
        <a href="#">Privacy</a>
        <a href="#">Terms and conditions</a>
        <a href="#">Cookie policy</a>
        <a href="#">Cookie Settings</a>
      </div>

      <p className="text-center text-xs mt-4 text-white/60">
        © 1998–2025 UEFA. All rights reserved.<br />
        The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected...
      </p>
    </footer>
      </div>
    </div>
  )
}

export default Footer
