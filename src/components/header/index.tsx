import styled from "styled-components"
import "../../variables.css"

export const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <a href="#">
                        <h1 className="logo">TG</h1>
                    </a>

                    <nav>
                        <input type="checkbox" id="menu-hamburguer" />
                        <label htmlFor="menu-hamburguer">
                            <div className="menu">
                                <span className="hamburguer"></span>
                            </div>
                        </label>

                        <ul>
                            <li><a href="#about-me">Sobre Mim</a></li>
                            <li><a href="#abilities">Habilidades</a></li>
                            <li><a href="#projects">Meus Projetos</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 30px 15px;
    max-height: 125px;
    
    .logo {
        font-family: var(--secundary-font);
        font-size: var(--extra-big-font);
        border: 2px solid var(--primary-color);
        border-radius: 50px;
        width: 65px;
        height: 65px;
        line-height: 55px;
        text-align: center;
        text-decoration: underline;
        transition: 0.3s ease;
        z-index: 1;
        color: var(--primary-color);
    }

    a:hover .logo {
        color: var(--white-color);
        border: 2px solid var(--white-color);
    }

    nav ul {
        display: flex;
    }

    nav ul li a {
        text-transform: capitalize;
        font-size: var(--normal-font);
        font-weight: 500;
        padding: 10px 20px;
        transition: 0.4s ease;
        border-radius: 50px;
        letter-spacing: 1px;
        user-select: none;
    }


    nav ul li a:hover {
        color: var(--primary-color);
    }

    .menu {
        display: none;
        height: 60px;
        width: 60px;
        align-self: flex-end;
    }

    nav label {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .hamburguer {
        height: 2px;
        width: 30px;
        background-color: var(--white-color);
        display: block;
        position: relative;
        top: 29px;
        right: 15px;
        transition: 0.5s ease-in-out;
    }

    .hamburguer::before,
    .hamburguer::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--white-color);
        transition: 0.2s ease-in-out;
    }

    .hamburguer::before {
        top: -10px;
    }

    .hamburguer::after {
        bottom: -10px;
    }

    input {
        display: none;
    }

    input:checked ~ label .hamburguer {
        transform: rotate(45deg);
    }

    input:checked ~ label .hamburguer::before {
        transform: rotate(90deg);
        top: 0;
    }

    input:checked ~ label .hamburguer::after {
        transform: rotate(90deg);
        bottom: 0;
    }

    @media(max-width: 1280px) {
        .header {
            padding: var(--mobile-padding);
        }
    }

    @media(max-width: 900px) {
        .menu {
            display: block;
        }

        nav input:checked ~ ul {
            display: block;
        }

        nav {
            position: absolute;
            right: 20px;
            top: 30px;
            z-index: 1;
        }

        nav ul {
            display: none;
            padding: 20px;
            background-color: var(--bg-dark-color);
        }


        nav ul li a {
            display: block;
            padding: 20px;
            text-align: center;
        }
    }
`