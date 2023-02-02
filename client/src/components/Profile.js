import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  //   MDBBreadcrumb,
  //   MDBBreadcrumbItem,
  // MDBProgress,
  // MDBProgressBar,
  // MDBIcon,
  // MDBListGroup,
  // MDBListGroupItem,
} from "mdb-react-ui-kit";
import axios from "axios";
import Navbar from "../elements/Navbar";
import { v4 as uuidv4 } from "uuid";
import { Grid, TextField } from "@mui/material";
import Loading from "./Loading";

export default function Profile() {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState("");
  const [profiledata, setProfiledata] = useState();
  const accessId = localStorage.getItem("token");

  const loadList = async () => {
    const result = await axios.get(
      "https://flatmate.pythonanywhere.com/account/profile/",
      {
        headers: {
          Authorization: `Bearer ${accessId}`,
        },
      }
    );
    console.log(result);
    setProfiledata(result);
  };

  // console.log(accessId);

  useEffect(() => {
    loadList();
  }, []);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName("");
  }

  if (!profiledata) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />

      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow></MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "150px",
                      margin: "auto",
                      marginBottom: "2rem",
                    }}
                  />
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Verify Yourself</MDBBtn>
                    {/* <MDBBtn outline className="ms-1">
                    Message
                  </MDBBtn> */}
                  </div>
                </MDBCardBody>
              </MDBCard>

              {/* <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>https://mdbootstrap.com</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <MDBCardText>@mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <MDBCardText>mdbootstrap</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard> */}
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name </MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {profiledata.data.firstname} {profiledata.data.lastname}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {profiledata.data.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {profiledata.data.phone}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>DOB</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {profiledata.data.DOB}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {profiledata.data.gender}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody style={{ height: "21rem" }}>
                      <MDBCardText className="mb-4">Preferences</MDBCardText>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="hobbies"
                          name="hobbies"
                          required
                          fullWidth
                          id="hobbies"
                          label="Hobbies"
                          autoFocus
                          style={{ top: "4rem" }}
                        />
                      </Grid>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody style={{ height: "21rem" }}>
                      <MDBCardText className="mb-4">Add Education</MDBCardText>
                      <div>
                        <div>
                          <input
                            type="text"
                            value={name}
                            onChange={handleChange}
                          />
                        </div>

                        <ul>
                          {list.map((item) => (
                            <li key={item.id}>{item.name}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="d-flex justify-content-center b-2">
                        <MDBBtn onClick={handleAdd}>Add Education</MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
