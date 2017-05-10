import React, { Component } from 'react'
import { css, nthChild } from 'glamor'
import Themed from '../../containers/Themed'

const getDimensionStyle = (theme) => ({
  onFocus: css`
    flex: 2 1 40%;
    border-bottom: 5px solid;
    border-color: ${theme.colors.accentLighter};
    padding: 2px 5px;
    position: relative;
    height: 80%;
    ${ nthChild(2, {
      'border-left': '1px solid',
      'border-right': '1px solid',
      'border-left-color': '#ccc',
      'border-right-color': '#ccc'
    }) }
  `,
  offFocus: css`
    flex-grow: 1;
    padding: 2px 10px;
    height: 80%;
    ${ nthChild(2, {
      'border-left': '1px solid',
      'border-right': '1px solid',
      'border-left-color': '#ccc',
      'border-right-color': '#ccc'
    }) };
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `
}) 

const Dimension = (comp) => {
  class Enhanced extends Component {
    constructor(props){
      super(props)
      this.comp = comp
    }
    render(){
      const { onClick, focus, defaultText, theme } = this.props
      const styles = getDimensionStyle(theme)
      if (focus) {
        return <div {...styles.onFocus} onClick={ onClick }><this.comp { ...this.props }/></div>
      } else {
        return <div {...styles.offFocus} onClick={ onClick }>{ defaultText }</div>
      }
    }
  }
  return Themed(Enhanced)
}

export default Dimension