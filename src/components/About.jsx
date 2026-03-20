import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

function About() {

    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {
            type: "words",  
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: "#about",
                start: "top center",
            }
        });

        scrollTimeline
        .from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger: 0.02,
        })
        .from(".top-grid div, .bottom-grid div", {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.04,
        }, "-=0.5")
    }, [])


  return (
    <div id='about'>
        <div className='mb-15 md:px-0 px-5'>
            <div className='content'>
                <div className='md:col-span-8'>
                    <p className='badge'>Best Cocktails</p>
                    <h2>Where Every Details Matter <span className='text-white'>-</span> from muddle to garnish</h2>
                </div>

                <div className='sub-content'>
                    <p>
                        At Velvet Pour, we believe that a cocktail is more than just a drink - it's an experience. That's why we use only the freshest ingredients and the finest spirits to create our signature cocktails. Whether you're in the mood for a classic mojito or something more adventurous, our expert mixologists will craft the perfect drink for you. So come on in, take a seat at the bar, and let us show you what we can do. Cheers!
                    </p>

                    <div>
                        <p className='md:text-3xl text-xl font-bold'>
                            <span>4.5</span>/5
                        </p>
                        <p className='text-sm text-white-100'>More Than +1200 Customers</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='top-grid'>

            <div className='md:col-span-3'>
                <div className='noisy' />
                    <img src='/images/abt1.png' alt='grid-img-1' />
            </div>

            <div className='md:col-span-6'>
                <div className='noisy' />
                    <img src='/images/abt2.png' alt='grid-img-1' />
            </div>

            <div className='md:col-span-3'>
                <div className='noisy' />
                    <img src='/images/abt5.png' alt='grid-img-1' />
            </div>
        </div>

        <div className='bottom-grid'>
            <div className='md:col-span-8'>
                <div className='noisy' />
                    <img src='/images/abt3.png' alt='grid-img-1' />
            </div>
            <div className='md:col-span-4'>
                <div className='noisy' />
                    <img src='/images/abt4.png' alt='grid-img-1' />
            </div>
        </div>

    </div>
  )
}

export default About