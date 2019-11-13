import styled from 'styled-components'

export const StyledContainer = styled.div`
    color: #fff;
    position: relative;
    height: fit-content;
    width: 100%;
    margin-bottom: -3px
    
    .img {
        width: 100%;
        margin-top: -1px;
    }
    .restaurant-image {
        src: ${props => props.src}
    }
    .gradient {
    background-image: url(publicassetscutscellGradientBackground@2x.png);
    position: absolute;
    bottom: 0;
    z-index: 999;
    left: 0;
    top: 0px;
    width: 100%;
    height: 99%%;
    }
    .text.restaurant-info {
        position: absolute;
        bottom: 6px;
        left: 12px;
        z-index:1001;
    }
    .text.restaurant-name {
        margin: 0 auto;
        z-index:1001;
        font-size:${() => window.innerWidth > 800 ? '24px' : '16px'};
    }
    .restaurant-cat {
        margin-bottom:10px;
        margin-top:4px;
        z-index:1001;
        font-size:${() => window.innerWidth > 800 ? '18px' : '12px'};
    }
    
`