import React,{useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import Card from "./card";

function App() {
const [media, setMedia] = useState("");
const [error, setError] = useState();

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=mdEHROZHk1G1TALx7LBw4jybVmzGbDtsme1mssOI")
  
  .then(response =>{
    setMedia(response.data)
  })
  .catch( err => {
    console.log('sorry no  outer-space', err)
    setError(err)
  })

},[error]);
console.log(media)

  return (
    <div className="App">
      <section className ="header">
      <Header/>
      </section>
      <section className="mainContent">
      <Card media={media}/>
      </section>

    </div>
  );
}

export default App;
