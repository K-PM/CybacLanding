import VideoThumb from '../assets/images/tecCyn.png'
import ModalVideo from './modal-video'
import Video from '../assets/videos/Promocional.mp4'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">CYBAC <br/> <span >Grupo desarrollador</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Somos un grupo unido lleno de conocimientos que se fueron nutriendo a base de los años, contamos con una experiencia inigualable.</p>
             
            </div>
          </div>

         <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="CYBAC PROMOCION"
            video={Video}
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}