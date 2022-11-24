import React, { useEffect, useReducer, useState } from 'react'
import { View, Text } from 'react-native'
import useRouter from '../../libs/hook/useRouter';

function Header() {
  const { navigate, canGoBack, addListener, goBack } = useRouter();
  const [state, setState] = useState(0);
  addListener("state", (e) => {
    setState(Math.random())
  });
  useEffect(() => {

  }, [state]);
  return (
    <View style={{ backgroundColor: "blue", paddingTop: 20, paddingBottom: 10, paddingLeft: 8 }}>
      {
        canGoBack() ?
        <Text onPress={() => goBack() }>Go back</Text>
        :
        null
      }
      <Text onPress={() => { navigate("Unauthorized") }} style={{ fontSize: 24 }}>This is header</Text>
    </View>
  )
}

export default Header