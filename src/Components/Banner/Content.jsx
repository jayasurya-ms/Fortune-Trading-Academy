import React from 'react'

const Content = ({datas}) => {
  return (
    <div className='bg-pink w-full'>
        <div className='w-full h-auto flex flex-col gap-6 xl:flex-row justify-center items-center p-2 md:p-4'>
            <div className='w-full h-auto flex flex-wrap'>
                {datas.map((data) => {
                return (
                <div 
                  className='w-1/1 md:w-1/2 xl:w-1/3 h-auto flex justify-center items-center gap-4 p-4'
                  key={data.id}
                  >
                    <div className=''>
                        <img src={data.icon} alt="" className='w-12 h-12 md:w-20 md:h-18' />
                    </div>
                    <div className=' h-auto flex flex-col  gap-1 w-60 lg:w-92'>
                        <h3 className='Alatsi text-[1rem] md:text-xl w-48 lg:w-76 '>{data.title}</h3>
                        <p className='Chivo text-[.65rem] md:text-[.925rem]   text-black/40 leading-4.5 text-wrap'>{data.description}</p>
                    </div>
                </div>
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Content
