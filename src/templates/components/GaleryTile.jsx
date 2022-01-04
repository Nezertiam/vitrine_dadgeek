import React from 'react'
import styled from 'styled-components'

const GaleryTile = (props) => {
    return (
        <>
            <Tile className={`${props.className} shadow`} title={`Carte : ${props.name}`} onClick={props.onClick}>
                <div className="img-container">
                    <img className="img" src={props.src} alt={`Illustration de la carte ${props.name}`} />
                </div>
                <div className="infos px-3 py-2">
                    <p className='name overflow-hidden m-0 fw-bold'>
                        {props.name}
                    </p>
                    <div className="m-0 author">
                        DadGeek
                    </div>
                </div>
            </Tile>
        </>
    )
}

const Tile = styled.div`
    overflow: hidden;
    border-radius: 10px;
    width: 225px;
    transition: transform 0.25s, z-index 0.25s;
    cursor: pointer;
    z-index: 1;

    @media screen and (max-width: 515px) {
        width: 45vw;
    }
    @media screen and (max-width: 415px) {
        width: 90vw;
    }
    &:hover {
        transform: scale(1.2);
        z-index: 2;
        @media screen and (max-width: 515px) {
            transform: scale(1.05); 
        }
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        &-container {
            overflow: hidden;
            height: 225px;
            width: 225px;
            @media screen and (max-width: 515px) {
                height: 45vw;
                width: 45vw;
            }
            @media screen and (max-width: 415px) {
                height: 90vw;
                width: 90vw;
            }
        }
    }
    .infos {
        background-color: white;
        white-space: nowrap;
        .author, .name {
            font-size: 0.9rem;
        }
    }
`

export default GaleryTile
