import "../css/PropertyDetails.css";
import TextField from "@mui/material/TextField";

export default function PropertyDetails(props) {
  return (
    <div className="propertyDetails">
      <div className="input-propertyDetails">
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="city"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="State"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Country"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="bhk"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Property age"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Floor number"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Area"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="bhk"
          variant="outlined"
        />
        <TextField
          className="input-field"
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
      </div>
      <button onClick={props.nextPage}>Save and Continue</button>
    </div>
  );
}
