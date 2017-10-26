import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { styles } from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class CarouselSlider extends Component {
    constructor(props) {
        super(props)
        this.images = [
            {
                name: '.assets/1.jpeg',
                legend: 'First Slide',
                path: require('./assets/1.jpeg')
            },
            {
                name: '.assets/2.jpeg',
                legend: 'Second Slide',
                path: require('./assets/2.jpeg')
            },
            {
                name: '.assets/3.jpeg',
                legend: 'Third Slide',
                path: require('./assets/3.jpeg')
            },
            {
                name: '.assets/4.jpeg',
                legend: 'Fourth Slide',
                path: require('./assets/4.jpeg')
            },
            {
                name: '.assets/5.jpeg',
                legend: 'Fifth Slide',
                path: require('./assets/5.jpeg')
            },
            {
                name: '.assets/6.jpeg',
                legend: 'Sixth Slide',
                path: require('./assets/6.jpeg')
            },
            {
                name: '.assets/7.jpeg',
                legend: 'Seventh Slide',
                path: require('./assets/7.jpeg')
            }
        ]
    }

    render() {
        return (
            <Carousel showArrows={true} >
                {this.images.map(function (image, number) {
                    return (
                        <div key={number + image.name}>
                            <img src={image.path} />
                            <p className="legend">{image.legend}</p>
                        </div>
                    )}
                )}
            </Carousel>
    )
}}