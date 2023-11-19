import React from 'react'

const HeroNtwist = () => {
    return (
        <React.Fragment>
            <div style={{margin:'auto',marginTop:120}} className="grid max-w-screen-xl max-h-screen-xl px-2 py-18 mt-16 lg:p-8 md:p-16  sm:p-8 lg:gap-8 xl:gap-0 lg:py-14 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">Data powered-solutions for Industrial Exellence</h1>
                    <button className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-center text-white bg-blue-600">
                        Read More
                    </button>
                </div>
                <div className="mt-8 lg:mt-8 md:mt-8 lg:col-span-5 lg:flex lg:p-0 md:p-16 sm:p-18 p-0">
                    <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="ntist" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroNtwist