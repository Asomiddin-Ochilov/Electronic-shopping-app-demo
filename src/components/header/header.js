import React,{useState} from 'react';
import './style.css';
import tv from './catalogImg/tv.png';
import camera from './catalogImg/camera.png';
import audio from './catalogImg/audio.png';
import CarouselBlock from "./carousel";
import img1 from './catalogImg/1.png';
import img2 from './catalogImg/2.jpg';
function Header() {
    const [toggle,setToggle] = useState(false)

    const style = {
        left: toggle ? '-1px' : '-41%'
    }
    function Toggle() {
      setToggle(prevState => !prevState)
    }

    return <div className={'header'}>
    <div className="navbar">
        <div className="nav-header">
            <h4>
                <i className="bi bi-star-fill"> </i>
                BlackFriday sale 60%
                <i className="bi bi-star-fill"> </i>
            </h4>
        </div>
        <div className="nav-body">
        <div className="logo">
            <h1> electronic
                <span className={'dod'}>.</span>
                <span>com</span>
            </h1>
        </div>
            <div className="search">
                <input type="text" placeholder={'search...'}/>
                <i className="bi bi-search"> </i>
            </div>
            <div className="register">
                <i className="bi bi-person"> </i> <span> + </span>
            </div>
            <div className="block-sale">
                <i className="bi bi-heart"> </i>
                <i className="bi bi-cart2"> </i> <span> 1 </span>
            </div>
        </div>
        <div className="nav-footer">
            <div style={style} className="catalog">
             <div className="catalog-nav">
                 <p className={'active'}> Телевизоры, фото-видео и аудио </p>
                 <p> Ноутбуки, принтеры, компьютеры </p>
                 <p> Телефоны, гаджеты, аксессуары </p>
                 <p> Бытовая техника </p>
                 <p> Все для кухни </p>
                 <p> Спорт товары </p>
                 <p> Красота и здоровье </p>
                 <p> Все для офиса, дома и сада </p>
                 <p> Игрушки и товары для детей </p>
             </div>
                <div className="catalog-block">
                  <div className="item">
                      <img src={tv} alt="tv"/>
                      <p> Телевизоры </p>
                  </div>
                    <div className="item">
                      <img src={camera} alt="camera"/>
                      <p> фото-видео </p>
                  </div>
                    <div className="item">
                      <img src={audio} alt="audio"/>
                      <p> аудио </p>
                  </div>
                </div>
            </div>
         <button onClick={Toggle}>
                Каталог
             {
                 toggle ? <i className="bi bi-x-lg"> </i>
                     :
                     <i className="bi bi-border-width"> </i>
             }
         </button>
         <p> Телевизоры, фото-видео и аудио </p>
         <p> Ноутбуки, принтеры, компьютеры </p>
         <p> Телефоны, гаджеты, аксессуары </p>
         <p> Бытовая техника </p>
        </div>
    </div>
     <div className="carousel-header">
       <CarouselBlock/>
     </div>
    <div className="service-block">
        <img src={img1} alt="img1"/>
        <img src={img2} alt="img2"/>
        <img src={img1} alt="img1"/>
    </div>
    </div>
}
export default Header