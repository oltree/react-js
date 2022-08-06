import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <CircularProgress sx={{ position: "absolute", top: "50%", left: "50%" }} />
  );
};

export default Spinner;
