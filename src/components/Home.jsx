import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {
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
        <section className='choose-shape'>
            <div className='img-1'>
                <img src="https://static.wixstatic.com/media/9246f9_b61c8e4d641f41dfac6528b88761c13a~mv2_d_1628_1632_s_2.png/v1/fill/w_524,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9246f9_b61c8e4d641f41dfac6528b88761c13a~mv2_d_1628_1632_s_2.png" alt="shoe" />
            </div>
            <div className='category'>
                <div className='box-1'></div>
                <div className='cn-1'>
                   <h1>Choose Shape</h1>
                    <h3>Micro-Movies as Visual Narratives</h3>
                    <p><a href="/choose_shape">See More</a></p>
                </div>
            </div>
            <div className='img-details-1'>
                <p>Christina Vanessa – Creative Direction, Photography</p>
                <p>Lorenzo Mattiello – Production Assistance, Sound</p>
            </div>
        </section>
        <section className='summer-in-october'>
            <div>
                <div className='box-2'></div>
                <div className='category2'>
                    <h1>Summer in October</h1>
                    <h3>Mock Editorial</h3>
                    <p><a href="/summer_in_october">See More</a></p>
                </div>
                <div className='img-details-2'>
                    <p>Christina Vanessa – Creative Direction</p>
                    <p>Lorenzo Mattiello – Copywriting</p>
                    <p>Gilbert Browne – Photography</p>
                    <p>Thailiia Chee – Model</p>
                    <p>Hania Karam – Model</p>
                    <p>Erin Keane – Model</p>
                </div>
                <div className='img-2'>
                    <img src="https://static.wixstatic.com/media/9246f9_3c1d8463a98f4748b3c916b900fd5b92~mv2_d_1493_2294_s_2.jpg/v1/fill/w_537,h_817,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c21.jpg" alt="summer" />
                </div>
            </div>
        </section>
        <section className='complex-beauty'>
            <div className='cb'></div>
            <div className='box-3'></div>
                <div className='category3'>
                    <h1>Complex Beauty</h1>
                    <h3>Mock Ad Campaign</h3>
                    <p><a href="/complex_beauty">See More</a></p>
                </div>
                <div className='video'>
                        <video width={'400px'} autoPlay loop muted>
                            <source src='https://video.wixstatic.com/video/9246f9_62831fd1c7eb4c14931ce6574b7789ab/1080p/mp4/file.mp4' type='video/mp4'/>
                        </video>
                </div>
                <div className='img-3'>
                    <img src="https://static.wixstatic.com/media/9246f9_12a740df53ec43f7871bdf02eeb13edd~mv2_d_3600_2400_s_4_2.jpg/v1/crop/x_1379,y_8,w_2221,h_2384/fill/w_559,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Vince-27_2.jpg" alt="complex" />
                </div>
                <div className='img-details-3'>
                    <p>Christina Vanessa – Creative Direction</p>
                    <p>Lorenzo Mattiello - Copywriting</p>
                    <p>Grace Caroline – Photography</p>
                    <p>Catalina Rodriguez – Model</p>
                    <p>Victoria Long – Makeup</p>
                </div>
            
        </section>
        <section className='mine-is-yours'>
            <div>
                <div className='category4'>
                    <h1>Mine Is Yours</h1>
                    <h3>Editorial</h3>
                    <p><a href="/mine_is_yours">See More</a></p>
                </div>
                <div className='box-4'></div>
                <div className='img-4'>
                    <img src="https://static.wixstatic.com/media/9246f9_890c6009e6594d57bdce4941ff138d2e~mv2_d_2351_3600_s_2.jpg/v1/fill/w_368,h_431,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9246f9_890c6009e6594d57bdce4941ff138d2e~mv2_d_2351_3600_s_2.jpg" alt="black" />
                </div>
            
            <div className='img-5'>
                <img src="https://static.wixstatic.com/media/9246f9_1efc6940e18b4d899aa8d58a532c8efe~mv2_d_2291_3600_s_2.jpg/v1/fill/w_440,h_641,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Wingard_fashionL-12.jpg" alt="black-and-white" />
            </div>
            <div className='img-details-4'>
                <p>Christina Vanessa – Creative Direction</p>
                <p>Savannah Wingard – Photography</p>
                <p>Lorenzo Mattiello - Copywriting</p>
                <p>Anna  Frederikse – Model</p>
                <p>Courtenée Ross – Model</p>
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

export default Home