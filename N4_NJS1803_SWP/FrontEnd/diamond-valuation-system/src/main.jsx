import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import AuthContext from "./components/GlobalContext/AuthContext.jsx";
import theme from "./themes/theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <AuthContext>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <App />
        </AuthContext>
    </ChakraProvider>
);
