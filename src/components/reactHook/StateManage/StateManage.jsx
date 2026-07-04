import react from "react";
import { useState } from "react";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

function StateManage() {
       const [currCompo, setCurrCompo] = useState(<Example1 />)
       return (
              <main className="flex">
                     <div className="flex flex-col border p-2">
                            <button className=" border p-1" onClick={()=> setCurrCompo(<Example1 />)}>
                                   Example 1
                            </button >
                            <button className=" border p-1" onClick={()=> setCurrCompo(<Example2/>)}>
                                   Example 2
                            </button>
                            <button className=" border p-1" onClick={()=> setCurrCompo(<Example3/>)}>
                                   Example 3
                            </button>
                            
                     </div>
                     <div className="border w-full h-full">{currCompo}</div>
              </main>
       )
}


export default StateManage
