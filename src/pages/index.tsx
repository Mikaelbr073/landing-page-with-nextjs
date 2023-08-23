import Image from 'next/image'
import style from '../styles/backgroud.module.css'

export default function Home() {
  return (
    <div className='h-screen bg-gray-50 text-gray-600'>
     
       <div>
        {/* Header */}
        <div className='container mx-auto max-w-5xl px-4 h-24 flex items-center justify-between'>
          <div className='font-black text-gray-400'>
            Logo
          </div>
          <div className='hidden md:block'>
            <ul className='flex space-x-4'>
              <li>
                <a className='text-sm text-gray-600 hover:text-gray-800 hover:underline' href="">Como Reservar</a>
              </li>
              <li>
                <a className='text-sm text-gray-600 hover:text-gray-800 hover:underline' href="">Sobre Nós</a>
              </li>
              <li>
                <a className='text-sm text-gray-600 hover:text-gray-800 hover:underline' href="">Informações</a>
              </li>
              <li>
                <a className='text-sm text-gray-600 hover:text-gray-800 hover:underline' href="">Contato</a>
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <button className='text-gray-600 hover:text-gray-800'>
              <svg className='h-6 w-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*header/*/}

      {/*bannner*/}
      <div className={style.imagemBackground}>
        <div className='container mx-auto max-w-5xl px-4 h-full flex items-center justify-center'>
          <div>
            <div className='text-center'>
              <h1 className='text-gray-100 text-3xl'>Onde Você quer ir?</h1>
              <p className='text-green-100'>Escola o estado e cidade para achar os melhores resorts.</p>
            </div>
            <div>

            <div className='mt-7'>
              <form className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                <select className='bg-gray-50 px-2 py-2 border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha o Estado</option>
                </select>
                <select  className='bg-gray-50 px-2 py-2 border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha a Cidadde</option>
                </select>
                <button className='inline-flex items-center col-span-2 lg:col-span-1 text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className='h-4 w-4 mr-2 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>  
                Pesquisar</button>
              </form>
            </div>

            </div>
          </div>
        </div>
      </div>
      {/*bannner/*/}

      {/*featured resort*/}
      <div>
        <div className='container max-w-5xl mx-auto px-4 py-10'>
          <div className='flex flex-col-reverse lg:flex-row'>
            <div className='lg:pr-10'>
              <div className='text-sm text-gray-400 font-medium'>RESORT EM DESTAQUE</div>
              <div className='text-2xl'> Ecoresort Parai do forte Bhaia</div>
              <div className='text-sm text-gray-400 font-medium mt-2'>Hotel qualidade 5 estrelas</div>
              <div>
                <p className='text-sm text-gray-400 font-medium mt-4 mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis blanditiis, voluptatem molestias qui, consequuntur, harum nostrum recusandae cumque adipisci sunt quos ad. Quibusdam recusandae repellat voluptatum, cumque nemo ducimus.</p>
                <p className='text-sm text-gray-400 font-medium mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis blanditiis, voluptatem molestias qui, consequuntur, harum nostrum recusandae cumque adipisci sunt quos ad. Quibusdam recusandae repellat voluptatum, cumque nemo ducimus.</p>
    
              </div>
              <div className='mt-4'>
                <button  className='inline-flex items-center mt-3 text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                  Solicitar Reserva
                  <svg  className='w-4 h-4 ml-2' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                  </button>
              </div>
            </div>
            <div className=' flex-shrink-0 lg:ml-auto mb-5 lg:mb-0 '>
              <Image
              src='/images/featured-img.png'
              width={453}
              height={268}
              alt='teste'
              />
            </div>
          </div>
        </div>
      </div>
      {/*featured resort/*/}

      {/*resort grid*/}
      <div className="container max-w-5xl mx-auto px-4">
        <div>
          <h3 className='text-2xl text-center text-gray-500 font-semibold mb-8'>
          Conheça mais resorts</h3>
        </div>
        <div className='md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-4 md:space-y-0'>

          <div className='relative md:col-span-2 row-span-2 h-100'>
            <div className='absolute bottom-0 ml-4 mb-4 text-white font-semibold z-20'>
              Beach park resort
            </div>
            <Image
                className='absolute bottom-0 left-0 right-0 h-20 z-10'
                src='/images/image-shadow.png'
                width={800}
                height={460}
                alt='teste'
                />
            <Image
                className='w-full h-full object-cover rounded-lg overflow-hidden '
                src='/images/hotel-1.jpeg'
                width={800}
                height={460}
                alt='teste'
                />
          </div>

          <div className=' relative md:col-span-2 h-60'>
          <div className='absolute bottom-0 ml-4 mb-4 text-white font-semibold z-20'>
              Salinas do Maragogi
            </div>
            <Image
                className='absolute bottom-0 left-0 right-0 h-20 z-10'
                src='/images/image-shadow.png'
                width={800}
                height={460}
                alt='teste'
                />
            <Image
                className='w-full h-full object-cover rounded-lg overflow-hidden'
                src='/images/hotel-2.jpeg'
                width={1024}
                height={575}
                alt='teste'
                />
          </div>

          <div className='h-50 relative'>
          <div className='absolute bottom-0 ml-4 mb-4 text-white font-semibold z-20'>
              Grand Pallandium
            </div>
            <Image
                className='absolute bottom-0 left-0 right-0 h-20 z-10'
                src='/images/image-shadow.png'
                width={980}
                height={560}
                alt='teste'
                />
            <Image
                className='w-full h-full object-cover rounded-lg overflow-hidden'
                src='/images/hotel-3.jpeg'
                width={1280}
                height={720}
                alt='teste'
                />
          </div>

          <div className='relative'>
          <div className='absolute bottom-0 ml-4 mb-4 text-white font-semibold z-20'>
              Arraial d'ajuda Eco Resort
            </div>
            <Image
                className='absolute bottom-0 left-0 right-0 h-20 z-10'
                src='/images/image-shadow.png'
                width={800}
                height={460}
                alt='teste'
                />
            <Image
                className='w-full h-full object-cover rounded-lg overflow-hidden'
                src='/images/hotel-4.jpeg'
                width={900}
                height={0}
                alt='teste'
                />
          </div>

        </div>
      </div> 
      {/*resort grid/*/}

      {/*form resort*/}
      <div>
        <div className='container max-w-5xl mx-auto px-4 py-20 flex justify-center'>
        <form className='grid grid-cols-2 gap-4 md:grid-cols-3'>
                <select className='bg-gray-50 px-2 py-2 border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha o Estado</option>
                </select>
                <select  className='bg-gray-50 px-2 py-2 border-gray-300 rounded text-gray-500'>
                  <option value="">Escolha a Cidadde</option>
                </select>
                <button className='inline-flex items-center col-span-2 lg:col-span-1 text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded'>
                <svg className='h-4 w-4 mr-2 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                </svg>  
                Pesquisar</button>
          </form>
        </div>
      </div>
      {/*form resort/*/}

      {/*footer*/}
      <div className="border-t border-gray-200">
        <div className='container  max-w-5xl mx-auto px-4 flex mt-4 h-40 items-center justify-between'>
          <div className='font-black text-gray-400'>
            Logo
          </div>
        </div>
      </div>
      {/*footer/*/}
    </div>
  );
}
