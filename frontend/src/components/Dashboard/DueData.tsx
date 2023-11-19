import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, useTheme, Divider } from "@mui/material";
import DueDataItem from "./DueDataITem";

type DueType = "quiz" | "assignment";

type Due = {
  _id: string;
  type: DueType;
  name: string;
  course: string;
  topic: string;
  dueTo: Date;
};

const DueData = () => {
  const theme = useTheme();
  const [dueDataArr, setDueDataArr] = useState<Due[]>([]);

  const fetchDueData = async () => {
    try {
      const response = await fetch(
        "https://quizes-app.onrender.com/api/v1/quiz"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setDueDataArr(data.data.data);
    } catch (error) {
      console.error("Error fetching due data:", error);
    }
  };

  useEffect(() => {
    fetchDueData();
  }, []);

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={3} sx={{ padding: theme.spacing(2), width: "100%" }}>
        <Typography variant={theme.breakpoints.up("md") ? "h4" : "h6"}>
          What's due
        </Typography>
        {dueDataArr.map((item, index) => (
          <React.Fragment key={item._id}>
            <DueDataItem
              type={item.type}
              name={item.name}
              course={item.course}
              topic={item.topic}
              dueTo={item.dueTo}
            />
            {index !== dueDataArr.length - 1 && (
              <Divider key={`divider-${item._id}`} />
            )}
          </React.Fragment>
        ))}
      </Paper>
    </Grid>
  );
};

export default DueData;
