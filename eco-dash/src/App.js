import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
 import Form from "./scenes/form";
 import Line from "./scenes/line";
 import Pie from "./scenes/pie";
 import faq from "./scenes/faq";

function App() {
  const [theme, colorMode] = useMode();
  return (
    //setting the theme in the app
    //Provider sets the value
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
               <Route path="/bar" element={<Bar />} />
               <Route path="/line" element={<Line />} />           
              <Route path="/pie" element={<Pie />} />
              <Route path="/form" element={<Form />} />
              {/* <Route path="/FAQ" element={<FAQ />} /> */}
              {/*<Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />

              
             
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
