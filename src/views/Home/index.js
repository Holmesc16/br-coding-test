import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import { useServiceFetch } from "../../utils";
import { StyledWrapper } from "./styles";
import Map from '../../components/Map'

const url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

const Home = props => {
  const { restaurants, loading } = useServiceFetch(url);
  let col1 = [],
    col2 = [];

  restaurants !== null
    ? restaurants.map((restaurant, i) =>
        i % 2 === 0 ? col1.push(restaurant) : col2.push(restaurant)
      )
    : (col1 = col1.concat(col2));

  const twoColumnLayout = () => {
    return (
      <div>
        {restaurants !== null ? (
          <StyledWrapper>
            <div className="row">
              <div className="column">
                <div className="first-column">
                  {col1.map((restaurant, i) => {
                    return (
                      <RestaurantCard
                        display="col1"
                        src={restaurant.backgroundImageURL}
                        name={restaurant.name}
                        category={restaurant.category}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="column">
                <div className="second-column">
                  {col2.map((restaurant, i) => {
                    return (
                      <RestaurantCard
                        display="col2"
                        src={restaurant.backgroundImageURL}
                        name={restaurant.name}
                        category={restaurant.category}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            )
          </StyledWrapper>
        ) : (
          ""
        )}
      </div>
    );
  };

  const singleColumnLayout = () => {
        return (
            <div>
            {restaurants !== null ? (
                <StyledWrapper>
                  <div className="row">
                    <div className="column">
                      <div className="single-column">
                        {restaurants.map((restaurant, i) => {
                          return (
                            <RestaurantCard
                              src={restaurant.backgroundImageURL}
                              name={restaurant.name}
                              category={restaurant.category}
                              key={i}
                            />
                          );
                        })}
                      </div>
                    </div>
                </div>
                </StyledWrapper>
                        ) : ''
                }
            </div>
        )}
   const setLayout = () => {
        if (window.innerWidth <= 769) {
            return singleColumnLayout()
        } else {
            return twoColumnLayout()   
        }
    }
  return (
      <div>
          <Header showBackButton={false}/>
          {/* <Map/> */}
        {setLayout()}
          <Footer/>
      </div>
  )
};

export default Home;