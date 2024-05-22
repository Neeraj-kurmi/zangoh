const Navbar=()=>{
    return (
        <div className="">
      <nav className='flex justify-between px-9 py-6'>
       <div className=''>
        <img src='/images/brand_logo.png'></img>
       </div>
       <ul className='flex gap-x-5'>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
       </ul>
       <button className="bg-red-500 rounded-2xl px-2">Login</button>
      </nav>
    </div>
    )
}

export default Navbar