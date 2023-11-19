import { useState, useEffect } from "react";
import AnnouncementItem from "./AnnouncementItem";
import { Typography, Paper, Grid } from "@mui/material";

type Announcement = {
  _id: string;
  image: string;
  name: string;
  title: string;
  message: string;
};

const Announcements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(
        "https://quizes-app.onrender.com/api/v1/announcement"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAnnouncements(data.data.data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <Grid item xs={12} md={8}>
      <Paper
        elevation={3}
        sx={{
          padding: {
            xs: "5px",
            sm: "10px",
            md: "15px",
            lg: "20px",
            xl: "25px",
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Announcements
        </Typography>
        {announcements.map((item: Announcement) => (
          <AnnouncementItem
            key={item._id}
            image={item.image}
            name={item.name}
            title={item.title}
            message={item.message}
          />
        ))}
      </Paper>
    </Grid>
  );
};

export default Announcements;
