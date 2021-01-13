import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';
const axios = require('axios');

const App = (props) => {

  // seattle won't be the default once everything is set up, just for now
  const [city, setCity] = useState('seattle');
  const [images, setImages] = useState([]);

  const {
    name,
    data
  } = city;

  // const {
  //   homes,
  //   activities,
  //   nearbyCities
  // } = data;

  const getCityData = () => {
    axios.get(`http://localhost:3000/${city}`)
    .then(response => {
      setCity(response.data);
    })
    .catch(err => console.log(err));
  };

  useEffect(() => { getCityData() }, []);


  return (
    <div>
      <h1>
        React is running! Let's get started!
      </h1>
      <Button variant="contained">this is a material UI button</Button>
    </div>
  );
};

export default hot(App);