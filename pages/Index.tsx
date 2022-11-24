import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, TouchableWithoutFeedback } from 'react-native';
import SignInRequest from '../objects/request/SignInRequest';
import useRouter from '../libs/hook/useRouter';
import globalStyles from '../styles/Global';
import useAuth from '../libs/hook/useAuth';
import Context from '../shared/context/Context';

function Index() {
  const { navigate } = useRouter();
  const { authenticated, roles, setAuthorize } = useAuth();
  const [signInRequest] = useState(new SignInRequest());
  const [signInKey, setSignInKey] = useState(0);
  const emailInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const { count, setCount } = useContext(Context);
  const signInSubmit = async () => {
    if (!(await signInRequest.check(setSignInKey))) {      
      if (signInRequest.getMessage(() => signInRequest.email)) {
        emailInput.current?.focus();
        return;
      }
      if (signInRequest.getMessage(() => signInRequest.password)) {
        passwordInput.current?.focus();
        return;
      }
    }
    else {
      alert("Dit me may");
    }
  }
  return (
    <View style={globalStyles.page}>
      <Text onPress={() => { navigate("About", { message: "Dit me may" }) }}>Click here to navigate to about page</Text>
      <Text onPress={() => { navigate("Render", { message: "Dit me may" }) }}>Render</Text>
      <Text>Authenticated : {authenticated.toString()}</Text>
      <Text>Roles : {roles.toString()}</Text>
      <Button title="Authorize" onPress={() => setAuthorize(["User"])} />
      <View style={{ marginBottom: 10 }} />
      <Button title="Unauthorize" onPress={() => setAuthorize(false)} />
      <View key={signInKey} style={styles.signInForm}>
        <TextInput ref={emailInput} style={styles.input} placeholder="Email" defaultValue={signInRequest.email} onChangeText={e => signInRequest.email = e}></TextInput>
        <Text style={styles.validation}>{signInRequest.getMessage(() => signInRequest.email)}</Text>
        <TextInput ref={passwordInput} style={styles.input} placeholder="Password" defaultValue={signInRequest.password} onChangeText={e => signInRequest.password = e} secureTextEntry></TextInput>
        <Text style={styles.validation}>{signInRequest.getMessage(() => signInRequest.password)}</Text>
        <Button title='Submit' onPress={e => signInSubmit()}></Button>
        <Button onPress={() => setCount(count + 1)} title='Increment' />
        <Button onPress={() => setCount(count - 1)} title='Drecrement' />
        <Text>Count : {count}</Text>
      </View>
    </View>
  )
}

export default Index
const styles = StyleSheet.create({
  signInForm: {
    width: 300
  },
  input:
  {
    width: 290,
    height: 40,
    borderBottomWidth: 1
  },
  validation: {

  }
});
