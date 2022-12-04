import Toast from "react-native-toast-message";
import Provider from "./context/Provider";
import AuthorizeProvider from "./libs/AuthorizeProvider";
import React from "react";
import Routers from "./Routes";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: '652368417331-i91jda7knc2ardd0pnkq0cr3vog446qf.apps.googleusercontent.com',
});


const App = () => {
  return (
    <AuthorizeProvider>
      <Provider>
        <Routers />
        <Toast />
      </Provider>
    </AuthorizeProvider>
  );
}

export default App;