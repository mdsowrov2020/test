import React from 'react';
import FooterLogo from '../images/somikoron.png';
import FooterCommon from '../Footer/FooterCommon';
//---Query---//
import Query from '../Query';
import CONTACTS_QUERY from '../../queries/footer/contacts';
const Footer = () => {
  return (
    <Query query={CONTACTS_QUERY} id={null}>
      {({ data: { contacts } }) => {
        return(
          <div>
          {contacts.map((val,index) => {
            return (
              <FooterCommon
                details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus odio, imperdiet sit amet rutrum eu, mattis ut est. '
                title='Somikoron IT'
                contact_footer_heading='Contact Us'
                num1={val.Phone}
                // num2='01258963547'
                // num3='01258963547'
                footer_imail={val.Email}
                footer_service_heading='Services'
                footer_quick_headin='Useful Links'
              />
  );
})}
</div>
);
}}
    </Query>
  );
};

export default Footer;
