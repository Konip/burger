import React from 'react'
import "./Home.scss"

export default function Home() {
    return (
        <div className="home">

            <section className="head">
                <video autoPlay loop muted src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/video/home.mp4"> </video>
                {/* <h2>сочный мощный<span>Background</span></h2> */}
                <h2>сочный мощный</h2>
            </section>

            <section className="page-section">
                <div className="container">
                    <div className="about-info width-half">
                        <div className="title">О НАС</div>
                        <div className="text">
                            Black Star Burger – народный ресторан, создающий продукт премиального качества по доступной цене. Уникальная авторская рецептура, специальная система прожарки котлет и выпекания булочек, позволяет добиться неповторимого вкуса. На данный момент открыто больше 50 ресторанов на территории страны, и более 15 за ее пределами. Мы продолжаем активно масштабироваться и делится своей вкусной философией. Соччный! Мощщный!
                        </div>
                        <div className="title">О НАС</div>
                        <div className="text">
                            Black Star Burger – народный ресторан, создающий продукт премиального качества по доступной цене. Уникальная авторская рецептура, специальная система прожарки котлет и выпекания булочек, позволяет добиться неповторимого вкуса. На данный момент открыто больше 50 ресторанов на территории страны, и более 15 за ее пределами. Мы продолжаем активно масштабироваться и делится своей вкусной философией. Соччный! Мощщный!
                        </div>
                    </div>
                    <div className="about-info width-half">Тимати</div>
                </div>
            </section>

            <section className="page-section">
                <div className="container ">
                    <div className="catering-image width-half">
                        <img src="https://blackstarburger.ru/wp-content/themes/tsumugi-child/img/catering.png" alt="" />
                    </div>
                    <div className="catering-info width-half">
                        <div className="h">кейтеринг</div>
                        <div className="text">
                            Доставка еды на ваше мероприятие в любую точку Москвы
                        </div>
                        <div className="btn">заказать кейтеринг</div>
                    </div>
                </div>

            </section>
        </div>
    )
}

