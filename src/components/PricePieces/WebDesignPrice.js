import React from 'react';
import PriceCommonCard from './PriceCommonCard';
import { DataSciencePriceData, WebDesignPriceData } from '../Data';
import PriceCommonBanner from './PriceCommonBanner';
export default function WebDesignPrice(props) {
  return (
    <>
      {WebDesignPriceData.map((val, index) => {
        return <PriceCommonBanner service_title={val.title} />;
      })}

      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'></div>

            {DataSciencePriceData.map((val, index) => {
              return (
                <PriceCommonCard
                  heading={val.heading}
                  imgsrc={val.imgsrc}
                  price={val.price}
                  service_one={val.service_one}
                  service_two={val.service_two}
                  service_three={val.service_three}
                  service_four={val.service_four}
                  service_five={val.service_five}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
