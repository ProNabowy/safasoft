import { Box, CssBaseline, Stack } from "@mui/material";
import useHandleRoutes from "./routes/routes";
import './assets/styles/App.css';

function App() {

  const { routes } = useHandleRoutes();

  return (
    <Stack
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
      bgcolor={'#f4f4f4'}
    >
      <CssBaseline />
      {routes}
    </Stack>
  );
}

export default App
