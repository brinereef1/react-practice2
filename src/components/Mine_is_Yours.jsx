import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Mine = () => {
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
        <section className='mine-is-yours-contain'>
          <div className='img-26'>
            <img src="https://static.wixstatic.com/media/9246f9_2478c14494d244a2b6a486df512de27a~mv2_d_3600_2403_s_4_2.jpg/v1/fill/w_743,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-10.jpg" alt="girl" />
          </div>
          <div className='box-19'></div>
          <div className='box-20'></div>
          <div className='img-details-12'>
            <h1>Mine is Yours – Concept</h1>
            <div>
            <p>Reconnecting with ourselves, refocusing on our equal origin</p>
            <p>and establishing inclusivity within our society</p>
            </div>
          </div>
          <div className='img-27'>
            <img src="https://static.wixstatic.com/media/9246f9_a346a32565ae417bb06c98302595d3ee~mv2_d_2390_3600_s_2.jpg/v1/fill/w_402,h_593,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-45.jpg" alt="girl" />
          </div>
          <div className='box-21'></div>
          <div className='img-28'>
            <img src="https://static.wixstatic.com/media/9246f9_82e09658f141400a99718204d27be49f~mv2_d_2403_3600_s_4_2.jpg/v1/fill/w_293,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-32.jpg" alt="girl" />
          </div>
          <div className='box-22'></div>
          <div className='img-details-13'>
            <h1>Key Services</h1>
            <div>
            <p>Research // Concept // Casting // Location</p>
            <p>Scouting // Styling // Art and Creative Direction</p>
            </div>
          </div>
          <div className='img-29'>
            <img src="https://static.wixstatic.com/media/9246f9_87e74f0f20d24d7f8df058f8da9037f6~mv2_d_2403_3600_s_4_2.jpg/v1/fill/w_499,h_749,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-7.jpg" alt="girls" />
          </div>
          <div className='box-23'></div>
          <div className='img-30'>
            <img src="https://static.wixstatic.com/media/9246f9_8c20980024454d8e84917741c1dbad7f~mv2_d_2403_3600_s_4_2.jpg/v1/fill/w_335,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-37.jpg" alt="girl" />
          </div>
          <div className='box-24'></div>
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

export default Mine