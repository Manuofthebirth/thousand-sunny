import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  const toggler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  const toggleLogin = () => {
    loginPage ? setLoginPage(false) : setLoginPage(true);
  }

  return (
    <div className="header">
      <div className="logo">
        <div className="logo__center"></div>
      </div>

      <div className="hamburger" onClick={toggler}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>

      <ul className={isOpen ? "header__menu--open" : "header__menu"}>
        <button className="header__menu--close" onClick={toggler}>X</button>
        <li className="header__menu__item" id="home"><a href="#">Home</a></li>
        <li className="header__menu__item"><a href="#">Destinations</a></li>
        <li className="header__menu__item"><a href="#">About</a></li>
        <li className="header__menu__item"><a href="#">Partner</a></li>
        {/* <button className="header__btn--login">Login</button> */}
        <button className="header__btn--login" onClick={toggleLogin}>Login</button>
        
        <div className={loginPage ? "loginForm--open" : "loginForm"}>
          <svg onClick={toggleLogin} className="loginForm--close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.000151038 14.1426L14.1423 0.000442743L15.5565 1.41466L1.41436 15.5568L0.000151038 14.1426Z" fill="#B4D51E"/>
            <path d="M1.41421 0L15.5563 14.1421L14.1421 15.5563L0 1.41421L1.41421 0Z" fill="#B4D51E"/>
          </svg>

          <form className="loginForm__container">
            <h1 className="loginForm__title">Login</h1>
            <p className="loginForm__greeting">Bom dia! Ficamos felizes em tê-lo conosco.</p>
            <input className="loginForm__input" type="text" placeHolder="E-mail:"/>
            <input className="loginForm__input" type="password" placeHolder="Password:"/>
            <div className="loginForm__actions">
            <a href='#'>
              <p className="loginForm__actions__link">Quero uma conta ></p>
            </a>
              <button className="loginForm__actions__btn">
                Entrar
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L7 7L0.999999 1" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <button className="header__btn--register">Register</button>
      </ul>
    </div>
  )
}

export default Header

