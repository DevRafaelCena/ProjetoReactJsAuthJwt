import React ,{useEffect,useState}  from 'react';
import Webcam  from "react-webcam" ;
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Button } from '@material-ui/core';
const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
  };
  
  export default  function WebcamCapture() {
   
  const [imageSrc, setImageSrc] = useState('')

        const webcamRef = React.useRef(null);
      
    const capture = (event) => {
        event.preventDefault();
           setImageSrc(webcamRef.current.getScreenshot())
          };


          
 
    return (
      <>
      <Grid  xs={12} container spacing={2}> 
      <Grid item xs={6} spacing={2}>
        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
        </Grid><Grid item xs={6} spacing={2}>
<img margin="10px" src={imageSrc} />
</Grid></Grid>
<Button variant="contained" color="secondary" onClick={capture}>Capturar Nova Foto</Button>
        <Button variant="contained" color="primary" onClick={capture}>Salvar</Button>
      </>
    );
  };