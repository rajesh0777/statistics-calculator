import React from "react";

const Header = (props) => {
  

  return (
    <div className="middle">
      <form
        onSubmit={(e) => {
            if (
                document.getElementById("ageBox").value !== "" &&
                !isNaN(parseInt(document.getElementById("personBox").value))
              ){
          props.appendList(
            document.getElementById("ageBox").value,
            document.getElementById("personBox").value
          );}
          document.getElementById("ageBox").value = null;
          document.getElementById("personBox").value = null;
          e.preventDefault();
        }}
      >
        <input type="text" id="ageBox" placeholder="Age" />

        <input type="Integer" id="personBox" placeholder="No of Person" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Header;
