import '../css/PropertyDetails.css'
import TextField from '@mui/material/TextField'

export default function PropertyDetails(props){
    return(
        <div className = "propertyDetails">
            <div className="input-propertyDetails">
                <TextField className="input-field" id="outlined-basic" label="Address" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className="input-field" id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <button onClick={props.nextPage}>Save and Continue</button>
        </div>
    )
}