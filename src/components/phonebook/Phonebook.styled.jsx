import styled from '@emotion/styled';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100%;
    outline: solid 1px lightgray;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
    align-items: center;

    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
