import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 100px auto;
  grid-gap: 80px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 45px;
  font-family: 'Cookie', cursive;
`;

export const ButtonRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const RoomSection = styled.section`
  input[type='text'] {
    display: block;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 40%;
`;
