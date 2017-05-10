import React from 'react'
import defaultTheme from '../defaultTheme'

const Themed = Comp => {
  const themed = (props, context) => {
    const nextProps = props.theme ?
      props : { ...props, theme: defaultTheme }
    return <Comp { ...nextProps } />
  }
  themed.displayName = `${ Comp.displayName || Comp.name }`
  return themed
}

export default Themed