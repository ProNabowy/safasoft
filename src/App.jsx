import { Box, CssBaseline, Stack } from "@mui/material";
import useHandleRoutes from "./routes/routes";
import './assets/styles/App.css';
import { ToastContainer } from "react-toastify";
import { addHeaderToAxios } from "./assets/js/useAxiosConfig";

function App() {

  const { routes } = useHandleRoutes();

  addHeaderToAxios();

  return (
    <Stack
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      minHeight={'100vh'}
      bgcolor={'#f4f4f4'}
    >
      <CssBaseline />
      <ToastContainer />
      {routes}
    </Stack>
  );
}

export default App
