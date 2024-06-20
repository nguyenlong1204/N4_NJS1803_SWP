import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ALlRoutes } from "./routes/Routes";
import { Fragment } from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <div className="App" style={{overflow:"hidden"}}>
          <Routes>
            {ALlRoutes.map((item, index) => {
              let Layout = MainLayout;
              if (item.layout) {
                Layout = item.layout;
              } else if (item.layout === null) {
                Layout = Fragment;
              }
              const Page = item.component;
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
