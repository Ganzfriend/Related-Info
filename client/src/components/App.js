import React, {useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';

const App = (props) => {

  const [images, setImages] = useState([]);

  const {
    name,
    data
  } = props;

  const {
    homes,
    activities,
    nearbyCities
  } = data;



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