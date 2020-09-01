import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, WebDevPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';


//---Query---//
import Query from '../Query';
import WEB_DEVELOPMENT_PRICE_QUERY from '../../queries/price/web_development_query';
export default function WebDevPrice(props) {
  return (
    <>
      {WebDevPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
            <Query query={WEB_DEVELOPMENT_PRICE_QUERY} id={null}>
            {({ data: { pricing } }) => {
              return(
              <div className="container row center">
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
