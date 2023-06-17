import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Login = () => {

  const [openPassword, setOpenPassword] = React.useState(false);

  const handleClickOpenPassword = () => {
    setOpenPassword(true);
  };

  const handleClosePassword = () => {
    setOpenPassword(false);
  };

  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  return (
    <div>
      <Grid container display={'flex'}>
        <Grid item>
          <img src="assests/images/logo.png" alt="logo" style={{height:'100px' }} />  
        </Grid>
        <Grid item marginTop={4}>
          <Typography variant='h4'> ABC Company</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        display={"flex"}
        position={'relative'}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={3} style={{ width: "500px", padding: "20px" }}>
          <Grid item display={"flex"} flexDirection={"column"} gap={2}>
            <Typography color={"primary"}>Enter Your Login Details</Typography>
            <TextField
              fullWidth
              variant="standard"
              name="userName"
              label="User Name"
            />
            <TextField
              fullWidth
              variant="standard"
              name="password"
              label="Password"
            />
          </Grid>

          <Grid container display={"flex"}>
{/* Forget Password */}
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <Button
                color="error"
                style={{ fontSize: "12px" }}
                onClick={handleClickOpenPassword}
              >
                Forget Password ?
              </Button>
              <Dialog open={openPassword} onClose={handleClosePassword}>
                <DialogContent>
                  <Grid item xs={12} marginBottom={2}>
                    <Typography variant="h4" color="primary">
                      Reset Your Password
                    </Typography>
                  </Grid>
                  <Typography marginBottom={2}>
                    Enter your email and we'll send you instructions on how to
                    reset your password.
                  </Typography>
                  <TextField name="email" label="Email" fullWidth />
                </DialogContent>

                <DialogActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClosePassword}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClosePassword}
                  >
                    Send
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
{/* SignUp */}
            <Grid
              item
              xs={6}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <Button
                color="primary"
                style={{ fontSize: "12px" }}
                onClick={handleClickOpenSignUp}
              >
                Don't have an account? SignUp
              </Button>
              <Dialog open={openSignUp} onClose={handleCloseSignUp}>
                <DialogContent>
                  <Grid item xs={12} marginBottom={2}>
                    <Typography variant="h4" color="primary">
                      Create New Account
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={'flex'} gap={2} marginBottom={2}>
                    <TextField fullWidth name='firstName' label='First Name' />
                    <TextField fullWidth name='lastName' label='Last Name' />
                  </Grid>
                  <Grid item xs={12} display={'flex'} flexDirection={'column'} gap={2} marginBottom={2}>
                    <TextField fullWidth name='email' label='Email' />
                    <TextField fullWidth name='password' label='Password' />
                  </Grid>
                  <p>Signing up for a Webflow account means you agree to the <a href="https://webflow.com/dashboard/signup"> Privacy Policy </a>  and <a href="https://webflow.com/dashboard/signup"> Terms of Service </a>.</p>
                </DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleCloseSignUp}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCloseSignUp}
                  >
                    Create
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            marginTop={2}
          >
            <Button variant="outlined" color="success">
              LOGIN
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
