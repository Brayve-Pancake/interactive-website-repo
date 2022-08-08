import { useEffect, useState } from "react";
import messageIcon from "../assets/Icon_Submit.svg";
import contactImage from "../assets/Img_Contact.png";
import "../components-css/contact.css";
import "../components-css/checkbox.css";

export default function Contact() {
  const defaultData = {
    FullName: "",
    EmailAddress: "",
    PhoneNumberOne: "",
    PhoneNumberTwo: "",
    Message: "",
    bIncludeAddressDetails: false,
    AddressLine1: "",
    AddressLine2: "",
    CityTown: "",
    StateCounty: "",
    Postcode: "",
    Country: "",
  };
  const [additionalPhone, setAdditionalPhone] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const endpointUrl =
    "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";

  const checkedBox = formData.bIncludeAddressDetails;

  function reconstructData() {
    let phoneNumbersArray = [];
    if (formData.PhoneNumberOne !== "") {
      phoneNumbersArray.push(formData.PhoneNumberOne);
    }
    if (formData.PhoneNumberTwo !== "") {
      phoneNumbersArray.push(formData.PhoneNumberTwo);
    }
    return JSON.stringify({
      FullName: formData.FullName,
      EmailAddress: formData.EmailAddress,
      PhoneNumbers: phoneNumbersArray,
      Message: formData.Message,
      bIncludeAddressDetails: formData.bIncludeAddressDetails,
      AddressDetails: {
        AddressLine1: formData.AddressLine1,
        AddressLine2: formData.AddressLine2,
        CityTown: formData.CityTown,
        StateCounty: formData.StateCounty,
        Postcode: formData.Postcode,
        Country: formData.Country,
      },
    });
  }

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(event.target.name);
    console.log(formData);
    setFormData((prevFormData) => {
      // Deselect and clear data
      if (type === "checkbox" && !checked) {
        return {
          ...prevFormData,
          [name]: checked,
          AddressLine1: "",
          AddressLine2: "",
          CityTown: "",
          StateCounty: "",
          Postcode: "",
          Country: "",
        };
      }
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function toggleAdditionalPhone() {
    setAdditionalPhone((prevState) => !prevState);
  }

  function returnFirstChar() {
    console.log(formData.FullName.charAt(0));
    return formData.FullName.charAt(0);
  }

  // VALIDATION

  // ^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$
  // ^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$

  const redStyle = {
    boxShadow: "1px 2px 9px #F4AAB9",
  };
  const greenStyle = {
    boxShadow: "1px 2px 9px #50C878",
  };

  function mesValidLength(mesasge) {
    return mesasge.length <= 500;
  }

  function numValidLength(number) {
    return number.length <= 20;
  }

  function isValidPostcode(p) {
    var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    return postcodeRegEx.test(p);
  }
  // Passes API (very basic) J@C.B <-- this will work :)
  function isValidEmail(p) {
    var emailRegEx = /(.+)@(.+){1,}\.(.+){1,}/;
    return emailRegEx.test(p);
  }

  function validate(e) {
    if (checkedBox && isValidPostcode(formData.Postcode) === false) {
      alert("invalid postcode");
      return false;
    }

    if (
      formData.PhoneNumberOne.length > 20 ||
      formData.PhoneNumberTwo.length > 20
    ) {
      alert("Phone number is too long (max 20 char)");
      return false;
    }

    if (isValidEmail(formData.EmailAddress) === false) {
      alert("Your email is incorrectly formatted :)");
      return false;
    }

    if (formData.Message.length > 500) {
      alert(
        "We appreciate your detailed message, but it is too long for our system. Please reduce it's length"
      );
      return false;
    }
    // input.setAttribute("required", "");
    // e.preventDefault();
    // const username = document.getElementById("username");
    // const emailAddress = document.getElementById("email-address");
    // if (username.value === "") {
    //   alert("Please enter your username.");
    //   username.focus();
    //   return false;
    // }
    // if (emailAddress.value === "") {
    //   alert("Please enter your email address.");
    //   emailAddress.focus();
    //   return false;
    // }

    return true;
  }

  function handleSubmit(event) {
    //Add checking functions for validity
    event.preventDefault();
    if (validate() === false) {
      return;
    }

    alert("A form was submitted: " + reconstructData());
    console.log(reconstructData());

    fetch(endpointUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: reconstructData(),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  return (
    <div className="contact">
      <div className="contact--container">
        <h1 className="contact--title">Contact us</h1>
        <p className="contact--para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic goodus
          distinctio placeat quae iste enim ad aliquam ab quia nulla?
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="container-width fullName">
              <div className="contact--fullName">
                <label htmlFor="fullName">Full name</label>
                <input
                  // for label
                  id="fullName"
                  // input details
                  required
                  type="text"
                  className="form--input formInfo"
                  // for handling/setting data
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleFormChange}
                  style={returnFirstChar() ? { backgroundColor: "blue" } : {}}
                />
              </div>
            </div>
            <div className="container-width email">
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  required
                  type="email"
                  className="form--input"
                  name="EmailAddress"
                  value={formData.EmailAddress}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="container-width">
              <div>
                <label htmlFor="phoneOne">
                  Phone number 01{" "}
                  <span className="span-grey">
                    <i>- optional</i>
                  </span>
                </label>
                <input
                  id="phoneOne"
                  type="tel"
                  className="form--input"
                  name="PhoneNumberOne"
                  value={formData.PhoneNumberOne}
                  onChange={handleFormChange}
                  style={
                    !numValidLength(formData.PhoneNumberOne) ? redStyle : {}
                  }
                />
              </div>
              {additionalPhone && (
                <div>
                  <label htmlFor="phoneTwo">
                    Phone number 02
                    <span className="span-grey">
                      <i> - optional</i>
                    </span>
                  </label>
                  <input
                    id="phoneTwo"
                    type="tel"
                    className="form--input"
                    name="PhoneNumberTwo"
                    value={formData.PhoneNumberTwo}
                    onChange={handleFormChange}
                  />
                </div>
              )}
            </div>

            <div className="container-width">
              <button
                className="contact--button"
                onClick={toggleAdditionalPhone}
              >
                {!additionalPhone ? "Add" : "Hide"} new phone number
              </button>
            </div>
            <div className="container-width">
              <div className="textarea">
                <label className="contact--message" htmlFor="message">
                  <span>Message</span>
                  <span className="span-grey">
                    Maximum text length is 500 characters
                  </span>
                </label>
                <textarea
                  required
                  id="message"
                  className="form--input textarea"
                  name="Message"
                  value={formData.Message}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="container-width check">
              <div className="text-left checkbox-wrapper">
                <label class="container">
                  <input
                    id="addressCheckbox"
                    type="checkbox"
                    className="checkbox"
                    name="bIncludeAddressDetails"
                    value={formData.bIncludeAddressDetails}
                    onChange={handleFormChange}
                  />
                  <span class="checkmark"></span>
                </label>
                <label htmlFor="addressCheckbox" className="checkbox-label">
                  Add address details
                </label>
              </div>
              {checkedBox && (
                <div>
                  <div className="grid-container-2">
                    <div className="container-width addressLine1">
                      <div>
                        <label htmlFor="addressLine1">Address line 1</label>
                        <input
                          required
                          id="addressLine1"
                          type="text"
                          className="form--input required-toggle"
                          name="AddressLine1"
                          value={formData.AddressLine1}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width addressLine2">
                      <div>
                        <label htmlFor="addressLine2">
                          Address line 2
                          <span className="span-grey">
                            <i> - optional</i>
                          </span>
                        </label>
                        <input
                          id="addressLine2"
                          type="text"
                          className="form--input"
                          name="AddressLine2"
                          value={formData.AddressLine2}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width-c1">
                      <div>
                        <label htmlFor="cityTown">City/Town</label>
                        <input
                          required
                          id="cityTown"
                          type="text"
                          className="form--input required-toggle"
                          name="CityTown"
                          value={formData.CityTown}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width-c2">
                      <div>
                        <label htmlFor="stateCounty">State/County</label>
                        <input
                          required
                          id="stateCounty"
                          type="text"
                          className="form--input required-toggle"
                          name="StateCounty"
                          value={formData.StateCounty}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width-c3">
                      <div>
                        <label htmlFor="postcode">Postcode</label>
                        <input
                          required
                          id="postcode"
                          type="text"
                          className="form--input required-toggle"
                          name="Postcode"
                          value={formData.Postcode}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width-c4">
                      <div>
                        <label htmlFor="country">Country</label>
                        <input
                          required
                          id="country"
                          type="text"
                          className="form--input required-toggle"
                          name="Country"
                          value={formData.Country}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="container-width submit">
              <button className="contact--button submit" type="submit">
                <img className="messageIcon" src={messageIcon} />
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {checkedBox && (
        <div className="image">
          <img src={contactImage} alt="company logo" />
        </div>
      )} */}
    </div>
  );
}
