import { Typography, Button, Grid, Paper } from "@mui/material";

const ExamTips = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Left half for ExamTips */}
        <Grid item xs={12} md={6}>
          <Paper
            style={{ padding: "20px", height: "300px", boxShadow: "none" }}
          >
            <Typography variant="h3">Exams Time</Typography>
            <Typography variant="h5">
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </Typography>
            <Typography variant="h6">
              "Nothing happens untill something moves" - Albert Einstein
            </Typography>
            <Button variant="contained">View exams tips</Button>
          </Paper>
        </Grid>

        {/* Right half for the image */}
        <Grid item xs={12} md={6}>
          <Paper
            style={{ padding: "20px", height: "300px", boxShadow: "none" }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK56FyR7yewswI24DCvCgxkB14J2xTRbhGZg&usqp=CAU"
              alt="exam tips"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ExamTips;
