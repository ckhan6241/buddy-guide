import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.css'
import { View, Flex } from 'glamor/jsxstyle'
import { css } from 'glamor'
import Themed from '../../containers/Themed'
import _ from 'lodash'
import footprintSrc from './footprint-11.png'

const getStyle = (theme) => ({
  container: css`
    border: 1px solid;
    flex-direction: column;
    padding: 20;
    background-color: white;
    border-radius: 5;
    overflow: scroll;
    &:hover {
      box-shadow: 0px 0px 2px;
    }
    margin: auto
  `,
  demographic: css`
    list-style: none;
    padding: 0px 0px;
    font-size: ${theme.fontSizes.xlarge};
    & > * {
      padding: 2px;
    }
  `,
  responseTitle: css`
    font-size: ${theme.fontSizes.large};
    padding: 2px;
    color: #333;
  `,
  responseValue: css`
    font-size: ${theme.fontSizes.large};
    font-weight: bold;
    padding: 2px;
  `,
  largeFont: css`
    font-size: ${theme.fontSizes.huge};
    padding: 0px 5px;
    font-weight: bold;
  `,
  overviewContainer: css`
    font-size: ${theme.fontSizes.xlarge};
  `,
  overviewHeader: css`
    color: #ff0066;
  `,
  arrows: css`
    & > i {
      opacity: 0.0;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
    &:hover i {
      opacity: 1.0;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
  `,
  divider: css`
    width: 100%;
    border: 1px solid grey;
    margin: 20px 0px;
  `,
  memoryTitle: css`
    font-size: ${theme.fontSizes.huge};
    margin: 20px 0px 0px 0px;
  `
})

const getMemoryStyle = (theme) => ({
  container: css`
    margin: 40px 0px;
    & p {
      margin: 5px;
    }
  `,
  date: css`
    font-size: ${theme.fontSizes.huge};
  `,
  from: css`
    font-size: ${theme.fontSizes.xlarge};
    color: #1e4e79;
    & > i {
      color: black;
    }
  `,
  footprints: css`
    font-size: ${theme.fontSizes.xlarge};
  `,
  text: css`
    font-size: ${theme.fontSizes.xlarge};
    flex: 1;
  `,
  imageContainer: css`
    max-width: 50%;
    & > img {
      max-height: 250px;
      max-width: 100%;
    }
  `
})

const Memory = (props) => {
  const { date, weather, from, to, footprints, imageUrl, text, theme } = props
  const styles = getMemoryStyle(theme)
  return (
    <Flex {...styles.container} flexDirection='column'>
      <p {...styles.date}> { `${date}, ${weather}`} </p>
      <p {...styles.from}> {from} <i className="fa fa-caret-right" aria-hidden="true"></i> {to} </p>
      <Flex {...styles.footprints}>
        <img src={ footprintSrc } height='25' width='25'/>
        Footprints: {_.first(footprints)}
        {
          _.tail(footprints).map(f => (
            <Flex>
              <View margin='0px 5px'>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </View>
              { f }
            </Flex>
          ))
        }
      </Flex>
      <Flex>
        <View {...styles.imageContainer}>
          <img src={ imageUrl } display='block'/>
        </View>
        <p {...styles.text}>{ text }</p>
      </Flex>
    </Flex>
  )
}

class GuideDetailComponent extends Component {

  handleClick(url) {
    window.location=url
    this.forceUpdate()
  }

  render() {
    const { data, theme, height, prev, next } = this.props
    const { id, name, languages, hourlyRate, age, gender, country, availability, activities, aboutMe, welcomeYouWith, expAsHost, expAsTraveller, memoryCount,
            responseRate, responseTime, memories} = data
    const styles = getStyle(theme)
    return (
      <div styles={{overflow:'scroll', position:'relative', height: height}} >
    <View justifyContent='space-around' overflow='scroll' position='relative' height={height}>
      <Flex {...styles.arrows} onClick={ () => {this.handleClick('#/home-page/'+prev)} } height={ height } flexDirection='column' alignItems='center' justifyContent='center' position='fixed' top='34px' left='0px' width='15%'>
        <i className="fa fa-arrow-circle-left fa-5x" aria-hidden="true"></i>
      </Flex>
      <Flex width= { '70%' } {...styles.container}>
        <Flex>
          <View width={ '60%' }>
            <ul {...styles.demographic}>
              <li> { name } </li>
              <li> { `${age}, ${gender}` } </li>
              <li> <i className="fa fa-home" aria-hidden="true"></i> { country } </li>
              <li> { languages.map( l => l) } </li>
            </ul>
          </View>
          <Flex flexDirection={ 'column' }>
            <View flex={ 2 } {...styles.responseTitle}>
              {`S$${hourlyRate} / hour`}
            </View>
            <Flex flex={ 1 }>
               <div {...styles.responseTitle}> Response rate: </div> <div {...styles.responseValue}> { responseRate } </div> 
            </Flex>
            <Flex flex={ 1 }>
              <div {...styles.responseTitle}> Response time: </div> <div {...styles.responseValue}> { responseTime } </div> 
            </Flex>
            <View flex={ 1 }>
              <i className="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
            </View>
          </Flex>
        </Flex>
        <p {...styles.overviewContainer}> <strong {...styles.overviewHeader}> Availability: </strong> { availability } </p>
        <p {...styles.overviewContainer}> <strong {...styles.overviewHeader}> Activities: </strong> { activities } </p>
        <p {...styles.overviewContainer}> <strong {...styles.overviewHeader}> About me: </strong> { aboutMe } </p>
        <p {...styles.overviewContainer}> <strong {...styles.overviewHeader}> I will welcome you with: </strong> { welcomeYouWith } </p>
        <Flex width={ '100%' } justifyContent='space-around' padding='0px 10px'>
          <Flex flexDirection={ 'column' }>
            <Flex alignItems='flex-end'>
              <div {...styles.largeFont} > { expAsHost } </div>
              <div> exp </div>
            </Flex>
            <View> As host </View>
          </Flex>
          <Flex flexDirection={ 'column' }>
            <Flex alignItems='flex-end'>
              <div {...styles.largeFont} > { expAsTraveller } </div>
              <div> exp </div>
            </Flex>
            <View> As traveller </View>
          </Flex>
          <Flex flexDirection={ 'column' }>
            <div {...styles.largeFont} > { memoryCount } </div>
            <View> Memories </View>
          </Flex>
        </Flex>
        <div {...styles.divider}> </div>
        <div {...styles.memoryTitle}> MEMORIES </div>
        {
          memories.map(m => 
            <Memory { ...m } theme={ theme }/>)
        }
      </Flex>
      <Flex {...styles.arrows} height={ height } flexDirection='column' alignItems='center'
          justifyContent='center' position='fixed' top='34px' right='0px' width='15%'
          onClick={ () => {this.handleClick('#/home-page/'+next)} }>
        <i className="fa fa-arrow-circle-right fa-5x" aria-hidden="true"></i>
      </Flex>
    </View></div>
    )
  }
}

export default Themed(GuideDetailComponent)