import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Summer = () => {
  return (
    <div>
        <section className='headers'>
            <header className='title-nav'>
                <div className='title'>
                    <h1>CHRISTINA VANESSA</h1>
                    <p>GREIFENSTEIN</p>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <a href='/'>
                                <div className='nav-sec'>
                                    <div></div>
                                    <p>Explore</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='/about'>
                                <div className='nav-sec'>
                                    <div></div>
                                    <p>About</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
        <section className='summer-in-october-contain'>
          <div className='img-11'>
            <img src="https://static.wixstatic.com/media/9246f9_6804207151c34a6f8223dedf4e5e3f35~mv2_d_1495_2267_s_2.jpeg/v1/crop/x_0,y_19,w_1490,h_2234/fill/w_313,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c24.jpeg" alt="girls" />
          </div>
          <div className='box-9'></div>
          <div className='img-details-7'>
              <h1>Summer in October</h1>
              <div className='para2'>
              <p>The clothes you need for a good</p>
              <p>hand with your girls</p>
              </div>
              <div>
                <p>– mock editorial for THE FADER</p>
              </div>
          </div>
          <div className='img-details-8'>  
            <h1>Key Services</h1>
            <div>
              <p>Research // Concept // Casting // Location Scouting //</p>
              <p>Styling // Art and Creative Direction // Editing</p>
            </div>
          </div>
          <div className='img-12'>
            <img src="https://static.wixstatic.com/media/9246f9_c42ac1b3e58e4765a71c9968bc526086~mv2_d_1516_2307_s_2.jpeg/v1/fill/w_443,h_666,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c23.jpeg" alt="girls" />
          </div>
          <div className='box-10'></div>
          <div className='img-13'>
            <img src="https://static.wixstatic.com/media/9246f9_5c2520010272411aa95488ef70a953f8~mv2_d_1495_2273_s_2.jpeg/v1/crop/x_52,y_6,w_1443,h_2250/fill/w_248,h_387,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c15.jpeg" alt="girls" />
          </div>
          <div className='box-11'></div>
          <div className='img-14'>
            <img src="https://static.wixstatic.com/media/9246f9_90a753e93ac24594b970c8f90bbdb257~mv2_d_1495_2273_s_2.jpeg/v1/crop/x_0,y_23,w_1495,h_1837/fill/w_414,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c17.jpeg" alt="girl" />
          </div>
          <div className='img-15'>
            <img src="https://static.wixstatic.com/media/9246f9_ca9950eb418e48f884b986c56250a055~mv2_d_1529_2273_s_2.jpeg/v1/fill/w_376,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c67.jpeg" alt="girl" />
          </div>
          <div className='box-12'></div>
          <div className='img-16'>
            <img src="https://static.wixstatic.com/media/9246f9_f615391ff5be48cc8a074ca8e92b7023~mv2_d_1529_2273_s_2.jpeg/v1/fill/w_208,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c62.jpeg" alt="girls" />
          </div>
          <div className='pre'>
            <h1>Previsualization</h1>
          </div>
          <div className='img-17'>
            <ul>
              <li><img src="https://static.wixstatic.com/media/9246f9_067832a8a7bb4c50a5b7b89a7df25166~mv2_d_4200_3150_s_4_2.png/v1/crop/x_294,y_49,w_3906,h_3010/fill/w_558,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/A5%20Magazine%20MockUp.png" alt="girls" /></li>
              <li><img src="https://static.wixstatic.com/media/9246f9_3d469aa1137f4ad7809de70e975e7917~mv2_d_2300_1650_s_2.png/v1/fill/w_600,h_430,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/34.png" alt="girls" /></li>
            </ul>
          </div>
        </section>
        <section className='foot'>
            <footer>
                <div>
                    <p>©2023 Christina Greifenstein</p>
                </div>
                <div>
                <ul>
                    <li><a href="https://www.behance.net/christinavanessa"><FacebookIcon/></a></li>
                    <li><a href="https://www.instagram.com/christina__vanessa/"><InstagramIcon/></a></li>
                    <li><a href='https://www.instagram.com/christina__vanessa/'><LinkedInIcon/></a></li>
                </ul>
                </div>
            </footer>
        </section>
    </div>
  )
}

export default Summer