import "../css/RoommateCard.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FaWhatsapp } from "react-icons/fa";
import { FcVideoCall } from "react-icons/fc";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RoommateCard({
  food,
  gender,
  smoke,
  drink,
  work,
  pet,
  cook,
  email,
  city,
}) {
  //   const cityFunc = (gen) => {
  //     if (gen.city === "1") return "Mumbai";
  //     if (gen.city === "2") return "Pune";
  //     if (gen.city === "3") return "Nashik";
  //     if (gen.city === "4") return "Surat";
  //   };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const genderfunc = (gen) => {
    if (gen.gender === "1") return "Male";
    if (gen.gender === "2") return "Female";
    if (gen.gender === "3") return "Other";
    if (gen.gender === "4") return "Any";
  };
  const foodfunc = (gen) => {
    if (gen.food === "1") return "veg";
    if (gen.food === "2") return "Non-Veg";
    if (gen.food === "3") return "Jain";
    if (gen.food === "4") return "Any";
  };
  const workfunc = (gen) => {
    if (gen.work === "1") return "No";
    if (gen.work === "2") return "Part-Time";
    if (gen.work === "3") return "Full-Time";
  };
  const yesOrNoS = (gen) => {
    if (gen.smoke === "1") return "Yes";
    if (gen.smoke === "2") return "No";
  };
  const yesOrNoD = (gen) => {
    if (gen.drink === "1") return "Yes";
    if (gen.drink === "2") return "No";
  };
  const yesOrNoP = (gen) => {
    if (gen.pet === "1") return "Yes";
    if (gen.pet === "2") return "No";
  };
  const yesOrNoC = (gen) => {
    if (gen.cook === "1") return "Yes";
    if (gen.cook === "2") return "No";
  };
  const percentfunc = (food, gender, smoke, drink, work, pet, cook) => {
    let count = 0;
    // console.log(foodfunc(food));
    // console.log(localStorage.getItem("food"));
    if (food.food === localStorage.getItem("food")) {
      // console.log("1")
      count = count + 1;
    }
    if (gender.gender === localStorage.getItem("gender")) {
      // console.log("2")
      count = count + 1;
    }
    if (smoke.smoke === localStorage.getItem("smoke")) {
      // console.log("3")
      count = count + 1;
    }
    if (drink.drink === localStorage.getItem("drink")) {
      // console.log("4")
      count = count + 1;
    }
    if (cook.cook === localStorage.getItem("cook")) {
      // console.log("5")
      count = count + 1;
    }
    if (work.work === localStorage.getItem("job")) {
      // console.log("6")
      count = count + 1;
    }
    if (pet.pet === localStorage.getItem("pet")) {
      // console.log("7")
      count = count + 1;
    }

    return Math.round((count / 7) * 100);
  };

  return (
    <>
      <div className="roommateCard">
        <div className="image-avatar"></div>
        {/* <div className="name">{name}</div> */}
        <div className="rm-name">{email.split("@")[0]}</div>
        <div className="rm-gender">Gender : {genderfunc({ gender })} </div>
        <div className="rm-food">Food Choice : {foodfunc({ food })} </div>
        <div className="rm-smokes">Smokes : {yesOrNoS({ smoke })}</div>
        <div className="rm-drinks">Drinks : {yesOrNoD({ drink })}</div>
        <div className="rm-cooks">Cooks : {yesOrNoC({ cook })}</div>
        <div className="rm-job">Work : {workfunc({ work })}</div>
        <div className="rm-pet">Pet : {yesOrNoP({ pet })}</div>
        <div className="rm-compatability">
          {percentfunc(
            { food },
            { gender },
            { smoke },
            { drink },
            { work },
            { pet },
            { cook }
          )}{" "}
          % MATCH
        </div>
        <div className="rm-buttons">
          <button className="roommateCard-btn" onClick={handleOpen}>
            Yes
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Its A Match !!!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Now you can connect with your roomie on Video call or whatsapp for
              better understanding.
            </Typography>
            <Button>
              <a href="https://db06-103-246-224-134.in.ngrok.io/">
                <FcVideoCall size={50} />
              </a>
            </Button>
            <Button>
              <a href="https:/wa.me/919082230267">
                <FaWhatsapp size={50} />
              </a>
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
