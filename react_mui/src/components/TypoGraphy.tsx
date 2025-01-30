import { Typography } from "@mui/material";

const TypoGraphy = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom sx={{ color: "yellowgreen" }}>
        h1 heading
      </Typography>
      <Typography variant="h2" component="h1" gutterBottom>
        h2 heading
      </Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="body1">this is also body 1</Typography>
      <Typography variant="caption">This is caption good for small texts</Typography>

      <Typography variant="subtitle1">This is subtitle1</Typography>
      <Typography variant="subtitle2">This is subtitle2</Typography>

      <Typography variant="body1" sx={{ color: "red",fontSize:"55px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas
        odit, delectus eum labore atque iure blanditiis voluptatem provident
        fuga, commodi ad incidunt cumque maxime praesentium ipsa optio expedita!
        Tempora!
      </Typography>
      <Typography variant="body2" sx={{ color: "green" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quas
        odit, delectus eum labore atque iure blanditiis voluptatem provident
        fuga, commodi ad incidunt cumque maxime praesentium ipsa optio expedita!
        Tempora!
      </Typography>
    </div>
  );
};

export default TypoGraphy;
