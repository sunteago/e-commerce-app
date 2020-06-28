import React from 'react';
import styled from '@emotion/styled';

const ControlPanelStyles = styled.div`
    width: 100vw;    
    height: 100vh;
    background-image: linear-gradient(to bottom, #EDC976, #E97B7B);
    display: grid;
    border: 1px solid black;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr 2fr 2fr 3fr 3fr 3fr 1fr;
    justify-items: center;
    padding: 1rem;
`;

const FavIcon = styled.img`
    grid-column: 1 / 2;
    width: 2rem;
`;

const ShopIcon = styled.img`
    grid-column: 2 / 3;
    width: 2rem;
`;
const LogOut = styled.h2`
    grid-column: -1 / -2;
    white-space: nowrap;
    font-size: 0.9em;
    align-self: center;
`
const WelcomeUser = styled.h2`
    white-space: nowrap;
    grid-row: 2 / 3;
    grid-column: 3 / -3;
    align-self: flex-start;
`

const WelcomeText = styled.p`
    white-space: nowrap;
    grid-row: 3 / 4;
    grid-column: 3 / -3;
    align-self: flex-start;
`

const SearchBar = styled.input`
    display: flex;
    width: 15rem;
    height: 2rem;
    grid-row: 4 / 5;
    grid-column: 4 / 6;
    border-radius: 10px;
    padding-left: 10px;
    border: 1px solid black;
    outline: none;
`
const Logo = styled.img`
    width: 7rem;
    height: 7rem;
    border: 1px solid black;
    border-radius: 100%;
    grid-row: 5 / 7;
    grid-column: 4 / 6;
    align-self: center;
`
const ProfileIcon = styled.img`
    width: 3rem;
    grid-row: 5 / 7;
    grid-column: 6 / 8; 
    align-self: center;
`
const BrowseBtn = styled.img`
    width: 3rem;
    grid-row: 5 / 7;
    grid-column: 2 / 4; 
    align-self: center;
`
const AddInstrumentBtn = styled.img`
    width: 3rem;
    grid-row: 7 / 8;
    grid-column: 3 / 5; 
    align-self: center;
`
const CloseBtn = styled.img`
    width: 2.7rem;
    grid-row: 7 / 8;
    grid-column: 5 / 7; 
    align-self: center;
`

function ControlPanel() {
    return (
        <ControlPanelStyles>
            <FavIcon src="/assets/corazon.svg"></FavIcon>
            <ShopIcon src="/assets/carro-de-la-compra.svg"></ShopIcon>
            <LogOut>Log Out</LogOut>
            <WelcomeUser>Hi, Santiago !</WelcomeUser>
            <WelcomeText>What you'd like to do today?</WelcomeText>
            <SearchBar placeholder="Find dreams..."></SearchBar>
            <Logo></Logo>
            <BrowseBtn src="/assets/busqueda.svg"></BrowseBtn>
            <ProfileIcon src="/assets/usuario.svg"></ProfileIcon>
            <AddInstrumentBtn src="/assets/añadir.svg"></AddInstrumentBtn>
            <CloseBtn src="/assets/cerrar.svg"></CloseBtn>
        </ControlPanelStyles>

    );
}

export default ControlPanel;