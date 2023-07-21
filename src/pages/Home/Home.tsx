
import Footer from '@/layouts/Footer';
import Illustration from '../../assets/images/hero-illustration.svg'
import GetStarted from './Partials/GetStarted';
import Why from './Partials/Why';
export default function Home() {
  return (
    <>
     <section className="relative overflow-hidden">
    {/* Bg */}
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

    {/* Illustration */}
    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img src={Illustration} className="max-w-none"  alt="Hero Illustration" />
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-28 pb-8 md:pt-36 md:pb-16">
        {/* Hero content */}

        <div className="max-w-4xl mx-auto text-center lg:py-24 md:py-16 py-10">
          {/* Copy */}
          <h2 className="text-xl md:text-5xl font-extrabold !leading-[1.3] font-jakarta mb-6"> Explore & Read  <br /> <span className='color-brand-2' > All Books</span> in One Place </h2>

          <p className="text-lg font-medium text-gray-500 mb-8">
          Unlock the Portal to Infinite Realms of Literature  Where 
            <br className="hidden md:block" />The Boundless Universe of Books Awaits, Guiding You on an Epic Expedition of Knowledge, Inspiration, and Wonder
          </p>

          {/* Button + Avatars */}
          <div className="sm:flex sm:items-center sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-5">
             
          </div>
        </div>
      </div>
    </div>
  </section>
  <Why/>
      <GetStarted/>
      <Footer />
    </>
  );
}
