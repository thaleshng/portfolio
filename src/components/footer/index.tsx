import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faWhatsapp, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <StyledFooter className="footer" id="contact">
            <div className="container">
                <h2>Me envie uma mensagem!</h2>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/thales-hng/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=5531986705814&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os." target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>

                    <a href="https://github.com/thaleshng" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href="https://www.instagram.com/thaleshng/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    margin-top: 7rem;
    background-color: rgba(36, 92, 214, 0.1);
    padding: 50px 0;
    text-align: center;
    

    .container h2 {
        font-family: var(--secundary-font);
        font-size: var(--normal-font);
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 20px;
    }

    & svg {
        font-size: 25px;
        margin-top: 6px;
    }
`