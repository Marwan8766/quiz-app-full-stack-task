import { Container, Box, Grid } from "@mui/material";
import ExamTips from "../ExamTips";
import Announcements from "../Announcements";
import DueData from "../DueData";

const Body = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingLeft: { xs: "20px", md: "120px" },
        paddingRight: "20px",
        maxWidth: { xs: "lg", md: "xl" },
      }}
    >
      {/* Main wide box with padding and shadow */}
      <Box my={3} boxShadow={3}>
        <ExamTips />
      </Box>

      {/* Two boxes next to each other with shadows */}
      <Grid container spacing={3}>
        <Announcements />
        <DueData />
      </Grid>
    </Container>
  );
};

export default Body;
