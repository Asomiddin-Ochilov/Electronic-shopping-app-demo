 import React from 'react';
 import './style.css';
 import img1 from './imgs/1.png';
 import img2 from './imgs/2.png';
 import img3 from './imgs/3.png';
 import img4 from './imgs/4.png';
 import img5 from './imgs/5.png';
 import img6 from './imgs/6.png';
 function BannerPage() {

     return <div className={'bannerPage'}>
       <div className="item">
           <button> 10% off </button>
       <div className="block-text">

         <p>Smartphone LG K22 Dual Chip Android 10</p>
           <h3> R$ 2.620,00</h3>
           <p className={'small'}>em ate 10x de R$ 162,20</p>
       </div>
           <img src={img1} alt="img1"/>
       </div>
         <div className="item">
             <button> 10% off </button>
             <div className="block-text">

                 <p>Video Game Playstation 5 PS5 825GB Sony</p>
                 <h3> R$ 6.449,00</h3>
                 <p className={'small'}>em ate 10x de R$ 162,20</p>
             </div>
             <img src={img2} alt="img2"/>
         </div>
         <div className="item">
             <button> 10% off </button>
             <div className="block-text">

                 <p>Notebook Lenovo Ideapad S145 Intel Core I3 4gb 1 TB</p>
                 <h3> R$ 2.300,00</h3>
                 <p className={'small'}>em ate 10x de R$ 162,20</p>
             </div>
             <img src={img3} alt="img3"/>
         </div>
         <div className="item bg-white">
             <button> 10% off </button>
             <div className="block-text">
                 <p className={'text-blue'}>Samsung Smart TV LED 40 Tizen FHD</p>
                 <h3> R$ 4.620,00</h3>
                 <p className={'small'}>em ate 10x de R$ 162,20</p>
             </div>
             <img src={img4} alt="img4"/>
         </div>
         <div className="item bg-white">
             <button> 10% off </button>
             <div className="block-text">
                 <p className={'text-blue'}>Relogio Champion Feminino Analogic</p>
                 <h3> R$ 220,00</h3>
                 <p className={'small'}>em ate 10x de R$ 162,20</p>
             </div>
             <img src={img5} alt="img5"/>
         </div>
         <div className="item bg-white">
             <button> 10% off </button>
             <div className="block-text">
                 <p className={'text-blue'}>Liquidificador Mondial Turbo Power L-99 FB </p>
                 <h3> R$ 198,00</h3>
                 <p className={'small'}>em ate 10x de R$ 162,20</p>
             </div>
             <img src={img6} alt="img6"/>
         </div>
         <div className="banner-footer">
          <div className="footer-text">
             <h2>Fique por denetro das melhooores ofertas!</h2>
              <p>Cadaster sea email <span> ganedg 5 </span>
                na sea perxder consrd
              </p>
          </div>
             <div className="footer-form">
                 <i className="bi bi-envelope"> </i>
                 <input type="text" placeholder={'Digital send Email'}/>
                 <button> Cadastrar</button>
             </div>
         </div>
     </div>

 }

 export default BannerPage