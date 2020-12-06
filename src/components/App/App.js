import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  // set initial state of photoGallery to an empty array
  state = {
    photoGallery: []
  }
  // call get request on page load
  componentDidMount() {
    this.getPhotoGallery();
  }
  // get photo collection from server and set new state to gallery data
  getPhotoGallery = () => {
    axios.get('/gallery').then(res => {
      console.log('response from database get request', res.data);
      this.setState({
        photoGallery: res.data
      });
    }).catch(err => {
      console.log('Error in get request', err);
      alert('Unable to get photo gallery.')
    })
  }

  render() {
    // test that state is changing correctly after get request
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <GalleryList gallery={this.state.photoGallery}/>
      </div>
    );
  }
}

export default App;
