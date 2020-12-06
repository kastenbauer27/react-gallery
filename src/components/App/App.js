import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {

  componentDidMount() {
    this.getPhotoGallery();
  }

  getPhotoGallery = () => {
    axios.get('/gallery').then(res => {
      console.log('response from database get request', res.data);
    }).catch(err => {
      console.log('Error in get request', err);
      alert('Unable to get photo gallery.')
    })
  }

  render() {

    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList />
      </div>
    );
  }
}

export default App;
