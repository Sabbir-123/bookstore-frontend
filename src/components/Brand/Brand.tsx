import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link to='/' > 
      <div className='max-w-[140px]' >
        <h1>
            Book-Store
        </h1>
        {/* <Image src={logo} width={1} height={.220} layout='responsive' alt='brand' />   */}
      </div>    
    </Link>
  )
}

export default Brand