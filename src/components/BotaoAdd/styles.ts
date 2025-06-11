import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BotaoCircular = styled(Link)`
  display: block;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: rgb(46, 46, 46);
  color: #fff;
  text-align: center;
  font-size: 35px;
  line-height: 64px;
  cursor: pointer;
  text-decoration: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.28);

  &:hover {
    background-color: rgb(233, 1, 121);
  }
`
