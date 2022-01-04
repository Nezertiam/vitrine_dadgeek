import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../components/Avatar'
import {ReactComponent as Instagram} from "../../../components/instagram-brands.svg";
import {ReactComponent as Twitch} from "../../../components/twitch-brands.svg";

const Banner = (props) => {
    return (
        <StyledSection id="banner">
            <div className={`banner-top position-relative d-flex justify-content-center ${props.size}`}>
                <div className="avatar-container position-absolute">
                    <Avatar size={props.size} />
                </div>
                <div className="socials position-absolute d-flex">
                    <div className="social">
                        <Twitch />
                    </div>
                    <div className="social">
                        <Instagram />
                    </div>
                </div>
            </div>
            <div className={`banner-bottom ${props.size}`}>
                <div className="title text-center">
                    <h1>DadGeek</h1>
                    <a href="https://opensea.io/DadGeek">Voir sur OpenSea</a>
                </div>
            </div>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    .banner {
        &-top {
            background: lightgray;
            .avatar-container {
                bottom: 0;
                transform: translateY(50%);
            }
            .socials {
                bottom: 0;
                right: 1rem;
                .social {
                    height: 50px;
                    svg {
                        height: 50px;
                    }
                }
            }
            &.small {

            }
            &.medium {
                height: 250px;
            }
            &.large {

            }
        }
        &-bottom {
            &.small {

            }
            &.medium {
                .title {
                    padding-top: 125px;
                }
            }
            &.large {

            }
        }
    }
    
`

export default Banner
