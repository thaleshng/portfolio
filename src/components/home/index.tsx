import styled from "styled-components"
import curriculo from "../../assets/archives/CV Thales Gomes.pdf"

export const Home = () => {
    return (
        <SectionHome id="home">
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className="text-home">
                        <p>Olá,</p>
                        <h1>Sou o Thales Gomes</h1>
                        <h2>Desenvolvedor Frontend</h2>

                        <div className="botoes">
                            <a href={curriculo} target="_blank" className="btn"
                            ><span className="btn-transition box-shadow"></span>Veja meu CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionHome>
    )
}

const SectionHome = styled.section`
    padding-top: 90px;
    
    .full-screen {
    min-height: 86vh;
    padding: 50px 0;
    }

    .text-home {
        letter-spacing: 2px;
    }

    .text-home,
    .image-home {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 0 15px;
    }

    .text-home p {
        font-family: var(--secundary-font);
        font-size: var(--big-font);
        margin-bottom: 10px;
    }

    .text-home h1 {
        font-family: var(--third-font);
        font-size: var(--giant-font);
        font-weight: 300;
        margin-bottom: 20px;
    }

    .text-home h2 {
        font-family: var(--third-font);
        font-size: var(--big-font);
        letter-spacing: 3px;
        margin-bottom: 30px;
        font-weight: 100;
    }

    @media (max-width: 1280px) {
        .text-home,
        .image-home {
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
            padding: var(--mobile-padding);
        }

        .text-home h2 {
            letter-spacing: 2px;
        }
    }
`