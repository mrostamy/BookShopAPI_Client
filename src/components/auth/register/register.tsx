import Box from "@mui/material/Box";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { useRef, useState } from "react";
import * as z from 'zod'

function Register() {

  const validationPass=z.object({
    password:z.string(),
    confirm:z.string()
  }).refine((data)=>{data.password===data.confirm},{message:"Passwords Dont Match",path:["confirm"]})
  
  const [isChecked, setChecked] = useState(false);

  const [isMatch, setMatch] = useState(false);
  const passRef=useRef("")


  function onCheckClick(value) {
    setChecked(value.target.checked);
  }

  function checkConfirm(value){
    if(value.target.value==passRef.current.value){
      setChecked(true)
    }else{
      setChecked(false)
    }
  }

  return (
    <>
      <Paper
        square={false}
        sx={{ bgcolor: "#f2f3f7" }}
        component={"form"}
        action={"https://www.google.com?q=car"}
      >
        <Box p={3}>
          <Divider sx={{ color: "#d4d4d4" }}>
            <Typography variant="h4" sx={{ color: "#636363" }}>
              Register
            </Typography>
          </Divider>
          <Typography sx={{ color: "#999999" }} m={2}>
            Create your account. It's free and only takes a minute.
          </Typography>
        </Box>
        <Box sx={{ marginLeft: "1px" }}>
          <TextField
            required
            size={"small"}
            sx={{ marginRight: "10px", bgcolor: "#ffffff" }}
            placeholder="First Name"
            variant="outlined"
          />
          <TextField
            required
            size={"small"}
            sx={{ bgcolor: "#ffffff" }}
            placeholder="Last Name"
            variant="outlined"
          />
        </Box>
        <Stack sx={{ margin: "5px" }}>
          <TextField
            required
            size={"small"}
            sx={{ bgcolor: "#ffffff", marginTop: "20px" }}
            placeholder="User Name"
            variant="outlined"
          />
          <TextField
            required
            size={"small"}
            sx={{ bgcolor: "#ffffff", marginTop: "20px" }}
            placeholder="Email"
            variant="outlined"
          />
          <TextField
            required
            size={"small"}
            sx={{
              bgcolor: "#ffffff",
              marginTop: "20px",
              "[&::-webkit-inner-spin-button]": "appearance-none",
            }}
            placeholder="Phone Number"
            variant="outlined"
            type="text"
          />
          <TextField
            inputRef={passRef}
            required
            size={"small"}
            sx={{ bgcolor: "#ffffff", marginTop: "20px" }}
            placeholder="Password"
            variant="outlined"
          />
          <TextField
            onChange={checkConfirm}
            required
            size={"small"}
            sx={{ bgcolor: "#ffffff", marginTop: "20px" }}
            placeholder="Confirm Password"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox onClick={onCheckClick} />}
            label={
              <Typography>
                I accept the{" "}
                <Link sx={{ color: "#5bb85d" }} href="#" underline="hover">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link sx={{ color: "#5bb85d" }} href="#" underline="hover">
                  Privacy Policy
                </Link>
              </Typography>
            }
          />
          <Button type="submit" variant="contained" disabled={!isChecked}>
            Register Now
          </Button>
        </Stack>
      </Paper>
      <Typography>
        Already have an account?{" "}
        <Link href="#" sx={{ "::hover": "underline-none" }}>
          Sign in
        </Link>
      </Typography>
    </>
  );
}

export default Register;
