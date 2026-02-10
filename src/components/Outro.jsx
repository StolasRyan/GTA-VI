import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Outro = () => {
    useGSAP(()=>{
        gsap.set('.final-message', {marginTop:'-100vh', opacity: 0});

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.final-message',
                start:'top 30%',
                end: 'top 10%',
                scrub:true,
            }
        })
        tl.to('.final-content',{opacity:0, duration:1, ease:'power1.inOut '});
        tl.to('.final-message',{opacity:1,  duration:1, ease:'power1.inOut'})
    })
  return (
     <section className="final-message">
      <div className="w-full col-center gap-10">
        <img src="/images/logo.webp" className="md:w-72 w-52 " alt="logo" />
        <div  >
          <h3 className="gradient-title">
            Coming <br /> May 28th <br /> 2026
          </h3>
        </div>
        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" alt="ps-logo" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" alt="xbox-logo" className="md:w-52 w-40"/>
        </div>
      </div>
    </section>
  )
}

export default Outro