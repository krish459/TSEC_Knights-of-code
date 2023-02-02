import "../css/RoommateCard.css";

export default function RoommateCard({
  food,
  gender,
  smoke,
  drink,
  work,
  pet,
  cook,
  email,
}) {
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
        <div className="info">
          {/* <div className="name">{name}</div> */}
          <span className="pronouns">{email.split("@")[0]}</span>
          <span className="pronouns">Gender : {genderfunc({ gender })} </span>
          <span className="pronouns">Food Choice : {foodfunc({ food })} </span>
          <span className="smokes">Smokes : {yesOrNoS({ smoke })}</span>
          <span className="drinks">Drinks : {yesOrNoD({ drink })}</span>
          <div className="cooks">Cooks : {yesOrNoC({ cook })}</div>
          <span className="job">Work : {workfunc({ work })}</span>
          <span className="pet">Pet : {yesOrNoP({ pet })}</span>
          <div className="buttons">
            <button className="roommateCard-btn">Yes</button>
            <button className="roommateCard-btn">No</button>
          </div>
        </div>
        <div className="roommate-image">
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt="kjuyhu"
          />
          <div className="compatability">
            {percentfunc(
              { food },
              { gender },
              { smoke },
              { drink },
              { work },
              { pet },
              { cook }
            )}{" "}
            %
          </div>
        </div>
      </div>
    </>
  );
}
