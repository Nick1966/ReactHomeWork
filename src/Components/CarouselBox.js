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
                        <h3>City</h3>
                        <p>Какой красивый у нас вид</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={dphotoImg}
                        alt="Rose"
                    />
                    <Carousel.Caption>
                        <h3>Mountans</h3>
                        <p>Какой красивый у нас вид</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={photoImg}
                        alt="Rose"
                    />
                    <Carousel.Caption>
                        <h3>City</h3>
                        <p>Какой красивый у нас вид</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

