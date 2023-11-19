import { Paper, Typography, Box, Button, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

type DueType = "quiz" | "assignment";

type DueItemProps = {
  type: DueType;
  name: string;
  course: string;
  topic: string;
  dueTo: Date;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left", // Align text to the left
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
  marginLeft: 0,
}));

const DueDataItem = (props: DueItemProps) => {
  const theme = useTheme();
  const Icon =
    props.type === "quiz" ? (
      <HourglassTopOutlinedIcon />
    ) : (
      <FactCheckOutlinedIcon />
    );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      marginBottom={2}
    >
      <Item
        sx={{
          flex: "0 0 auto",
          marginBottom: 0,
          padding: 1,
          textAlign: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          {Icon}
          <Typography
            variant={theme.breakpoints.up("md") ? "h5" : "h6"}
            sx={{ paddingLeft: 1 }}
          >
            {props.name}
          </Typography>
        </Box>
      </Item>
      <Item sx={{ flex: "0 0 auto", marginBottom: 1, padding: 1 }}>
        <Typography variant={theme.breakpoints.up("md") ? "h6" : "body1"}>
          Course: {props.course}
        </Typography>
        <Typography variant={theme.breakpoints.up("md") ? "h6" : "body1"}>
          Topic: {props.topic}
        </Typography>
        <Typography variant={theme.breakpoints.up("md") ? "h6" : "body1"}>
          Due to: {new Date(props.dueTo).toLocaleDateString("en-US")}
        </Typography>
      </Item>
      <Item sx={{ flex: 1, padding: 1, textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{ fontSize: theme.breakpoints.up("md") ? "1rem" : "0.8rem" }}
        >
          Start {props.type === "quiz" ? "Quiz" : "Assignment"}
        </Button>
      </Item>
    </Box>
  );
};

export default DueDataItem;
