import loading from '../../../public/images/loading.jpg'

const ancho = 150
const Loader = () => {
  return (
    <div>cagando...
    <img src={loading} alt="loading" style={{width:"150px", height:"auto"}} />
    </div>
  )
}

export default Loader