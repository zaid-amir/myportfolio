import React from "react";
// import { LinearProgress } from "@material-ui/core";
import { LinearProgress, Typography } from "@mui/material";

const SkillBar = ({ skill, value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
      <div style={{ width: "30%", paddingX: "0.2rem" }}>
        <Typography
          sx={{
            margin: 0,
            fontSize: { xs: "0.8rem", md: "1rem", lg: "1rem" },
          }}
        >
          {skill}
        </Typography>
      </div>
      <LinearProgress
        variant="determinate"
        value={value}
        style={{ width: "70%", height: 10 }}
      />
    </div>
  );
};

export default SkillBar;
