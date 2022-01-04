import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GaleryTile from '../../../components/GaleryTile';

const Galery = () => {

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const [images, setImages] = useState(null);
    const [popupImg, setPopupImg] = useState(null);

    useEffect(() => {
        const imgs = importAll(require.context('../../../../assets/images', false, /\.(png|jpe?g|svg|PNG|JPE?G|SVG)$/))

        setImages(Object.entries(imgs));
    }, [])

    const handleClick = (image) => {
        setPopupImg(image);
    }
    const handleClose = () => {
        setPopupImg(null);
    }

    return (
        <StyledSection className="mt-5 d-flex justify-content-center position-relative">
            <div className="tiles">
                <div className="tiles-container p-0 d-flex flex-wrap justify-content-center">
                    {
                        (images && images.length > 0) &&
                        images.map((image, index) => {
                            const name = image[0].replaceAll("_", " ").split(".")[0];
                            return (
                                <div className="d-flex justify-content-center p-2 p-sm-3 p-md-2" key={index} >
                                    <GaleryTile src={image[1]} name={name} onClick={() => handleClick(image)} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* {
                popupImg &&
                <div className="image-zoom px-4">
                    <div className="image-zoom-container">
                        <img src={popupImg[1]} alt="" className="img" />
                        <div className="position-absolute close-container" onClick={handleClose}>
                            <div className="close">&times;</div>
                        </div>
                    </div>
                </div>
            } */}

            {
                popupImg &&
                <div className="popup" onClick={handleClose}>
                    <div className="popup-image-container">
                        <img class="popup-image-img" src={popupImg[1]} alt="" />
                    </div>
                </div>
            }
        </StyledSection>
    )
}

const StyledSection = styled.section`
    .tiles {
        .&-container {
            max-width: 1300px;
            margin: 0 auto;
        }
    }


    .popup {
        z-index: 11;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #000000d1;
        display: flex;
        justify-content: center;
        align-items: center;
        &-image {
            &-container {
                height: 87vh;
                max-width: 95vw;
                overflow: auto;
            }
            &-img {
                max-height: 87vh;
                object-fit: contain;
                object-position: center center;
            }
        }
    }


    .image-zoom {
        &-container {
            position: sticky;
            width: 80vw;
            height: 100vh;
            overflow: auto;
            top: 75px;
            .img {
                object-fit: contain;
                width: 100%;
                max-height: 1500px;
            }
        }
        .close {
            cursor: pointer;
            color: white;
            font-size: 5rem;
            font-weight: bolder;
            line-height: 0.4;
            &-container {
                z-index: 9;
                top: 30px;
                right: 30px;
                height: 60px;
                border: 4px solid #4b4a4a;
                border-radius: 100%;
                background-color: #4b4a4a;
            }
        }
    }
`

export default Galery
