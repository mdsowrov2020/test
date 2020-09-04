import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, AndroidPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';
import Carousel from 'react-elastic-carousel';


//---Query---//
import Query from '../Query';
import ANDROID_DEVELOPMENT_PRICE_QUERY from '../../queries/price/android_development_query';

export default function AndroidApp(props) {
  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 420, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 850, itemsToShow: 1 },
  { width: 1150, itemsToShow: 1},
];
  return (
    <>
      {AndroidPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>

            <Query query={ANDROID_DEVELOPMENT_PRICE_QUERY} id={null}>
            {({ data: { pricing } }) => {
              return(
              <div className="container row center">
                    <Carousel breakPoints={breakPoints} showArrows={false}>
            {pricing.Plans.map((val, index) => {
              return (
                <PriceCommonCard
                  heading={val.Package}
                  imgsrc={val.imgsrc.url}
                  price={val.Amount}
                  service_one={val.Description}

                />
              );
            })}
                   </Carousel>
            </div>
          );
          }}
            </Query>
          </div>
        </div>
      </section>
    </>
  );
}
