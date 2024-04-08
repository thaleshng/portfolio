import { useEffect, useState } from "react"
import { fetchAbilities } from "../../services/abilities";
import styled from "styled-components";

interface Ability {
    name: string,
    src: string
}

export const Abilities = () => {
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { abilities } = await fetchAbilities()
            setAbilities(abilities)
        };

        fetchData()
    }, [])

    return (
        <AbilitiesSection className="abilities section" id="abilities">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Habilidades</h2>
                    </div>
                </div>
            </div>

            <div className="abilities-container row">
                {abilities.map((ability: Ability, index) => (
                    <div className="ability" key={index}>
                        <div className="logo">
                            <img alt={`${ability.name} Icon`} width="60" src={ability.src} />
                        </div>
                        <h3>{ability.name}</h3>
                    </div>
                ))}
            </div>
        </AbilitiesSection>
    )
}

const AbilitiesSection = styled.section`
    .abilities-container {
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    }

    .abilities-container .ability {
        min-width: 145px;
        max-width: 350px;
        padding: 40px 20px;
    }

    .abilities-container .ability .logo {
        height: 63px;
    }

    .abilities-container .ability .logo i {
        font-size: 6rem;
    }

    .abilities-container .ability h3 {
        color: var(--white-color);
        font-size: var(--normal-font);
        font-weight: 300;
        margin: 20px 0;
    }
`