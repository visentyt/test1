import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Complaints from "./Complaints";
import Promotions from "./Promotions";
import Vacancies from "./Vacancies";
import "./test.css";

function BottomNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldHideMenu, setShouldHideMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const button = document.querySelector(".menu__button");
        const close = document.querySelector(".menu__header button");

        function showMenu() {
            if (shouldHideMenu) {
                setShouldHideMenu(false);
            } else {
                setIsMenuOpen(true);
            }
        }

        function hideMenu() {
            setIsMenuOpen(false);
            setShouldHideMenu(true);
        }

        button.addEventListener("click", showMenu);
        close.addEventListener("click", hideMenu);

        return () => {
            button.removeEventListener("click", showMenu);
            close.removeEventListener("click", hideMenu);
        };
    }, [shouldHideMenu]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setShouldHideMenu(true);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Функция для скрытия меню и отображения кнопки "меню" при выборе ссылки
    function handleLinkClick() {
        setIsMenuOpen(false);
        setShouldHideMenu(true);
    }

    return (
        <Router>
            <div className="hero__wrapper">
                <button className={`menu__button ${isMenuOpen ? 'hidden' : ''}`}>
                    <div>
                        <div></div>
                    </div>
                </button>
                <section className="menu__body" hidden={!isMenuOpen} ref={menuRef}>
                    <div className="menu__header">
                        <button title="Close">
                            <div></div>
                        </button>
                    </div>
                    <div className="menu__links">
                        {/* Добавляем обработчик события для каждой ссылки */}
                        <Link to="/about-us" onClick={handleLinkClick}>
                            О нас
                        </Link>
                        <Link to="/menu" onClick={handleLinkClick}>
                            Меню
                        </Link>
                        <Link to="/promotions" onClick={handleLinkClick}>
                            Акции
                        </Link>
                        <Link to="/vacancies" onClick={handleLinkClick}>
                            Вакансии
                        </Link>
                        <Link to="/complaints" onClick={handleLinkClick}>
                            Контакты
                        </Link>
                    </div>
                    <div className="menu__contact">
                        <a href="tel:+79098236060">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                ></path>
                            </svg>
                            Позвонить
                        </a>

                        <a href="#0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                            <span>Telegram</span>
                        </a>
                        <a href="#0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39-1.02 0-1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                            <span>Жалоба</span>
                        </a>
                    </div>
                </section>
                <div className="menu__overlay" hidden={!isMenuOpen}></div>
            </div>

            <Route path="/about-us" component={AboutUs} />
            <Route path="/menu" component={Menu} />
            <Route path="/complaints" component={Complaints} />
            <Route path="/promotions" component={Promotions} />
            <Route path="/vacancies" component={Vacancies} />

            <Redirect from="/" to="/about-us" />
        </Router>
    );
}

export default BottomNavigation;