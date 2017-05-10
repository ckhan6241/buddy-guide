import React, { Component } from 'react'
import Themed from '../../containers/Themed'
import { css } from 'glamor'
import { Flex, View } from 'glamor/jsxstyle'
import ProfileContainer from '../../views/profile-preview/ProfileContainer'
import ProfileDetail from '../../components/display/ProfileDetail'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProfileBanner = props => <ProfileContainer {...props}/>

// const Tab = props => <div> Tab </div>

const components = []

const Divider = props => <div> Divider </div>


class GuideCardComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { profile } = this.props
    return (
      <Flex flexDirection="column">
        <ProfileBanner {...profile}/>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Review</Tab>
          </TabList>
          <TabPanel>
            <ProfileDetail {...profile}/>
          </TabPanel>
          <TabPanel>
            <div> 2 </div>
          </TabPanel>
        </Tabs>
        { 
          components.map(
            comp => (
              <div>
                <Divider/>
                <comp/>
              </div>
            )
          ) 
        }
      </Flex>
    )
  }
}

export default Themed(GuideCardComponent)