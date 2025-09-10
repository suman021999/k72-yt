import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

gsap.registerPlugin(ScrollTrigger)

const imageDivRef = useRef(null);
const imageRef = useRef(null)

const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]


useGSAP(function(){
  gsap.to(imageDivRef.current,{
    scrollTrigger:{
      trigger:imageDivRef.current,
      start: 'top 28%',
      end: 'top -70%',
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: 'transform',
      scrub: 1, 
      anticipatePin: 1,
      invalidateOnRefresh: true,
       onUpdate: (self)=>{
    let imageIndex;

    if(self.progress <1){
     imageIndex= Math.floor(self.progress * imageArray.length)
    }
    else{
      imageIndex= imageArray.length -1
    }
        

        imageRef.current.src= imageArray[imageIndex]
    }

}
  })
})
  

  return (
    <>
      <section className="parent-section ">
        <div className="page-1 py-1  ">
           <div 
           ref={imageDivRef}
          className='absolute  overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:left-[30vw] left-[30vw] lg:top-96  -top-80'
          >
            {/* */}
          <img 
          ref={imageRef} 
          className='h-full object-cover w-full'
           src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

          <div className='relative font-[font2]'>
            
            <div className='lg:mt-[85vh] mt-[45vh]'>
              <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
                Seven7y <br />
                Tow
              </h1>
            </div>
             <div className='lg:pl-[40%]  lg:mt-20 mt-4 p-3'>
              <p className='lg:text-6xl text-xl leading-tight'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
        <div className="page-2 h-screen"></div>
      </section>
    </>
  );
};

export default Agence;
