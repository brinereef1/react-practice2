import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
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
        <section className='about-details'>
          <div className='box-5'></div>
          <div className='about-me'>
            <div>
              <h1>About Me</h1>
              <p>My aspiration to live creativity and meet people’s actual needs when it comes to media consumption led me to complete my Bachelor’s in Graphic Design. My aim is always to combine a pragmatic approach with aesthetics, while improving communication between people.</p>
              <p>As a Fulbright scholar, I completed my studies abroad with an MA at the Savannah College of Art and Design, which ultimately helped me to get my foot into the world of fashion and luxury communication. As a believer in sustainable practices, my thesis focused on developing the brand identity and communication of a clean beauty pop-up store under the umbrella of Selfridges.</p>
            </div>
          </div>
          <div className='box-6'></div>
          <div className='greedy'>
            <h2>Follow me on Instagram</h2>
          </div>
          <div className='contact'>
          <div>
            <h1>Get in Touch</h1>
            <p>For business inquiries and collaborations please contact me below and leave a link to your website or portfolio. I am looking forward to hearing from you!</p>
          </div>
          <form>
            <input type="email" className='email' placeholder='Email'/>
            <input type='text' className='name' placeholder='Name' />
            <input type='text' className='message' placeholder='Message'/>
            <button type='submit' className='submit-button'>submit</button>
          </form>
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

export default About