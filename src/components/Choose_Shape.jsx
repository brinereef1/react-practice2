import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Choose = () => {
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
                    <a href='/'>
                        <li>
                          <div className='nav-sec'>
                              <div></div>
                              <p>Explore</p>
                          </div>    
                        </li>
                        </a>
                        <a href='/about'>
                        <li> 
                            <div className='nav-sec'>
                                <div></div>
                                <p>About</p>
                            </div>
                        </li>
                        </a>
                    </ul>
                </nav>
            </header>
        </section>
        <section className='choose-shape-contain'>
          <div>
            <div className='box-7'></div>
            <div className='img-details-5'>
              <h1>Choose Shape</h1>
              <div className='para'>
              <p>When wearing the NEOUS shoe,</p>
              <p>she feels professional and unique,</p>
              <p>enjoying the elegent, subtle twist</p>
              </div> 
              <div>
                <p>– micro-movies for NEOUS</p>
              </div>
            </div>
          </div>
          <div className='img-6'>
            <img src="https://static.wixstatic.com/media/9246f9_4859f24fc77c4d1f851a4a8d36f67c65f000.jpg/v1/fill/w_484,h_482,al_c,lg_1,q_80,enc_auto/9246f9_4859f24fc77c4d1f851a4a8d36f67c65f000.jpg" alt="shoe" />
          </div>
          <div className='img-7'>
            <img src="https://static.wixstatic.com/media/9246f9_9ea34f94fe2f414ea8ee5c08427246c6~mv2_d_2800_1609_s_2.jpg/v1/crop/x_499,y_0,w_1927,h_1609/fill/w_533,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/neous.jpg" alt="shoe" />
          </div>
          <div className='box-8'></div>
          <div>
            <div className='img-details-6'>
              <h1>Key Services</h1>
              <div>
              <p>Research // Concept // Location Scouting // Art and</p>
              <p>Creative Direction // Production // Photography // Editing</p>
              </div>
            </div>
          </div>
          <div className='img-8'>
            <img src="https://static.wixstatic.com/media/9246f9_617b2c4a37ae499a806ed50a0c294479~mv2_d_3000_1650_s_2.jpg/v1/fill/w_703,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Greifenstein_Neous_ProecessBook%20(trascin.jpg" alt="collection" />
          </div>
          <div className='mb'>
            <h1>Moodboard</h1>
          </div>
          <div className='img-9'>
            <img src="https://static.wixstatic.com/media/9246f9_6be850cc570e488bb9ef1709b7967aa3f000.jpg/v1/fill/w_411,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9246f9_6be850cc570e488bb9ef1709b7967aa3f000.jpg" alt="shoe" />
          </div>
          <div>
            <div className='img-10'>
              <img src="https://static.wixstatic.com/media/9246f9_7ed079194025446e8db87c853f53870af000.jpg/v1/fill/w_283,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9246f9_7ed079194025446e8db87c853f53870af000.jpg" alt="shoe" />
            </div>
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

export default Choose