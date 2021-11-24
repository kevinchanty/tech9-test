import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Topbar />}>
          {/* {/* <Route path="expenses" element={<Expenses />} /> */}
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="welcome" element={<WelcomePage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
