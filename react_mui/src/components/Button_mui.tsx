import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import { FormatBold } from "@mui/icons-material";
import { FormatItalic } from "@mui/icons-material";
import { FormatUnderlined } from "@mui/icons-material";
import { useState } from "react";

const Button_mui = () => {
  let [formats, setFormats] = useState<string[] | null>(null);
  console.log(formats)

  const HandleFormat = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] 
  ) => {

    return setFormats(updatedFormats)
  };
  return (
    <Stack spacing={4} margin="50px">
      <Stack spacing={2} display="block" direction="row">
        <Button variant="text" href="https://google.com/">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        {/* <Button variant="outlined" color="primary">Outlined</Button>
        <Button variant="outlined" color="primary">Outlined</Button> */}
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<ScheduleSendIcon />}
          color="warning"
          size="small"
        >
          send
        </Button>
        <Button variant="outlined" endIcon={<ScheduleSendIcon />}>
          send
        </Button>
        <IconButton
          size="small"
          color="success"
          aria-label="send"
          sx={{ boxShadow: "0px 0px 10px red" }}
          onClick={() => alert("clicked")}
        >
          <ScheduleSendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          size="medium"
          color="secondary"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("are you sure?")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={HandleFormat}
          size="small"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default Button_mui;
