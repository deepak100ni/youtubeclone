import React from 'react'

const Videocard = () => {
    return (
        <div className='w-64 m-3 p-6'>
            <div className="h-60">
                <img className='border rounded-lg' src='https://i.ytimg.com/vi/kuab6Xxzkg8/mqdefault.jpg' />
                <div className="flex flex-row p-1 m-2">
                    <div className='basis-1/4'>
                        <img src='https://i.ytimg.com/vi/kuab6Xxzkg8/mqdefault.jpg' className='h-8 w-8 rounded-full' />
                    </div>
                    <div className='basis-3/4 font-semibold text-xs'>
                        <p>Mujhe Pyaar Hua Tha Ep 14 |Digitally Presented by Surf Excel & Glow & Lovely (Eng Sub)-13 March 2023</p>
                        <p>Sare Ga Ma Pa</p>
                        <p>6379297 views .2023-03-13</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videocard