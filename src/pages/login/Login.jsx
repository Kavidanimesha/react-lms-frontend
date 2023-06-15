import React from "react";
import login_background from "../../images/login_background.jpg";
import Paper from "@mui/material/Paper";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';



const Login = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
  return (
    <div
      style={{ backgroundImage: `url(${login_background})`, height: "100vh" }}
    >
      <Grid
        container
        xs={12}
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
    <Paper elevation={3} style={{ width: "500px", padding: "20px" }}>
        <Grid item display={"flex"} flexDirection={"column"} gap={2}>
            <Typography color={"primary"}>
              Enter Your Login Details
            </Typography>
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

        <Grid item xs={12} display={'flex'} justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Button color='error' style={{fontSize:'12px'}} onClick={handleClickOpen}>
                Forget Password ?
            </Button>
      <     Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>

                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
          </Grid>
        <Grid
            item
            xs={12}
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            marginTop={2}
          >
            <Button variant="outlined" color="primary">
              LOGIN
            </Button>
          </Grid>
    </Paper>
      </Grid>
    </div>
  );
};

export default Login;
