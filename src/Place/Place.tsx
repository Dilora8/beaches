import img from './../assets/cristofer-maximilian-vWxE6Ejr9j0-unsplash.svg'
import img1 from './../assets/jcob-nasyr-67sVPjK6Q7I-unsplash.svg'
import img2 from './../assets/lalo-hernandez-Amo081zdJsI-unsplash.svg'


const Place = () => {
  return (
    <div className='w-[90%] h-[80vh] mx-auto'>
        <div className='text-center mb-10'>
            <h1 className='text-3xl font-medium'>Explore Beautiful Place</h1>
        </div>
        <div className='flex mx-auto w-[80%] gap-10'>
            <div className='w-[295px] h-[373px] relative' style={{backgroundImage: `url(${img})`}}>
                <div className='absolute w-[257px] h-[78px] bg-white rounded-lg text-center bottom-3 left-3 pt-2'>
                    <h3 className='text-2xl'>Drini Beach</h3>
                    <p className='text-base text-[#959595]'>Yogyakarta, Indonesia</p>
                </div>
            </div>
            <div className='w-[295px] h-[373px] relative' style={{backgroundImage: `url(${img1})`}}>
                <div className='absolute w-[257px] h-[78px] bg-white rounded-lg text-center bottom-3 left-3 pt-2'>
                    <h3 className='text-2xl'>Baron Beach</h3>
                    <p className='text-base text-[#959595]'>Yogyakarta, Indonesia</p>
                </div>
            </div>
            <div className='w-[295px] h-[373px] relative' style={{backgroundImage: `url(${img2})`}}>
                <div className='absolute w-[257px] h-[78px] bg-white rounded-lg text-center bottom-3 left-3 pt-2'>
                    <h3 className='text-2xl'>Trisik Beach</h3>
                    <p className='text-base text-[#959595]'>Yogyakarta, Indonesia</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Place