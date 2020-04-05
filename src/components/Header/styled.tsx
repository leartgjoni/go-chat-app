import styled from 'styled-components';

export const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
`;

export const HeaderItem = styled.li`
  float: left;

  & span {
    display: block;
    color: white;
    text-align: center;
    padding: 18px 20px;
    text-decoration: none;
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 26px;

    :hover {
      background-color: #111;
    }
  }
`;
