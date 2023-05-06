import React from 'react'

const LeftHeader = () => {
    return ( 
        <section id="leftheader" className="w-full">
            <div className="px-3 ">
              <div className="py-4 flex flex-col items-center">
                <div className="mt-5">
                <img src="/leftbarlogo.png" alt="" />

                </div>

                <div className="mt-7">
                    <img src="pencil.png" alt="" />
                </div>

                <div className="mt-7">
                    <img src="helmet.png" alt="" />
                </div>

                <div className="mt-7">
                    <img src="hat.png" alt="" />
                </div>
              </div>
            </div>
        </section>
     );
}
 
export default LeftHeader;