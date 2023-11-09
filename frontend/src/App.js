import './App.css';
import logo from './assets/img/Logo.svg';
import imgBanner2 from './assets/img/banner-bg2.svg';
import imgBanner3 from './assets/img/banner-bg3.png';
import iconUpload1 from './assets/img/icon-upload.png';
import iconUpload2 from './assets/img/icon-upload-2.png';
import bannerBg3 from './assets/img/banner-bg3.png';
import iconDesign from './assets/img/icon-design.png';
import iconCrafted from './assets/img/icon-crafted.png';
import iconCustom from './assets/img/icon-custom.png';
import iconSocial from './assets/img/icon-social.png';

function App() {
  return (
    <div className='app'>
      <header>
        <nav>
          <div className='container'>
            <div className='navbar row flex-align-center'>
              <div className='left-nav col-6'>
                <img src={logo} alt='' style={{ height: 30 }} />
              </div>
              <div className='right-nav col-6'>
                <ul className='nav-list flex-row'>
                  <li className='nav-items'>Features</li>
                  <li className='nav-items'>About</li>
                  <li className='nav-items'>Pricing</li>
                  <li className='nav-items'>Reviews</li>
                  <li className='nav-items'>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main style={{ width: '100%', height: 'auto' }}>
        <section className='banner'>
          <div className='container' style={{ display: 'flex', width: '100%' }}>
            <div className='left-content col-6'>
              <img src={logo} alt='' style={{ width: 175, height: 60 }} />
              <h1>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h1>
              <div className='line' />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem magni ad quis iste voluptatum,
                temporibus nostrum, ut sapiente dolore illum tempora illo rerum minus possimus iusto laudantium
                veritatis?
              </p>
              <div className=''>
                <span className='btn-banner'>Download</span>
              </div>
            </div>
            <div className='right-content col-6'>
              <form>
                <span className='title-input' style={{ width: '100%', fontSize: 20 }}>
                  Try Your <span style={{ color: '#ff9b51', margin: '0 4px' }}> FREE </span> Trial Today
                </span>
                <div>
                  <input type='text' name='name' placeholder='Name' />
                </div>
                <div>
                  <input type='email'  name='email' placeholder='Email' />
                </div>
                <div>
                  <input type='password' name='password' placeholder='Your password' />
                </div>
                <button className='btn-form' type='submit'>
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className='banner-2'>
          <div className='container'>
            <div className='row flex-space-between'>
              <div className='tab-list col-2 '>
                <div className='tab-action flex-col'>
                  <span className='tab-item flex-center'>TAB 1</span>
                  <span className='tab-item flex-center'>TAB 2</span>
                  <span className='tab-item flex-center'>TAB 3</span>
                </div>
              </div>
              <div className='tab-content-list col-5 flex-col'>
                <div className='tab-content-header'>Tabs with soft transitioning effect.</div>
                <div className='tab-content flex-col'>
                  <div className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo saepe pariatur, accusamus nam nostrum
                    fugit rem doloremque totam, assumenda illo iste repellat praesentium officia neque libero alias
                    molestiae porro unde enim commodi voluptatibus?
                  </div>
                  <div className='content'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsam pariatur totam?
                  </div>
                </div>
                <div className='tab-content-button'>
                  <button className='btn-banner-2'>Download</button>
                </div>
              </div>
              <div className='img-banner-2 col-5'>
                <img src={imgBanner2} alt='' />
              </div>
            </div>
          </div>
        </section>
        <section className='banner-3'>
          <div className='container'>
            <div className='row flex-align-center'>
              <div className='left-banner-3 col-6'>
                <img src={imgBanner3} alt='' />
              </div>
              <div className='right-banner-3 col-6'>
                <div className='content-sub flex-col'>
                  <div className='sub-header flex-col'>
                    <div className='sub-title'>Sub list section</div>
                    <div className='line-orange' />
                    <div className='sub-content'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur, atque deleniti animi
                      officia voluptate recusandae fuga ipsa, obcaecati delectus facere, officiis optio incidunt sunt
                    </div>
                  </div>
                  <div className='sub-action flex-col'>
                    <div className='sub-action-1 flex-row'>
                      <img src={iconUpload1} alt='' style={{ width: 35, height: 35 }} />
                      <div className='content-sub-action'>
                        <div className='action-header'>Title</div>
                        <div className='action-content'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus
                        </div>
                      </div>
                    </div>
                    <div className='sub-action-1 flex-row'>
                      <img src={iconUpload2} alt='' style={{ width: 35, height: 35 }} />
                      <div className='content-sub-action'>
                        <div className='action-header'>Title</div>
                        <div className='action-content'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit dolore itaque!
                          Reprehenderit culpa amet necessitatibus?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='banner-4'>
          <div className='container'>
            <div className='row flex-items-start'>
              <div className='left-banner-4 col-6'>
                <div className='content-sub flex-col'>
                  <div className='sub-header flex-col'>
                    <div className='sub-title'>Standard Picture Section</div>
                    <div className='line-orange' />
                    <div className='sub-content'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio consequuntur, atque deleniti animi
                      officia voluptate recusandae fuga ipsa, obcaecati delectus facere, officiis optio incidunt sunt
                    </div>
                    <div className='sub-content'>
                      Lorem, adipisicing electus facere, officiis optio incidunt optio incidunt optio incidunt sunt
                    </div>
                  </div>
                </div>
              </div>
              <div className='right-banner-4 col-6'>
                <img src={bannerBg3} alt='' />
              </div>
            </div>
          </div>
        </section>
        <section className='banner-5'>
          <div className='container'>
            <div className='top-content flex-col'>
              <div className='top-title'>WHY THIS IS AWESOME</div>
              <div className='line-orange' />
              <div className='top-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. copy 4</div>
            </div>
            <div className='down-content flex-row '>
              <div className='content-items flex-col flex-center'>
                <img src={iconDesign} alt='' style={{ width: 70, height: 70 }} />
                <div className='content-items-title'>Thoughtful Design</div>
                <div className='content-items-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit labore aspernatur
                  minus voluptate, rerum sequi itaque molestiae quas optio.
                </div>
              </div>
              <div className='content-items flex-col flex-center'>
                <img src={iconCrafted} alt='' style={{ width: 70, height: 70 }} />
                <div className='content-items-title'>Well Crafted</div>
                <div className='content-items-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea officiis dolores mollitia
                  fugit omnis earum, dolorem fuga nesciunt laborum.
                </div>
              </div>
              <div className='content-items flex-col flex-center'>
                <img src={iconCustom} alt='' style={{ width: 70, height: 70 }} />
                <div className='content-items-title'>Easy to Customize</div>
                <div className='content-items-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic mollitia ducimus quaerat
                  consequuntur? Perferendis numquam quod quam.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='banner-footer'>
          <div className='container'>
            <div className='banner-footer-content flex-col'>
              <div className='banner-footer-title'>STYLISH AXURE DESIGN</div>
              <div className='line' />
              <div className='banner-footer-content'>
                Use the sections you need, remove the ones you don't. Create gorgeous prototypes faster than ever!
              </div>
              <div className='banner-footer-btn'>
                <span className='btn-banner'>Download</span>
              </div>
            </div>
          </div>
        </section>
        <section className='form-contact'>
          <div className='container'>
            <div className='contact-content flex-col flex-center'>
              <div className='contact-title'>CONTACT US</div>
              <div className='line-orange' />
              <div className='contact-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div className='form-container row  flex-space-between'>
              <div className='left-form flex-col'>
                <div className='form-group'>
                  <input type='text'  name='name' placeholder='Name' />
                </div>
                <div className='form-group'>
                  <input type='email'  name='email' placeholder='Email' />
                </div>
                <div className='form-group'>
                  <input type='text'  name='subject' placeholder='Subject' />
                </div>
              </div>
              <div className='right-form'>
                <textarea cols={30} rows={10} placeholder='Message' defaultValue={''} />
              </div>
            </div>
            <div className='btn-send-mess flex-col flex-center'>
              <button>Send Message</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='footer flex-col flex-center'>
          <img src={iconSocial} alt='' style={{ height: 25 }} />
          <p>© 2021 Axure Themes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
