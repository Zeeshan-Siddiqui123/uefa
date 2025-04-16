import React, { useState } from 'react';
import { Drawer } from 'antd';
import { CiMenuFries } from 'react-icons/ci';
// import { routes } from '../Routes';
import { NavLink } from 'react-router-dom';

const Toggle = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] =useState(true);
 
const showLoading = () => {
    setOpen(true);
    setLoading(false);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <button onClick={showLoading}>
      <CiMenuFries size='30' color='white' />
      </button>
      <Drawer 
        closable
        destroyOnClose
        title={<div className='footer-name flex  gap-0'>
            <div className=''></div>
            <img src="../public/download.png" alt="" className='w-[80px] h-[80px] ' />
          </div>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        
        <div className='flex flex-col items-start justify-start gap-4'>
        <a href="" className='text-xl '>Mathes</a>
                <a href="" className='text-xl'>UEFA.TV</a>
                <a href="" className='text-xl '>Table</a>
                <a href="" className='text-xl'>Gaming</a>
                <a href="" className='text-xl'>Stats</a>
                <a href="" className='text-xl'>Team</a>
                <a href="" className='text-xl'>New Format</a>
                <a href="" className='text-xl'>New</a>
                <a href="" className='text-xl'>Final</a>
                <a href="" className='text-xl'>More</a>
        </div>
      </Drawer>
    </>
  );
};

export default Toggle;