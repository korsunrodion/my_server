import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class MovieCard extends Component {
    render() {
        return (
            <div class='movieCard'>
                <img src={this.props.img} alt='img'/>
                <h2>{this.props.title}</h2>
                <Button variant="success">Купить билет</Button>
            </div>
        );
    }
}

export default MovieCard;