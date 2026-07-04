import React, { Suspense, useState } from 'react'
import ContextApi from '../components/reactHook/contextApi/ContextApi'
import Memo from '../components/reactHook/UseMemo/Memo'
import UseCallback from '../components/reactHook/useCallback/UseCallback'
import ReactMemo from '../components/reactHook/reactMemo/reactMemo'
import SuspenseReact from '../components/suspense&Lazy/suspense'
import StateManage from '../components/reactHook/StateManage/StateManage'
import CustomeHooks from '../components/reactHook/customeHook/CustomeHooks'

const ReactHook = () => {
       const [currCompo, setCurrCompo] = useState(<ContextApi />)
       return (
              <div>
                     <div className='bg-green-300 flex gap-5  justify-center items-center border h-15'>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<ContextApi />)}>
                                   Context Api
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<Memo />)}
                            >
                                   Use memo
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<UseCallback />)}>
                                   Use callback
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<ReactMemo />)}>
                                   React Memo
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<SuspenseReact />)}>
                                   Suspense 
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<StateManage />)}>
                                   UseReducer
                            </button>
                            <button className='border rounded-xl h-10 w-32 text-xl bg-gray-300 p-1 m-1'
                                   onClick={() => setCurrCompo(<CustomeHooks />)}>
                                   CustomeHook
                            </button>
                     </div>
                     <div>{currCompo}</div>
              </div>
       )
}

export default ReactHook
