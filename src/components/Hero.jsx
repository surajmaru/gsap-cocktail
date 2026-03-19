import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from 'react-responsive';

function Hero() {

    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 768});

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" }) 
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" }) 

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        // leaf animation

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        .to(".right-leaf", { y: 200 }, 0)
        .to(".left-leaf", { y: -200 }, 0)
        .to(".arrow", { y: 100 }, 0);

        // video animation on scroll

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
            currentTime: videoRef.current.duration,
        });
        };

        // 

        

    }, [])

  return (
    <>
    <section className="noisy" id="hero">
        <h1 className="title"> MOJITO </h1>

        <img src="/images/hero-left-leaf.png" alt="mojito" className="left-leaf" />
        <img src="/images/hero-right-leaf.png" alt="mojito" className="right-leaf" />

        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic</p>
                    <p className="subtitle">Slip the Spirit <br /> of Summer</p>
                </div>

                <div className="view-cocktails">
                    <p className="subtitle">Every cocktail on our menu is blend of premium ingredients, creative, flair and timeless recipes - designed to delight your senses.</p>
                    <a className="" href="#cocktails"> View Cocktails</a>
                </div>
            </div>
        </div>
    </section>

    <div className="video absolute inset-0">
        <video src="/videos/output.mp4" muted playsInline preload="auto" ref={videoRef} />
    </div>
    </>
  )
}

export default Hero