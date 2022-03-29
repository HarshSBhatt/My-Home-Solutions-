//Author Arunkumar Gauda - B00871355
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { AppContext } from "AppContext";
import api from "common/api";
import React, { useContext, useEffect, useState } from "react";

function ListRoomSeekers() {
  const {
    state: { authToken },
  } = useContext(AppContext);
  const [user, setUser] = useState([]);
  const [response, setResponse] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(async () => {
    const res = await api.get("/superadmin/allroomseekers", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const users = res.data.user;
    setUser(users);
  }, []);

  const handleClick = (_id) => {
    const res = api
      .put(
        `/superadmin/rejectuser/${_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      )
      .then((res) => {
        setOpen(true);
        setResponse(res.data.message);
        setUser(user.filter((u) => u._id !== _id));
      });
  };
  return (
    <Box padding="2rem" bgcolor="#e9e9e9">
      <Typography
        textAlign="left"
        fontWeight="bold"
        fontStyle="Roboto"
        fontSize="2rem"
      >
        Room Seekers
      </Typography>
      <Grid mt="2px" container spacing={2} padding="2rem">
        {user.map((ele) => (
          <Grid key={ele.id} item lg={3} md={4} sm={6} xs={12}>
            <Card
              sx={{
                borderBottom: 1,
                borderRadius: 5,
                borderColor: "primary.main",
              }}
            >
              <CardContent>
                <Box textAlign={"left"} fontStyle="Roboto">
                  <Avatar
                    variant="rounded"
                    alt={ele.firstName}
                    src={ele.picture}
                    sx={{ height: 120, width: 120, margin: "auto" }}
                  />
                  <Typography component={"div"} variant={"h6"}>
                    {ele.firstName} {ele.lastName}
                  </Typography>
                  <Typography color="text.secondary">
                    Username: {ele.username}
                  </Typography>
                  <Typography color="text.secondary">{ele.email}</Typography>
                </Box>
                <Button onClick={() => handleClick(ele._id)}>Reject</Button>
                <Snackbar open={open} autoHideDuration={600}>
                  <Alert severity="success" sx={{ width: "100%" }}>
                    {response}
                  </Alert>
                </Snackbar>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListRoomSeekers;
