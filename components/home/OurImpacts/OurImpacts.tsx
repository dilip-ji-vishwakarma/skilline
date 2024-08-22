import { Heading, Paragraph, StatesItem } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const OurImpacts = () => {

    const data = [
        {
            icon: "/image/icon/1.png",
            count: "200+",
            label: "Individuals Upskilled",
        },
        {
            icon: "/image/icon/2.png",
            count: "75%",
            label: "Career Advancement",
        },
        {
            icon: "/image/icon/3.png",
            count: "30+",
            label: "Rural Talent Internships",
        },
        {
            icon: "/image/icon/4.png",
            count: "20+",
            label: "Corporate Partnerships",
        }
    ]

    return (
        <div className='container'>
            <GridBox columns={2} gap={10} className='md:space-y-0 space-y-10'>
                <GridBox.GridItem columnMerge={1}>
                <Heading className='md:text-left text-center md:hidden block mb-10'>Our Impact</Heading>
                    <GridBox columns={2} mobile={2} gap={8} className='md:space-y-0 space-y-5'>

                        {data.map((item, index) => (
                            <GridBox.GridItem columnMerge={1} key={index}>
                                <StatesItem
                                    icon={item.icon}
                                    label={item.label}
                                    count={item.count}
                                />
                            </GridBox.GridItem>
                        ))}

                    </GridBox>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} className='space-y-5'>
                    <Heading className='md:text-left text-center md:block hidden'>Our Impact</Heading>
                    <Paragraph>Changing Lives: Skilline prepares people from diverse backgrounds for the job market. Our graduates work with top companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients also hire our professionals, showcasing the real-world impact of our education programs.</Paragraph>
                    <Button asChild={true}>
                        <Link href="/about">
                            Get The Full Story
                        </Link>
                    </Button>
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}
