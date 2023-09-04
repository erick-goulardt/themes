import { BrowserRouter } from 'react-router-dom';
import {HeaderHome} from './header/HeaderHome';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
        <HeaderHome />
          <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
