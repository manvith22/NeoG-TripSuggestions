import React,{useState} from 'react';
import "./styles.css";

const location = {
  spring: [
    {
      name: " Wayanad",
      image: "https://travelogyindia.b-cdn.net/storage/app/upload/wayanad-tour.jpg",
      rating: "4/5",
      State: "Kerala"
    },
    {
      name: "Darjeeling",
      image: "https://travelogyindia.b-cdn.net/storage/app/itinerary/174/darjeeling-tea-estate-sikkim.jpg",
      rating: "4.5/5",
      bestPlace: "West Bengal"
    },
    {
      name: "Tawang",
      image: "https://travelogyindia.b-cdn.net/storage/app/upload/tawang-tour.jpg",
      rating: "5/5",
      State: "Arunachal Pradesh"
    }
  ],
  summer: [
    {
      name: "Kashmir",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/20-places-to-visit-in-india-for-a-summer-vacation/Kashmir.jpg&w=640&q=75",
      rating: "4/5",
      State: "Kashmir"
    },
    {
      name: "Shillong",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/20-places-to-visit-in-india-for-a-summer-vacation/Shillong.jpg&w=640&q=75",
      rating: "3.5/5",
      State: "Meghalaya"
    },
    {
      name: "Andaman and Nicobar Islands",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/20-places-to-visit-in-india-for-a-summer-vacation/Andaman-and-Nicobar.jpg&w=640&q=75",
      rating: "4.5/5",
      State: "Andaman and Nicobar Islands"
    }
  ],
  monsoon: [
    {
      name: "Goa",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/top-15-places-to-visit-in-monsoon-in-india/Goa.jpg&w=640&q=75",
      rating: "4/5",
      State: "Goa"
    },
    {
      name: "Coorg",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/top-15-places-to-visit-in-monsoon-in-india/Coorg,-Karnataka.jpg&w=640&q=75",
      rating: "3/5",
      State: "Karnataka"
    },
    {
      name: "Munnar",
      image: "https://www.intermiles.com/_next/image?url=https://www.intermilesresources.com/iwov-resources/images/blog/top-15-places-to-visit-in-monsoon-in-india/Munnar-Kerala.jpg&w=640&q=75",
      rating: "5/5",
      State: "Kerala"
    }
  ],
  winter: [
    {
      name: "Gulmarg",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Gulmarg.jpg",
      rating: "5/5",
      State: "Kashmir"
    },
    {
      name: "Shimla-Kufri",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Shimla.jpg",
      rating: "4/5",
      State: "Himachal Pradesh"
    },
    {
      name: "Auli",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Auli.jpg",
      rating: "4/5",
      State: "Uttarakand"
    }
  ]
};

var dataToArray = Object.keys(location);

function App() {
  
  const [trip,setTrip] = useState("spring");
  function clickHandler(item){
    setTrip(item);
  }

  return (
    <div className="App">
      <nav>Trip Suggestions via Seasons</nav>
      <div className="container">
        <div className="options">
          <h3 classname="seasons">Select Season</h3>
          <div className="category-list">
            {
              dataToArray.map((item) =>{
                return <button className="list-items" onClick={() => clickHandler(item)}>
                     {item}
                </button>
              })
            }
          </div>
          <hr />
          <div className="options-details">
          <h3 className="sub-heading">Trip:</h3>
            <ul>
              {
                location[trip].map((tripDetails) =>{
                  return (
                     <li className="trip">
                       <div className="trip-details">
                         <img src={tripDetails.image} alt="secenary" />
                       </div>
                       <div className="details-box">
                           <h3>{tripDetails.name}</h3>
                          <p>
                           <b>State: </b>
                            {tripDetails.state}
                          </p>
                          <p>
                             <b>Rating: </b>
                            {tripDetails.rating}
                          </p>
                        </div>
                     </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
