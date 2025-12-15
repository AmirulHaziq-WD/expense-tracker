import React from 'react'
import { LuTrendingDown, LuTrendingUp, LuTrendingUpDown, LuWallet } from 'react-icons/lu'

const StatsInfoCard = ({icon, label, value, color}) => {
    return (
        <div className="flex w-full gap-6 bg-white p-4 rounded-xl shadow-lg shadow-purple-400/10 border border-gray-300/50 z-10">
            <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div>
                <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
                <span className="text-[20px]">RM{value}</span>
            </div>
        </div>
    );
}

const AuthLayout = ({children}) => {
  return (
    <div className="flex">
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-5 pb-12'>
            <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 flex items-center justify-center text-[40px] text-white bg-primary rounded-full drop-shadow-xl">
                    <LuTrendingUpDown/>
                </div>
                <div>
                    <h1 className='text-3xl font-medium text-black'>Meon Expense Tracker</h1>
                    <h3 className="text-md font-semibold text-gray-500">Track your Income and Expenses.</h3>
                </div>
            </div>
            {children}
        </div>

        <div className='hidden md:block w-[40vw] h-screen bg-blue-600/50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
            <div className='w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7 -left-5'/>
            <div className='w-48 h-56 rounded-[40px] border-20 border-fuchsia-600 absolute top-[30%] -right-10'/>
            <div className='w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5'/>

            <div className='w-full h-full flex flex-col z-10 items-center gap-12 justify-center'>
                <StatsInfoCard
                    icon={<LuTrendingUp/>}
                    label="Income"
                    value="500,000"
                    color="bg-green-500"
                />
                <StatsInfoCard
                    icon={<LuTrendingDown/>}
                    label="Expenses"
                    value="430,000"
                    color="bg-red-500"
                />
                <StatsInfoCard
                    icon={<LuWallet/>}
                    label="Balance"
                    value="70,000"
                    color="bg-primary"
                />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout