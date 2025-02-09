import { CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <CircularProgress
      sx={{ position: "absolute", left: "50%", top: "50%", zIndex: 1000 }}
    />
  );
}

export default Spinner;
