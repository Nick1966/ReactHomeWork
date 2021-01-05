import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {CarouselItem} from "react-bootstrap";
import photoImg from '../assets/photo1.jpg';
import dphotoImg from '../assets/photo2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={photoImg}
                        alt="Rose"
                    />
                    <Carousel.Caption>
                        <h3>Rose</h3>
                        <p>Какая красивая роза у нас на виду!!!</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={dphotoImg}
                        alt="Rose"
                    />
                    <Carousel.Caption>
                        <h3>Food</h3>
                        <p>Какая красивая еда у нас на виду!!!</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={photoImg}
                        alt="Rose"
                    />
                    <Carousel.Caption>
                        <h3>Rose</h3>
                        <p>Какая красивая роза у нас на виду!!!</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

