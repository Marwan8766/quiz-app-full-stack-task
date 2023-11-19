import { Paper, Typography, Box, Avatar, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

type AnnouncementItemProps = {
  image: string;
  name: string;
  title: string;
  message: string;
};

const AnnouncementItem = (props: AnnouncementItemProps) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box display="flex" alignItems="center" marginBottom={2}>
      <Item
        sx={{
          flex: isLargeScreen ? "0 0 auto" : "auto",
          marginRight: isLargeScreen ? 0 : 1,
          padding: theme.spacing(1),
          width: isLargeScreen ? "auto" : "100%",
        }}
      >
        <Avatar
          alt={props.name}
          src={props.image}
          sx={{ width: 48, height: 48 }}
        />
      </Item>
      <Item
        sx={{
          flex: isLargeScreen ? "0 0 auto" : "auto",
          marginRight: isLargeScreen ? 0 : 2,
          padding: theme.spacing(1),
          width: isLargeScreen ? "auto" : "100%",
        }}
      >
        <Typography variant={isLargeScreen ? "h6" : "subtitle1"}>
          {props.name}
        </Typography>
        <Typography variant={isLargeScreen ? "subtitle2" : "body2"}>
          {props.title}
        </Typography>
      </Item>
      <Item sx={{ flex: "auto", padding: theme.spacing(1) }}>
        <Typography variant={isLargeScreen ? "body1" : "body2"}>
          {props.message}
        </Typography>
      </Item>
    </Box>
  );
};

export default AnnouncementItem;
