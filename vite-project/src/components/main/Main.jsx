import { Card, Stack, Typography } from "@mui/material";
import { useState } from "react";

function Main() {
  const [data, setData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50")
    .then((response) => response.json())
    .then((json) => setData(json));
  console.log(data);

  return (
    <Stack
      direction={"row"}
      spacing={2}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}>
      {data.map((item) => (
        <Card style={{ width: "350px", margin: "20px" }}>
          <img style={{ width: "350px", height: "150px" }} src={item.thumbnailUrl} alt="" />
          <Typography variant="subtitle1" color="initial" width={"250px"}>
            {item.title}
          </Typography>
        </Card>
      ))}
    </Stack>
  );
}

export default Main;
