import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, FlutterPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';

//---Query---//
import Query from '../Query';
import FLUTTER_DEVELOPMENT_PRICE_QUERY from '../../queries/price/flutter_development_query';
//--Query-ends--//
export default function FlutterApp(props) {
  return (
    <>
      {FlutterPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>
            <Query query={FLUTTER_DEVELOPMENT_PRICE_QUERY} id={null}>
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
