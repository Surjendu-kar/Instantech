import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Details() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  if (!location.state) return null;

  const jsonTxt = JSON.stringify(location.state, null, 1);

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Typography variant="h6">
        <pre>{jsonTxt}</pre>
      </Typography>
    </Box>
  );
}

export default Details;
