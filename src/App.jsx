import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandonNumber from './services/getRandonNumber'
import LocationInfo from './assets/components/LocationInfo'
import ResidentCard from './assets/components/ResidentCard'
import FormSearch from './assets/components/FormSearch'
import Header from './assets/components/Header'
import error from '../public/images/error.png'
import Loader from './assets/components/Loader'


function App() {

 const randomLocation=getRandonNumber(126)
 const [locationSelect, setLocationSelect] = useState(randomLocation)

  const url = `https://rickandmortyapi.com/api/location/${locationSelect || getRandonNumber(126)}`
  const [location, getLocation, hasError, loading] = useFetch(url) 

  useEffect(() => {
    getLocation()
  }, [locationSelect])


  return (
    <div className='app'>
      <Header />
      <FormSearch 
      setLocationSelect={setLocationSelect}
      />
      {hasError ? (
        <>
       <p>Dios... te dije que ingresaras un numero entre 1 y 126</p>
       <img className='error' src={error} alt="error" />
       </>
      ) : 
      loading
      ? <Loader/>
      : (
        <>
        <LocationInfo 
      location={location}
      />
      <div className='container-resident'>
        {
          location?.residents.map(url => (
            <ResidentCard 
              key={url}
              url={url}
            />
          ))
        }
      </div>
        </>
      )
    }

      
    </div>
  )
}

export default App
