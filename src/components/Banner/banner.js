import React from 'react';
import Search from './search';
import BannerNav from './banner_nav';
import banner from './Banner.module.css';


const Banner = () => {

  return (
      <div className={banner.banner}>
        <div className={banner.center}>
         Plan everything of your journey here !
          <div className={banner.form}>
            <Search />
          </div>
          <div className={banner.nav}>
            <BannerNav />
          </div>
        </div>
      </div>
  );
}

export default Banner;
