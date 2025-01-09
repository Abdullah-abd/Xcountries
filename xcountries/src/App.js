
import './App.css';
import Countries from './component/Countries';
import { useEffect,useState } from 'react';
function App() {
  const [countryData,setCountryData] = useState([])
  useEffect(()=>{
    const getCountriesFlag= async()=>{
      try {
        const res = await fetch("https://xcountries-backend.azurewebsites.net/all")
        const data =await res.json();
        setCountryData(data);
      } catch (error) {
        console.log("Error fetching data:",error);
      }
    }
    getCountriesFlag();
  },[])
  return (
    <div className="App">
      {countryData.map((Data)=>{
        return(
          <Countries Data={Data} key={Data.abr}/>
        )
      })}
    </div>
  );
}

export default App;
