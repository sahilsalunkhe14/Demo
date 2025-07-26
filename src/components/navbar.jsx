import logo from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='flex justify-evenly py-5 border-b-1 border-gray-400  '>
      <img src={logo} alt="logo" className='w-45 h-7' />
      <div className='flex gap-8'>
          <div>Signup</div>
          <div>Login</div>
          <div>Support</div>
          <div>About us</div>
          <div>Contact us</div>
      </div>
      </div>
  );
}
export default Navbar