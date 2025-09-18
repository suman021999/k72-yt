import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const Projects = () => {





   const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  },{
    image1: 'https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg'
  },
]



  gsap.registerPlugin(ScrollTrigger)

   useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })
  return (
    <>
      <section className='lg:p-4 p-2 mb-[100px]'>
        <div className=' pt-[45vh]'>
          <h2 className='relative font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets <span className='absolute text-2xl'>16</span></h2>
        </div>

        <div className='-lg:mt-20 lol'>
          {projects.map((index,id)=>(
            
            <div key={id} className='hero lg:h-[70%] w-full flex lg:flex-row flex-col lg:gap-4 gap-2 mb-4'>
              <ProjectCard image1={index.image1} image2={index.image2}/>
            </div>
          ))}      
        </div>
      </section>
    </>
  )
}

export default Projects
