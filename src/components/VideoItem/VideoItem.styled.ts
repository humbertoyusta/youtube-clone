import styled from "styled-components";

export const VideoCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /*height: 100%;*/
    margin: 0.5rem;
    padding: 0.5rem;
    /*border: 1px solid #000;*/
    /*border-radius: 0.5rem;*/
    /*background-color: #fff;*/
    /*box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.2);*/
`;

export const VideoThumbnailStyled = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 0.5rem;
`;

export const VideoInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    padding: 0.5rem;
`;