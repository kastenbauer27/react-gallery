import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

class GalleryItem extends Component {
    state = { 
        photoLikes: 0,
        showDescription: false
    }

    likePhoto = () => {
        console.log('clicked like photo button');
        axios.put(`/gallery/like/${this.props.photo.id}`)
        .then(res => {
            this.setState({
                photoLikes: this.state.photoLikes + 1
            });
        }).catch(err => {
            console.log('error in liking photo', err);
            alert('Unable to like photo right now, please try again later.')
        })
    }

    toggleDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        });
    }

    render() { 
        return ( 
            <div className="GalleryItem">
                {this.state.showDescription ?
                    <div className="photoDescription" onClick={this.toggleDescription}>
                        <p>{this.props.photo.description}</p>
                    </div> :                
                    <img src={this.props.photo.path} onClick={this.toggleDescription}/>
                }
                <button className="likeBtn" onClick={this.likePhoto}>Awesome Photo!</button>
                <p>{this.state.photoLikes} people have liked this photo!</p>
            </div>
         );
    }
}
 
export default GalleryItem;