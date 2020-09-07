import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, DmpriceServiceTitle } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';

//---Query---//
import Query from '../Query';
import DIGITAL_PRICE_QUERY from '../../queries/price/digital_marketing_query';
export default function DigitalMarketPrice(props) {
  return (
    <>
      {DmpriceServiceTitle.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12'></div>
            <Query query={DIGITAL_PRICE_QUERY} id={null}>
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
                          // service_two={val.service_two}
                          // service_three={val.service_three}
                          // service_four={val.service_four}
                          // service_five={val.service_five}
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
