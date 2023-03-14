import React from 'react'
import Sidebar from './Sidebar'
import Topmenu from './Topmenu'
import Videocard from './Videocard'

const Dashboard = () => {
    const Array = [1,2,3,4,5,6,1,2,3,4];
    return (
        <>
            <div className="flex mt-[55px]">
                <div className="h-[600px] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className='flex fixed w-full'>
                        <Topmenu />
                    </div>
                    <div className='mt-16 h-[500px] overflow-y-auto p-2 flex flex-wrap'>
                        {Array.map(x=><Videocard/>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard