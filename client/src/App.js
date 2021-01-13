import React from "react";
import { hot } from 'react-hot-loader/root';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  render() {
    // const { name } = this.props;
    return (
      <div>
        <h1>
          React is running! Let's get started!
        </h1>
        <Button variant="contained">this is a material UI button</Button>
      </div>
    );
  }
}

export default hot(App);