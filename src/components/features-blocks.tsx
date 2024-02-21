import Hino from '../assets/images/Hino.jpg'
import Gine from '../assets/images/ginecolojpg.jpg'
import Gourm from '../assets/images/gourm.jpg'
import Mango from '../assets/images/mag.jpg'
import Titani from '../assets/images/titaniu.jpg'
import Pad from '../assets/images/pac.jpg'

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Proyectos Realizados</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://hinochiapas.com"> <img className="md:max-w-none mx-auto rounded" src={Hino} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Hino Chiapas</h4>
              <p className="text-gray-600 text-center">Cuenta con una presencia en más de 90 países alrededor del mundo.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://www.amilcarbrindis.com"> <img className="md:max-w-none mx-auto rounded" src={Gine} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Dr. Amilcar Brindis</h4>
              <p className="text-gray-600 text-center">Sitio medico donde podras encontrar diversas soluciones de la salud.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://gourmand.mx"> <img className="md:max-w-none mx-auto rounded" src={Gourm} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Mr. Gourmnad</h4>
              <p className="text-gray-600 text-center">Productos 100% artesanal, Actualmente esta en mantenimiento.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://www.magmar.com.mx"> <img className="md:max-w-none mx-auto rounded" src={Mango} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">MAGMAR</h4>
              <p className="text-gray-600 text-center">Es una empresa mexicana dedicada a la producción, empacado y comercialización.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://autobusestitanium.com"> <img className="md:max-w-none mx-auto rounded" src={Titani} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Titanium</h4>
              <p className="text-gray-600 text-center">Agencia de viajes.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <a href="https://www.padlock.mx"> <img className="md:max-w-none mx-auto rounded" src={Pad} alt="" width={350} /></a>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">padlock</h4>
              <p className="text-gray-600 text-center">Actualmente en construcción.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
