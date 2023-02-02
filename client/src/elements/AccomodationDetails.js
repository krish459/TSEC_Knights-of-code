import "../css/AccomodationDetails.css";
import TextField from "@mui/material/TextField";

export default function AccomodationDetails(props) {
  return (
    <div className="accomodationDetails">
      <div className="input-accomodationDetails">
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Capacity"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Currently living"
          variant="outlined"
        />
        <TextField
          className="input-field description"
          multiline
          minRows={3}
          id="outlined-basic"
          label="how is you locality"
          variant="outlined"
        />
      </div>
      <button onClick={props.nextPage}>Save and Continue</button>
    </div>
  );
}
