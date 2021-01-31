import { Button } from '@material-ui/core';
import React from 'react'
import "./SearchPage.css";
import SearchResult from './SearchResult';
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__info">
                <p> 62 near by </p>
                <h1> Stays near by</h1>
                <Button 
                    variant="outlined"> Cancellation Flexibility
                 </Button>
                 <Button variant="outlined"> Type of place</Button>
                 <Button variant="outlined"> Price</Button>
                 <Button variant="outlined"> Rooms and beds</Button>
                 <Button variant="outlined"> Morefilters</Button>

            </div>
            <SearchResult img="https://a0.muscache.com/im/pictures/64417970/6cf9af85_original.jpg?im_w=1200"
                        location="Galle"
                        title="Welcome to Huma Terra Green Lodge"
                        description="Treehouse hosted by Solange"
                        star={4.9}
                        price="$234 / night"
                        total="$3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/64417970/6cf9af85_original.jpg?im_w=1200"
                        location="Galle"
                        title="Welcome to Huma Terra Green Lodge"
                        description="Treehouse hosted by Solange"
                        star={4.9}
                        price="$234 / night"
                        total="$3000 total" />
            <SearchResult img="https://a0.muscache.com/im/pictures/64417970/6cf9af85_original.jpg?im_w=1200"
                        location="Galle"
                        title="Welcome to Huma Terra Green Lodge"
                        description="Treehouse hosted by Solange"
                        star={4.9}
                        price="$234 / night"
                        total="$3000 total" />
        </div>
    )
}

export default SearchPage
