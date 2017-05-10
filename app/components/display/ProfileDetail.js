import React from 'react'

const ProfileDetail = (props) => {
  const {overview} = props

  return (
    <div>
      { overview }
      <div>Overview</div>
      <div>Knowledge</div>
      <div>Vehicle</div>
      <div>Prices</div>
    </div>
  )

}

export default ProfileDetail