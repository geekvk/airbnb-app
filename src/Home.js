import React from 'react'
import "./Home.css";
import Card from "./Card";
import Banner from './Banner';
import Footer from "./Footer.css";
function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
                <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
                <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
            </div>
            <div className="home__section">
            <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
                <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
                <Card src="https://a0.muscache.com/im/pictures/be3fd326-e669-4050-ab8c-205010834f87.jpg?im_w=720"
                      title="Luxury 3BR Suite - Spectacular City and Lake Views"
                       description="Entire apartment hosted by Wei"
                       price="$130"/>
            </div>
        </div>
    )
}

export default Home
