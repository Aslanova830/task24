export default function App() {
  return (
    <div class="bg">
    <div className="relative h-screen bg-cover bg-center pt-8 " >
      <div className="flex justify-between items-center text-white">
          <p className=" font-main text-[30px] font-blond">Append .</p>
          <ul className="flex gap-[25px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Dropdown</a></li>
            <li><a href="#">Conatact</a></li>
          </ul>
          <div className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"> 
            <button>Get Started</button>
          </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <div  className="text-center text-white justify-start">
      <p className=" font-main text-[50px] font-blond">Welcome to Our Website</p>
      <p>We are team of talented designers making websites with Bootstrap</p>
     < input 
              type="text" 
              className="px-4 py-2 text-black rounded-l-md focus:outline-none" 
            />
             <button className="px-4 py-2 text-white bg-red-500 rounded-r-md hover:bg-red-600">
              Subscribe
            </button>
            </div>
      </div>
    </div>
    </div>
  )
}