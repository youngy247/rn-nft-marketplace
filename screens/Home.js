import { useState } from 'react'
import { View, SafeAreaView, FlatList, Text} from 'react-native'

import { COLORS, NFTData } from '../constants' 
import { FocusedStatusBar, NFTCard, HomeHeader } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}/>
    </SafeAreaView>
  )
}

export default Home