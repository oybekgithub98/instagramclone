import React from 'react';
import './OwlCarousel.css';
import Carousel from 'react-owl-carousel3';

const OwlCarousel = () => {
    const carouselJson = [
        {
            id: 0,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Asadbek qochqorov",
        },
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Islombek programmist",
        },
        {
            id: 2,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Jahongir usta",
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Mavlonbek kobult",
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Javlonbek",
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Ismoil dengi",
        },
        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Jamoldin",
        },
        {
            id: 7,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-3xyWXWtCM9dlXJsdnFR23R1yffv13RUtQ&usqp=CAU",
            title: "Nurillo eshonqulovasdsd",
        },
    ]



    const cardRemove = (e) => {
        e.target.parentElement.remove()
    }
   

    return (
        <div className="carousel">
            <h4>Recommendations for Members</h4>
            <Carousel
                className="carousel_car"
                margin={20}
            >
                {
                    carouselJson.map((data) => {
                        return (
                            <div key={data.id} className="card">
                                <img src={data.image} alt="" />
                                <h4>{data.title}</h4>
                                <p>follow you</p>
                                <button>follow</button>
                                <div className="remove" onClick={(e) => cardRemove(e)}>
                                    X
                                </div>
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default OwlCarousel;