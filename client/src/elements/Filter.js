import "../css/Filter.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function Filter() {
  const [furnishing, setFurnishing] = useState("");
  const [city, setCity] = useState("");
  const [rent, setRent] = useState("");
  const [bhk, setBhk] = useState("");

  // const handleChange = () => {
  //   setAge(event.target.value);
  // };

  return (
    <div className="filter">
      <h4 className="filters title">Filters</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="City"
          onChange={(value) => setCity(value)}
        >
          <MenuItem value={10}>Mumbai</MenuItem>
          <MenuItem value={20}>Pune</MenuItem>
          <MenuItem value={30}>Surat</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">BHKs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bhk}
          label="bhk"
          onChange={(value) => setBhk(value)}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3+</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Rent</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rent}
          label="rent"
          onChange={(value) => setRent(value)}
        >
          <MenuItem value={10}>10K+</MenuItem>
          <MenuItem value={20}>20K+</MenuItem>
          <MenuItem value={30}>30K+</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Fursnishing</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={furnishing}
          label="Fursnishing"
          onChange={(value) => setFurnishing(value)}
        >
          <MenuItem value={10}>Full</MenuItem>
          <MenuItem value={20}>Partiall</MenuItem>
          <MenuItem value={30}>Not</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
