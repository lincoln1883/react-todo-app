import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import NotFound from '../routes/NotFound';
import Layout from './Layout';
import SinglePage from '../routes/SinglePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
