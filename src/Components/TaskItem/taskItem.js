import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 300px;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.hex};
    padding: 12px;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: #fafafa;
        font-size: 2rem;
        margin-bottom: 12px;
    }

    p{
        font-size: 1.2rem;
    }
`

export const TaskContainer = styled.div`
    background-color: #fafafa;
    padding: .8rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #000;
    border-radius: 5px;
`

export const ControlsContainer = styled.div`
    display: flex;
    gap: 5px;

    button{
        width: 20px;
        height: 20px;
        border: 0;
        background-color: #ff0045;
        color: #fafafa;
        cursor: pointer;
    }
`

export const Input = styled.input`
    width: 90%;
    font-size: 1.2rem;
    padding: .5rem;
    margin-bottom: 8px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    transition: .4s ease-in-out;
`

export const AddButton = styled.button`
    font-size: 1.2rem;
    padding: .5rem;
    color: #fff;
    width: 90%;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`