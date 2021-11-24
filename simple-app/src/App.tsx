
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Topbar />}>
          {/* {/* <Route path="expenses" element={<Expenses />} /> */}
          <Route path="login" element={<LoginPage />} />
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
