import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ALlRoutes } from "./routes/Routes";
import { Fragment, Suspense } from "react";
import MainLayout from "./layout/MainLayout";
import LazyLoad from "./components/lazyload/LazyLoad";

function App() {
  return (
    <>
      <Router>
        <div className="App">
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
                      <Suspense fallback={<LazyLoad />}>
                        <Page />
                      </Suspense>
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
