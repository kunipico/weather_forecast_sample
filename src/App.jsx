import './App.css'
import Weather from './components/Weather'

function App() {

  return (
    <>
    <div className='text-gray-700 text-3xl underline mb-2 items-center '>
    Weather Application
    </div>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
        <Weather city_name="paris" />
        <Weather city_name="Los Angeles" />
      </div>
    </>
  )
}

export default App
