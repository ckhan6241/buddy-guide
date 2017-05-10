import React from 'react'
import { Flex } from 'glamor/jsxstyle'
import { css } from 'glamor'
import Themed from '../../containers/Themed'
import StarRatingComponent from 'react-star-rating-component';

const getStyle = (theme) => ({
  container: css`
    border: 1px solid;
    flex-direction: column;
    margin: 10;
    background-color: white;
    border-radius: 5;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 2px;
    }
  `,
  name: css`
    font-size: ${theme.fontSizes.xlarge};
    font-weight: bold;
    padding: 0px 10px;
  `,
  demographic: css`
    list-style: none;
    padding: 0px 12px;
    font-size: ${theme.fontSizes.large};
    & > * {
      padding: 2px;
    }
  `,
  description: css`
    font-size: ${theme.fontSizes.large};
    padding: 0px 12px;
    font-style: italic;
    color: #777;
  `,
  rightContainer: css`
    flex-direction: column;
    align-items: flex-end;
    & > * {
      padding: 5px;
    }
  `,
  bottomContainer: css`
    width: 80%;
    justify-content: space-between;
    padding: 0px 0px 0px 10px;
  `,
  ratingContainer: css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSizes.large};
    color: #333;
    & > * {
      padding: 0px 2px;
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
  `
})

const ProfileContainer = (props) => { 
  const { id, name, level, imageUrl, languages, hourlyRate, dayRate, age, gender, nationality, description, overview, knowledge, vehicle, vehicleFee,
          review, reviewCount, responseRate, responseTime, place, theme } = props
  const styles = getStyle(theme)
  return (
    <Flex height={ 225 } width= { '100%' } {...styles.container} onClick={ () => {window.location='#/guide-card/'+id} }>
      <Flex>
        <Flex height={ 200 } width={ 200 } >
          <img src={ imageUrl } height={ 200 } width={ 200 }/>
        </Flex>
        <Flex flexDirection={ 'column '} height={ 200 } width={ '80%' } flex={ 1 }>
          <Flex>
            <div {...styles.name}>
              { name } 
            </div>
            <div>
              { languages.map(l => l) }
            </div>
          </Flex>
          <ul {...styles.demographic}>
            <li> { age } </li>
            <li> { gender } </li>
            <li> { nationality } </li>
          </ul>
          <p {...styles.description}> { `“ ${description} ”` } </p>
        </Flex>
        <Flex height={ 150 } width= { '15%' } {...styles.rightContainer}>
          <div> {`S$${hourlyRate} / hour`} </div>
          <div> {`S$${dayRate} / day`} </div>
          <div> message button </div>
          <div> like button </div>
        </Flex>
      </Flex>
      <Flex {...styles.bottomContainer}>
        <div {...styles.ratingContainer}>
          <StarRatingComponent
            name="StarRatingComponent"
            startCount={ 5 }
            value={ review }
            editing={ false }
            starColor={ "#009999" }
            emptyStarColor={ "#ccc" }
          /> <div> { reviewCount + (reviewCount === 1 ? ' review' : ' reviews')} </div>
        </div>
        <Flex> <div {...styles.responseTitle}> Response rate: </div> <div {...styles.responseValue}> { responseRate } </div> </Flex>
        <Flex> <div {...styles.responseTitle}> Response time: </div> <div {...styles.responseValue}> { responseTime } </div> </Flex>
      </Flex>
    </Flex>
  )
}

export default Themed(ProfileContainer)