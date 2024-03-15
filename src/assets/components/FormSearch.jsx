import {useRef} from 'react'
import '../styles/FormSearch.css'

const FormSearch = ({ setLocationSelect }) => {

  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setLocationSelect(inputSearch.current.value.trim())
  }

  return (
    <form className='form' onSubmit={handleSubmit} action="">
      <input className='form__input' ref={inputSearch} type="text" placeholder='ingresa numero del 1 al 126'/>
      <button className='form__btn' >search</button>
    </form>
)}

export default FormSearch