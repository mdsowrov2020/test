import React from 'react';
import FooterLogo from '../images/somikoron.png';
import FooterCommon from '../Footer/FooterCommon';
//---Query---//
import Query from '../Query';
import FOOTER_QUERY from '../../queries/footer/footer';
const Footer = () => {
  return (
    <Query query={FOOTER_QUERY} id={null}>
      {({ data: { footer } }) => {
        var list=[];
        list.push(footer);
        return(
          <div>
          {list.map((val,index) => {
            let i=0;
            for (i in footer.footer_contacts){
            return (
              <FooterCommon
                details={val.Description}
                title='Somikoron IT'
                contact_footer_heading='Contact Us'
                num1={val.footer_contacts[i].Phone}
                // num2='01258963547'
                // num3='01258963547'
                footer_imail={val.footer_contacts[i].Email}
                footer_service_heading='Services'
                footer_quick_headin='Useful Links'
                facebook_url={val.fb_url}
                youtube_url={val.yt_url}
                instagram_url={val.in_url}
              />
  );
}
})}
</div>
);
}}
    </Query>
  );
};

export default Footer;
