import React,{useState, useEffect} from "react";
import axios from "axios";
import Header from "./header";
import Card from "./card";
import styled from "styled-components";


const AppDiv = styled.div`
font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
sans-serif;
text-align: center;
`;
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
    <AppDiv>
      <section className ="header">
      <Header/>
      </section>
      <section className="mainContent">
      <Card media={media}/>
      </section>

      </AppDiv>
  );
}

export default App;
