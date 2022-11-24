import Toast from "react-native-toast-message";
import Provider from "./shared/context/Provider";
import Routers from "./Routes";
import AuthorizeProvider from "./libs/AuthorizeProvider";

export default function App() {
  return (
    <AuthorizeProvider>
      <Provider>
        <Routers />
        <Toast />
      </Provider>
    </AuthorizeProvider>
  );
}

