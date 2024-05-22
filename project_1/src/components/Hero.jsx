const Hero=()=>{

    return(
        <main className="flex px-10 py-20">
          <div className="">
             <h1 className="font-bold text-6xl">Your feet deserve the best</h1>
             <p className=" font-bold text-1xl py-20">Your feet deserve the best and we're here to help you with our
                shoes.
             </p>
             <div className="flex gap-2 my-5">
                <button className="bg-red-500 rounded-2xl px-2">Shop Now</button>
                <button className="bg-red-500 rounded-2xl px-2">Catagories</button>
             </div>
             <div>
                <img src="/images/shop.png" alt="" />
             </div>

          </div>
          <div>
            <img src="/images/shoe_image.png" alt="" />
          </div>
        </main>
    )
}
export default Hero