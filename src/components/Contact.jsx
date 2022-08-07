import { useEffect, useState } from "react";
import "../components-css/contact.css";

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
  const [message, setMessage] = useState([]);
  const endpointUrl =
    "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit";

  // useEffect(() => {
  //   console.log(message);

  // });

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
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function toggleAdditionalPhone() {
    setAdditionalPhone((prevState) => !prevState);
  }

  // VALIDATION

  function validate(e) {
    e.preventDefault();
    const username = document.getElementById("username");
    const emailAddress = document.getElementById("email-address");
    if (username.value === "") {
      alert("Please enter your username.");
      username.focus();
      return false;
    }
    if (emailAddress.value === "") {
      alert("Please enter your email address.");
      emailAddress.focus();
      return false;
    }

    return true;
  }

  function handleSubmit(event) {
    //Add checking functions for validity
    function isValidPostcode(p) {
      var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
      return postcodeRegEx.test(p);
    }

    event.preventDefault();
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error
          distinctio placeat quae iste enim ad aliquam ab quia nulla?
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="container-width">
              <div>
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
                />
              </div>
            </div>
            <div className="container-width">
              <div>
                <label htmlFor="email">Email</label>
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
                  Phone number 01 <span className="span-grey">- optional</span>
                </label>
                <input
                  id="phoneOne"
                  type="tel"
                  className="form--input"
                  name="PhoneNumberOne"
                  value={formData.PhoneNumberOne}
                  onChange={handleFormChange}
                />
              </div>
              {additionalPhone && (
                <div>
                  <label htmlFor="phoneTwo">
                    Phone number 02{" "}
                    <span className="span-grey">- optional</span>
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
              <button onClick={toggleAdditionalPhone}>
                Add new phone number
              </button>
            </div>
            <div className="container-width">
              <div className="textarea">
                <label htmlFor="message">
                  <span>Message</span>
                  <span className="span-grey">
                    Maximum text length is 500 character
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
                <input
                  id="addressCheckbox"
                  type="checkbox"
                  className="checkbox"
                  name="bIncludeAddressDetails"
                  value={formData.bIncludeAddressDetails}
                  onChange={handleFormChange}
                />
                <label htmlFor="addressCheckbox" className="checkbox-label">
                  Add address details
                </label>
              </div>
              {formData.bIncludeAddressDetails && (
                <div>
                  <div className="grid-container-2">
                    <div className="container-width">
                      <div>
                        <label htmlFor="addressLine1">Address line 1</label>
                        <input
                          id="addressLine1"
                          type="text"
                          className="form--input"
                          name="AddressLine1"
                          value={formData.AddressLine1}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div className="container-width">
                      <div>
                        <label htmlFor="addressLine2">
                          Address line 2
                          <span className="span-grey">- optional</span>
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
                    <div>
                      <div>
                        <label htmlFor="cityTown">City/Town</label>
                        <input
                          id="cityTown"
                          type="text"
                          className="form--input"
                          name="CityTown"
                          value={formData.CityTown}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="StateCounty">State/County</label>
                        <input
                          id="StateCounty"
                          type="text"
                          className="form--input"
                          name="StateCounty"
                          value={formData.StateCounty}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="postcode">Postcode</label>
                        <input
                          id="postcode"
                          type="text"
                          className="form--input"
                          name="Postcode"
                          value={formData.Postcode}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label htmlFor="country">Country</label>
                        <input
                          id="country"
                          type="text"
                          className="form--input"
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
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
