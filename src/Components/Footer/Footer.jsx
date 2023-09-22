// import PropTypes from 'prop-types';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
const Footer = () => {
    return (
<footer className="footer p-10 bg-[#1A1919] text-base-content px-[200px] flex flex-col gap-12 pb-[60px]">

    <div className='flex gap-[70px] border-b-2 border-[gray] pb-12'>
      <div className='w-1/4'>
        <aside className='flex flex-col gap-[20px]'>
          <h1 className='text-white font-extrabold text-[32px]'>CareerHub</h1>
          <p  className='text-[#ffffffbf] text-[16px]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
          <div className="social-icons flex gap-4">
            <div className="fb-icon text-3xl p-2 rounded-full bg-white text-[#337FFF]"><BiLogoFacebook/></div>
            <div className="twitter-icon text-3xl p-2 rounded-full bg-white text-[#33CCFF]"><BsTwitter/></div>
            <div className="insta-icon text-3xl p-2 rounded-full bg-white text-pink-500"><BsInstagram/></div>
          </div>
        </aside>
      </div>
      <div className='w-3/4 flex gap-[100px]'>
        <nav className='flex flex-col gap-2'>
          <header className="text-white font-semibold text-[20px] ">Company</header> 
          <a className="link link-hover text-[#ffffffbf]">About Us</a> 
          <a className="link link-hover text-[#ffffffbf]">Work</a> 
          <a className="link link-hover text-[#ffffffbf]">Latest News</a> 
          <a className="link link-hover text-[#ffffffbf]">Careers</a>
        </nav> 
        <nav className='flex flex-col gap-2'>
          <header className=" text-white font-semibold text-[20px]">Product</header> 
          <a className="link link-hover text-[#ffffffbf]">Prototype</a> 
          <a className="link link-hover text-[#ffffffbf]">Plans & Pricing</a> 
          <a className="link link-hover text-[#ffffffbf]">Customers</a> 
          <a className="link link-hover text-[#ffffffbf]">Integrations</a>
        </nav> 
        <nav className='flex flex-col gap-2'>
          <header className=" text-white font-semibold text-[20px]">Support</header> 
          <a className="link link-hover text-[#ffffffbf]">Help Desk</a> 
          <a className="link link-hover text-[#ffffffbf]">Sales</a> 
          <a className="link link-hover text-[#ffffffbf]">Become a Partner</a>
          <a className="link link-hover text-[#ffffffbf]">Developers</a>
        </nav>
        <nav className='flex flex-col gap-2'>
          <header className=" text-white font-semibold text-[20px]">Contact</header> 
          <a className="link link-hover text-[#ffffffbf]">524 Broadway , NYC</a> 
          <a className="link link-hover text-[#ffffffbf]">+1 777 - 978 - 5570</a> 
        </nav>
      </div>
    </div> 
    <div className='flex justify-between w-full'>
      <div className=''>
        <p className='text-[#ffffff66]'><small>@2023 CareerHub. All Rights Reserved</small></p>
      </div>
      <div>
        <p className='text-[#ffffff66]'><small>Powered by CareerHub</small></p>
      </div>
    </div>


    </footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;