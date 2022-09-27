import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      user: {
        firstname: "",
        lastname: "",
        gender: "",
        hobby: "",
        number: 0,
        country: "",
        city: "",
        state: ""
      }
    };
  }

  handleClick(e) {
    console.log("ALL FROM DATA", this.state.user);
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));

  }

  handleChange = (e) => {
    console.log("this is:", e, e.target.name, e.target.value);

    this.setState(
      (state) => ({
        ...state,
        user: {
          ...state.user,
          [e.target.name]: e.target.value
        }
      }),
      () => console.log("THIS", this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <h1> User Info</h1>
        <form id="007" action="" method="get" />
        <input
          name="firstname"
          type="name"
          placeholder="Enter your first name"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <br />
        <input
          name="lastname"
          type="name"
          placeholder="Enter your last name"
          onChange={(e) => this.handleChange(e)}
        ></input>
        <br />
        <select
          name="gender"
          onChange={(e) => this.handleChange(e)}
          placeholder="Choose your gender"
          id="sexes"
        >
          <option value="Male" name="Male">
            Male
          </option>
          <option value="Female" name="Female">
            Female
          </option>
          <option value="others" name="Others">
            Others
          </option>
          <option value="prefer not to say" name="Prefer not to say">
            Prefer not to say
          </option>
        </select>
        <br />
        <h3>Hobbies</h3>
        Singing:
        <input
          type="checkbox"
          id="box"
          name="hobby"
          value="Singing"
          onChange={(e) => this.handleChange(e)}
        />
        Dancing:
        <input
          type="checkbox"
          id="box"
          name="hobby"
          value="Dancing"
          onChange={(e) => this.handleChange(e)}
        />
        Gaming:
        <input
          type="checkbox"
          id="box"
          name="hobby"
          value="Gaming"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Number"
          onChange={(e) => this.handleChange(e)}
        />
        <h3>Address</h3>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="state"
          id="State"
          placeholder="State"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={(e) => this.handleChange(e)}
        />
        <br />
        <br />
        <button onClick={(e) => this.handleClick(e)}>Submit</button>
        <form />
        {this.state.isToggleOn ? JSON.stringify(this.state.user) : null}
      </div>
    );
  }
}

export default Form;
