import styled from "styled-components"
import fotoPerfil from "../../assets/images/foto-perfil.jpg"

export const AboutMe = () => {
    return (
        <AboutMeSection id="about-me" className="section">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Sobre mim</h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="about-me-image">
                        <div className="img-box">
                            <img src={fotoPerfil} alt="Foto do Perfil" />
                        </div>
                    </div>

                    <div className="about-me-infos">
                        <p>
                            <strong>Me chamo Thales Gomes e sou um desenvolvedor frontend em
                            formação.</strong> Com um interesse profundo pela área de tecnologia, estou migrando
                            de área para me dedicar inteiramente ao campo da tecnologia.
                        </p>

                        <p>
                            Sou um autodidata dedicado, constantemente em busca de soluções
                            inovadoras para enfrentar desafios. Estou entusiasmado em expandir
                            meus conhecimentos e progredir nesse campo que está em constante
                            evolução.
                        </p>

                        <p>
                            Ah, e falando em hobbies, adoro me divertir com filmes, séries,
                            desenhos animados, animes e jogos. Em especial One Piece. 👒
                        </p>
                    </div>
                </div>
            </div>
        </AboutMeSection>
    )
}

const AboutMeSection = styled.section`
    .about-me-image {
    max-width: 40%;
    padding: 0 15px;
    }

    .about-me-image .img-box {
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }

    .about-me-image .img-box::before {
        content: '';
        width: 90%;
        height: 90%;
        position: absolute;
        border: 5px solid var(--primary-color);
        right: -30px;
        bottom: -8px;
        margin-right: 20px;
        border-radius: 5px;
    }

    .about-me-image .img-box img {
        border-radius: 5px;
        position: relative;
    }

    .about-me-infos {
        max-width: 50%;
        padding: 0 25px;
    }

    .about-me-infos p {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }

    @media (max-width: 980px) {
        .row {
            justify-content: center;
        }

        .about-me-image{
            max-width: 100%;
            padding: 0 var(--mobile-padding);
            margin-bottom: 50px;
        }

        .about-me-infos {
            padding: 0 var(--mobile-padding);
            text-align: center;
            max-width: 100%;
        }
    }
`