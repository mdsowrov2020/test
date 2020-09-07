import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, WebDesignPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';

//---Query---//
import Query from '../Query';
import WEB_DESIGN_PRICE_QUERY from '../../queries/price/web_design_query';
//--Query-ends--//
export default function WebDesignPrice(props) {
  return (
    <>
      {WebDesignPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12'></div>
            <Query query={WEB_DESIGN_PRICE_QUERY} id={null}>
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
