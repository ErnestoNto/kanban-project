import styled from "styled-components";

export const ModalContainer = styled.article`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`

export const Modal = styled.div`
    width: 400px;
    min-height: 200px;
    padding: 1rem;
    background-color: #fafafa;
    opacity: 1;
    position: fixed;
    top: 35%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 99;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`

export const Button = styled.button`
    font-size: 1.2rem;
    height: 40px;
    padding: .8rem;
    background-color: ${props => props.hex};
    color: #fafafa;
    border: 0;
    display: flex;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
` 