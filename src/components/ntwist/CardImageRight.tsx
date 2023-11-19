import React from 'react'
import { ntwistCardProps } from '../../utils/utils'

const CardImageRight = (data: ntwistCardProps) => {
    const { mainhead, subhead, imageurl } = data.data
    return (
        <React.Fragment>
            <div className="grid max-w-screen-xl max-h-screen-xl p-4 lg:p-10 md:p-16 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-14 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-red-600">{mainhead}</h1>
                    <p className="max-w-2xl mb-6 text-gray-500 lg:mb-8 text-black-500">{subhead}</p>
                    <button className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-center text-white bg-red-600">
                        Read More
                    </button>
                </div>
                <div className="mt-8 lg:mt-0 md:mt-8 sm:mt-8 lg:col-span-5 lg:flex w-full h-full">
                    <img src={imageurl} alt="ntist" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardImageRight