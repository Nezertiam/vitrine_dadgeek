import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../components/Avatar'

const Banner = (props) => {
    return (
        <StyledSection id="banner">
            <div className={`banner-top position-relative d-flex justify-content-center ${props.size}`}>
                <div className="avatar-container position-absolute">
                    <Avatar size={props.size} />
                </div>
            </div>
            <div className={`banner-bottom ${props.size}`}>
                <div className="socials position-absolute">
                    <p>
                        @DadGeek
                    </p>
                </div>
                <div className="title text-center">
                    <h1>DadGeek</h1>
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
