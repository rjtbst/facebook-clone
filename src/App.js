import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

import Box from '@mui/material/Box';
import Stack  from "@mui/material/Stack";
import Navbar from "./components/navbar/Navbar";


function App() {
  
  return (
    <Box>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">    
     <Sidebar/>
     <Feed/>
     <RightBar/>
     </Stack>

    </Box>
  );
}

export default App;
