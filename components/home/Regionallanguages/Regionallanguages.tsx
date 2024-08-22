import { Heading, HeadingBtn, Paragraph } from '@/components/core'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const Regionallanguages = () => {
    const data = {
        title: "Skilline is an innovative, interactive platform transforming Bharat's education with a vision to enhance nationwide education quality, making AI-driven, affordable training accessible to all."
    }

    return (
        // <HeadingBtn
        //     title={data.title}
        // />
        <div className=' bg-[#F3F4F6] pb-5 pt-[40px]'>
            <div className=" container md:rounded-xl">
                <div className="md:px-10">
                    <div className="flex items-center flex-col md:flex-row">
                        <div className="md:w-full w-full pb-10">
                            <Heading className='text-center'>Our Mission</Heading>

                            <div className='bg-white md:p-10 p-5 mt-[30px] rounded-[15px] space-y-3 shadow-[rgba(149,157,165,0.2)_0px_8px_24px]'>
                                <Heading className='text-[20px] leading-[32px] text-pretty text-black font-[600] md:text-[22px] font-normal'><span className='font-semibold'>{`Transforming Bharat's education`}</span> to build a <span className='font-semibold'>skilled nation</span> through <span className='font-semibold'>{`innovative, interactive, and affordable AI-driven training`}</span> for all.</Heading>
                                <Paragraph className='text-pretty md:text-[19px] text-[19px]'>
                                    {`Skilline is dedicated to revolutionizing Bharat's education by offering affordable, AI-driven, personalized training that bridges skill gaps and empowers job seekers, corporate employees, and rural youth. We enhance education accessibility through collaboration with corporates and educational institutions, focusing on niche resources and skill development. Our goal is to make learning engaging and effective, especially in tech and manufacturing, to foster growth, create fair opportunities, and drive nationwide prosperity. `}
                                    <Link href="/our-mission" className='text-[#1D70A2] font-semibold hover:text-black'>
                                        See More...
                                    </Link>
                                </Paragraph>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
