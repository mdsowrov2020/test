import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, AndroidPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';

//---Query---//
import Query from '../Query';
import ANDROID_DEVELOPMENT_PRICE_QUERY from '../../queries/price/android_development_query';

export default function AndroidApp(props) {
  return (
    <>
      {AndroidPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12'></div>

            <Query query={ANDROID_DEVELOPMENT_PRICE_QUERY} id={null}>
              {({ data: { pricing } }) => {
                return (
                  <div className='container row justify-content-center'>
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
