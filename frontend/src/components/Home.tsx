import { connect } from "react-redux";
import { login, logout } from "../actions/actions";
import { AuthState } from "../types/types";
import { Button, Container, Typography, Box } from "@mui/material";

interface HomeProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const Home = (props: HomeProps) => {
  const handleButtonClick = () => {
    props.isLoggedIn ? props.logout() : props.login();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          sx={{ mt: 2 }}
        >
          {props.isLoggedIn ? "Logout" : "Login without credentials"}
        </Button>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state: AuthState) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps, { login, logout })(Home);
