import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
    state = { 
        photoLikes: 0,
        showDescription: false
    }

    likePhoto = () => {
        console.log('clicked like photo button');
        this.setState({
            photoLikes: this.state.photoLikes + 1
        });
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