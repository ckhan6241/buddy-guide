import React from 'react'
import { Link } from 'react-router'
import { css } from 'glamor'

import Themed from './Themed'

export const MENU_HEIGHT = 34

const getStyle = (theme) => ({
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${ theme.colors.accent };
  `,
  menuItem: css`
    list-style-type: none;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    white-space: nowrap;
    & > li {
      display: inline-block;
      z-index: 2;
    }
    & > li a {
      display: block;
      color: white;
      text-align: center;
      padding: 8px 16px;
      text-decoration: none;
      font-weight: bold;
    }
    & > li a:hover {
      background-color:  ${ theme.colors.accentLighter };
    }`,
  logo: css`
    display: inline-block;
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 8px 16px;
  `
})

const Menu = ({ theme }) => {
  const styles = getStyle(theme)
  return (
    <div { ...styles.container }>
      <div { ...styles.logo }>{"buddyguide"}</div>
      <div>
        <ul { ...styles.menuItem }>
          <li><Link to='/home-page' activeClassName='active'>Home Page</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Themed(Menu)