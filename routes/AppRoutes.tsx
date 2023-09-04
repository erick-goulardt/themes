import { Route, Routes } from 'react-router-dom';
import {Sala} from '../pages/Sala';
import {Quarto} from '../pages/Quarto';
import { Main } from '../main/Main';

export const AppRoutes = () => {
  return (
    <Routes>
          <Route path="/sala" Component={Sala} />
          <Route path="/quarto" Component={Quarto} />
          <Route path="/main" Component={Main} />
    </Routes>
  );
}

