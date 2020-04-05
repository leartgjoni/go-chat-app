import styled from 'styled-components';

export const MessageDiv = styled.div`
  color: white;
  padding: 20px 18px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  position: relative;
  background-color: #fff;
  width: 500px;
  margin-top: 20px;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  color: #808080;
  margin-left: ${(props: { myMessage: boolean }) =>
    props.myMessage ? '60%' : '2%'};

  &::after {
    bottom: 100%;
    left: ${(props: { myMessage: boolean }) =>
      props.myMessage ? '93%' : '7%'};
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #fff;
    border-width: 10px;
    margin-left: -10px;
  }
`;

export const UserName = styled.span`
  font-style: italic;
  font-weight: 600;
`;

export const MessageText = styled.span`
  font-family: 'Cookie', cursive;
  font-size: 26px;
`;
