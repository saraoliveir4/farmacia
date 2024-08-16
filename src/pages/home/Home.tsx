import React from 'react';


function Home() {
    return (
        <>
        <div className="bg-lime-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olivier</h2>
              <p className='text-xl'>Soluções para seu bem-estar você encontra aqui!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-green-500 py-2 px-4'>Ver produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="https://cdn.pixabay.com/photo/2020/08/03/09/39/medical-5459632_1280.png" alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;