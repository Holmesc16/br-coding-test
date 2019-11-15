import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantCard from "../../components/RestaurantCard";
import { useServiceFetch } from "../../utils";
import { StyledWrapper } from "./styles";
import Detail from '../Detail'

const url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

const Home = props => {
  const { restaurants } = useServiceFetch(url);
  const [state, setState] = useState({
    showDetailsView: false,
    restaurant: {},
    showBackButton: false
  })

  let col1 = []
  let col2 = []

  restaurants !== null
    ? restaurants.map((restaurant, i) =>
        i % 2 === 0 ? col1.push(restaurant) : col2.push(restaurant)
      )
    : (col1 = col1.concat(col2));

  const twoColumnLayout = () => {
    return (
      <div>
        {restaurants !== null ? (
          <div>
          <StyledWrapper style={{'display' : state.showDetailsView === true ? 'none' : 'contents'}}>
            <div className="row">
              <div className="column">
                <div className="first-column">
                  {col1.map((res, i) => {
                    return (
                      <RestaurantCard
                        onClick={() => {
                          setState({showDetailsView:true, restaurant:res, showBackButton: !state.showBackButton})
                          console.log('state', state)
                          }
                        }
                        display="col1"
                        detail={state.showDetailsView}
                        src={res.backgroundImageURL}
                        name={res.name}
                        category={res.category}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="column">
                <div className="second-column">
                  {col2.map((res, i) => {
                    return (
                      <RestaurantCard
                        onClick={() => {
                          setState({showDetailsView:true, restaurant:res, showBackButton: !state.showBackButton})
                          console.log('state', state)
                          }
                        }
                        display="col2"
                        detail={state.showDetailsView}
                        src={res.backgroundImageURL}
                        name={res.name}
                        category={res.category}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </StyledWrapper>
          <Detail show={state.showDetailsView} restaurant={state.restaurant}/>
          </div>
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
              <div>
                <StyledWrapper style={{'width' : state.showDetailsView === true ? '0px' : 'inherit', 'height' : state.showDetailsView === true ? '250px' : 'inherit'}}>
                  <div className="row">
                    <div className="column">
                      <div className="single-column">
                        {restaurants.map((res, i) => {
                          return (
                            <RestaurantCard
                              onClick={() => {
                                setState({showDetailsView:true, restaurant:res, showBackButton: !state.showBackButton})
                                console.log('state', state)
                                }
                              }
                              detail={state.showDetailsView}
                              src={res.backgroundImageURL}
                              name={res.name}
                              category={res.category}
                              key={i}
                              />
                          );
                        })}
                      </div>
                    </div>
                </div>
                </StyledWrapper>
                <Detail show={state.showDetailsView} restaurant={state.restaurant}/>
                </div>
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
          <Header show={state.showBackButton}
           onClick={() => setState({showDetailsView:false, restaurant:state.restaurant, showBackButton: !state.showBackButton
           })}
           />
        {setLayout()}
          <Footer show={state.showBackButton} />
      </div>
  )
};

export default Home;