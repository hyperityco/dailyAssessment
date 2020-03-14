import React, { useEffect, useState, useRef } from 'react'
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashLogo from './assets/images/lifter.png'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import useLinking from './navigation/useLinking'

const Stack = createStackNavigator()

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const [initialNavigationState, setInitialNavigationState] = useState()
  const containerRef = useRef()
  const { getInitialState } = useLinking(containerRef)

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        setInitialNavigationState(await getInitialState())

        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        })
      } catch (error) {
        console.warn(error)
      } finally {
        setTimeout(() => {
          setLoadingComplete(true)
        }, 1500)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  const SplashScreen = () => {
    return (
      <View style={styles.splashScreenContainer}>
        <Image style={styles.splashLogo} source={SplashLogo} />
      </View>
    )
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return <SplashScreen />
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  splashLogo: {
    width: 240,
    height: 240,
  },
  container: {
    flex: 1,
    color: '#FE5A3E',
  },
})

export default App
