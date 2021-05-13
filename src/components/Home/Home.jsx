import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Home.scss"
import bull from '../../assets/1.png'

window.onscroll = () => {
    const windowVerticalScroll = window.scrollY;
    // const page = document.querySelector('.width-half')
    // let page1 = page.getBoundingClientRect().top;
    // console.log('относительно верха', page1);
    // console.log(page1 - windowVerticalScroll);
    // console.log(windowVerticalScroll);
    // console.log(page1.top - (windowVerticalScroll / 2));
    let count = 0
    const half1 = document.querySelectorAll('.width-half')
    const half = half1[count].getBoundingClientRect().top;
    console.log(half);
    // let css = half.setAttribute("style", "visibility:visible;animationDelay:2s");
    // console.log(half);
    // console.log(  half[0]);

    if ((half - windowVerticalScroll) / 2 < 0) {
        half1[count].classList.add('a')
        count++
    }
    // if ((half - windowVerticalScroll) / 2 < 0) {

    //     half1[count].setAttribute("style", "animation-play-state: running;");
    //     count++
    //     half1[count].setAttribute("style", "animation-play-state: running;animationDelay:1s;");
    //     // half.setAttribute("style", "animation-play-state: running;");
    //     count ++
    //     console.log(half1[3].style);
    // }
}


export default function Home() {
    return (
        <div className="home">

            <section className="head">
                <video autoPlay loop muted src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/video/home.mp4"> </video>
                <h2>сочный мощный</h2>
                <div className="head__link">
                    <NavLink to="/menu">меню</NavLink>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="info width-half"
                    //  style={{animationDelay: `${0.5}s`}}
                    >
                        <div className="title glitch" data-text="О НАС">О НАС</div>
                        <div className="text">
                            Burger – народный ресторан, создающий продукт премиального качества
                            по доступной цене. Уникальная авторская рецептура, специальная система
                            прожарки котлет и выпекания булочек, позволяет добиться неповторимого
                            вкуса. На данный момент открыто больше 50 ресторанов на территории страны,
                            и более 15 за ее пределами. Мы продолжаем активно масштабироваться и делится
                            своей вкусной философией. Соччный! Мощщный!
                        </div>
                    </div>
                    <div className="info width-half"
                    //  style={{animationDelay: `${2}s`}}
                    >
                        <div className="bull">
                            <img src={bull} alt="" />
                        </div>
                        <div className="bull1">
                            <img src={bull} alt="" />
                        </div>
                        <div className="bull2">
                            <img src={bull} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="catering-image width-half">
                        <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/catering.png" alt="" />
                    </div>
                    <div className="catering-info width-half">

                        <div className="h">кейтеринг</div>
                        <div className="text">
                            Доставка еды на ваше мероприятие в любую точку Москвы
                        </div>

                        <div className="btn animation">
                            <a href="https://catery.ru/caterer/black-star-burger" className="btn-link">
                                заказать кейтеринг</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section app">
                <div className="container">
                    <div className="info width-half">
                        <div className="title glitch" data-text="бургер">бургер</div>
                        <div className="h2"> В ОДИН КЛИК</div>
                        <div className="subtitle">Включите камеру на вашем телефоне и отсканируйте QR-код</div>
                        <div className="benefit-items">
                            <div className="benefit-item">
                                <div className="benefit-item__icon">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/benefit/1.svg" alt="" />
                                </div>
                                <span>Копи баллы</span>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/benefit/2.svg" alt="" />
                                </div>
                                <span>Изучай меню и цены</span>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/benefit/3.svg" alt="" />
                                </div>
                                <span>Находи адреса ресторанов</span>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-item__icon">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/benefit/4.svg" alt="" />
                                </div>
                                <span>Получай подарки каждый месяц</span>
                            </div>
                        </div>
                        <div className="app-buttons">
                            <div className="app-button">
                                <a href="https://apps.apple.com/us/app/black-star-burger/id1347263928">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/app/ios.png" alt="" />
                                </a>
                            </div>
                            <div className="app-button">
                                <a href="https://play.google.com/store/apps/details?id=com.loyaltyplant.partner.blackstarburger">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/app/android.png" alt="" />
                                </a>

                            </div>
                            <div className="app-button-qr">
                                <div className="qr">
                                    <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/app/barcode.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-image width-half">
                        <div className="wrap">
                            <img className="hand" src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/app/hand.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

