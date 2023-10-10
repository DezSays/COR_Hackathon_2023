import React from 'react';
import '../../styles/footer.css'
import Logo from '../../assets/Asset+1.png'
const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="images">
          <div className="image0">
            <img src={Logo} width="178px" height="48.62px" alt="Image0" />
          </div>
          
          <div className="image2">
            <img src="https://images.squarespace-cdn.com/content/v1/645d07eef735e47a5fe5030e/d39280c1-f90e-4900-9035-a5f867eb3a80/Candid.png?" width="83.56px" height="83.55px" alt="Image2" />
          </div>
          <div className="image1">
            <a target='blank' href="https://www.charitynavigator.org/ein/582194642">
              <img src="//images.squarespace-cdn.com/content/v1/645d07eef735e47a5fe5030e/1136c8eb-c835-4313-b7ae-68138afcd9b8/Four-Star+Rating+Badge+-+Full+Color.png?" width="83.56px" height="83.55px" alt="Image1" />
            </a>
          </div>
          <div className="image3">
            <a target='blank' href="https://analytics.excellenceingiving.com/overview/city-of-refuge/">
              <img src="https://images.squarespace-cdn.com/content/v1/645d07eef735e47a5fe5030e/1ad3d97b-bc22-45da-991a-ecc9694fbffa/EIG+Certified+Transparent+Logo.png?" width="83.56px" height="83.55px" alt="Image3" />
            </a>
          </div>
        </div>
        <p 
          style={{
            textAlign: 'center',
            whiteSpace: 'pre-line',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.9s',
            transitionDelay: '0.470833s',
            marginTop: '70px',
          }}
          className="preFade fadeIn"
        >
          © 2023 City of Refuge, Inc. All Rights Reserved.
        </p>
        <p
          style={{
            textAlign: 'center',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.9s',
            transitionDelay: '0.475s',
          }}
        >
          Registered 501(c)(3). EIN: 58-2194642
        </p>
      </footer>
    </div>
  );
};

export default Footer;
