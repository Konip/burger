import React from 'react'
import "./Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <h2>Подписаться</h2>
                <p>Получите скидку 300 <span>₽</span> на свою первую покупку!
                    Подпишитесь на обновления</p>
                <form className="email" action="">
                    <input type="email" placeholder="Введите адрес эл. почты" />
                    <button>Подписаться</button>
                </form>
                <ul className="social">
                    <li><a href="mailto:bsb@blackstarburger.ru"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    </a></li>
                    <li><a href="https://www.instagram.com/blackstarburger/"> <svg className="insta" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                            fill="white" stroke="white">
                            <path d="M235 1266 c-95 -30 -162 -88 -204 -176 l-26 -55 0 -395 0 -395 26
                                -56 c15 -31 43 -73 64 -94 21 -21 63 -49 94 -64 l56 -26 395 0 395 0 55 26
                                c70 33 126 89 159 159 l26 55 0 395 0 395 -26 56 c-33 71 -87 125 -158 158
                                l-56 26 -380 2 c-287 2 -390 -1 -420 -11z m838 -128 c22 -14 51 -43 65 -65
                                l27 -38 0 -395 0 -395 -27 -38 c-14 -22 -43 -51 -65 -65 l-38 -27 -395 0 -395
                                0 -38 27 c-22 14 -51 43 -65 65 l-27 38 0 395 0 395 27 38 c27 40 79 81 113
                                90 11 3 191 4 400 4 l380 -2 38 -27z"/>
                            <path d="M952 1055 c-74 -32 -46 -145 36 -145 35 0 71 29 73 58 5 77 -42 115
                                -109 87z"/>
                            <path d="M543 942 c-109 -39 -178 -112 -210 -221 -41 -144 35 -304 176 -370
                                115 -54 264 -27 356 64 91 92 118 241 64 356 -69 146 -241 223 -386 171z m210
                                -124 c22 -14 51 -43 65 -65 23 -33 27 -48 27 -113 0 -65 -4 -80 -27 -113 -14
                                -22 -43 -51 -65 -65 -33 -23 -48 -27 -113 -27 -65 0 -80 4 -113 27 -61 41 -91
                                93 -95 164 -6 92 36 165 120 208 51 26 152 18 201 -16z"/>
                        </g>
                    </svg></a></li>
                    <li><a href="https://t.me/tash_blackstarburger">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22"
                            y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg></a></li>
                    <li><a href="https://twitter.com/BlackStarYkt"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg></a></li>
                    <li><a href="https://github.com/Konip">  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>Copyright &copy; 2020 Burger</p>
                </div>
            </div>

        </footer>
    )
}
