import React from 'react';
import styled from '@emotion/styled';

const ControlPanelStyles = styled.div`
    width: 100vw;    
    height: 100vh;
    background-image: linear-gradient(to bottom, #EDC976, #E97B7B);
    display: grid;
    border: 1px solid black;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 2fr 1fr 3fr 3fr 1fr 1fr;
    justify-items: center;
    padding: 1rem;
`;

const FavIcon = styled.img`
    grid-column: 1 / 2;
    color: red;
    width: 2rem;
`;

const ShopIcon = styled.img`
    grid-column: 2 / 3;
    color: black;
    width: 2rem;
`;

const ProfileIcon = styled.img`
    grid-column: -1 / -2;
    color: black;
    width: 3rem;
`
const WelcomeUser = styled.h2`
    grid-column: 3 / 3;
    width: 2rem;
`

function ControlPanel() {
    return (
        <ControlPanelStyles>
            <FavIcon src="/assets/corazon.svg"></FavIcon>
            <ShopIcon src="/assets/carro-de-la-compra.svg"></ShopIcon>
            <ProfileIcon src="/assets/usuario.svg"></ProfileIcon>
            <WelcomeUser></WelcomeUser>
        </ControlPanelStyles>

    )
}

export default ControlPanel;