import { lazy, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import French from "./assets/lang/fr.json";
import Arabic from "./assets/lang/ar.json";
import English from "./assets/lang/en.json";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./routes/configs";
import BODY from "./layout/BODY";
import HEADER from "./layout/HEADER";
import FOOTER from "./layout/FOOTER";

type StateTypes = {
  lang: { selectedLang: string };
};

type MessageType = {
  default?: { keys: string };
};

interface GetJson {
  [key: string]: () => Promise<Record<string, unknown>>;
}

function App(): React.ReactElement {
  const selectedLang: string = useSelector(
    (state: StateTypes) => state.lang.selectedLang
  );
  const [message, setMessage] = useState({});

  const messageLoader: GetJson = {
    en: () => import("./assets/lang/en.json"),
    fr: () => import("./assets/lang/fr.json"),
    de: () => import("./assets/lang/ar.json"),
  };

  const setMessageData = async () => {
    try {
      const result = await messageLoader[selectedLang]();
      setMessage(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    setMessageData();
  }, [selectedLang]);

  return (
    <IntlProvider locale={selectedLang} messages={message}>
      <div className="App">
        <BrowserRouter>
          <HEADER />
          <BODY routes={routes} />
          <FOOTER />
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;
