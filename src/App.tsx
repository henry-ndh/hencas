import { ThemeProvider } from '@/components/theme-provider';
import AppRoutes from './AppRoutes';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  console.log(AppRoutes);
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} path={route.path} element={<>{element}</>} />;
        })}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
