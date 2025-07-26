import landing from '../assets/landing.png'

function Land(){
    return(
        <div className='flex  justify-center'>
            <img src={landing} alt="landing page" className='flex w-220 h-111 py-10' />
        </div>
    )
}
export default Land