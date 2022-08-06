import { useState } from "react";
import "../components-css/contact.css";

export default function Contact() {
  const [additionalPhone, setAdditionalPhone] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: ["", ""],
    Message: "",
    bIncludeAddressDetails: false,
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
    },
  });

  function toggleAdditionalPhone() {
    setAdditionalPhone((prevState) => !prevState);
  }

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="contact">
      <div className="contact--container">
        <h1 className="contact--title">Contact us</h1>
        <p className="contact--para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error
          distinctio placeat quae iste enim ad aliquam ab quia nulla?
        </p>

        <div class="grid-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>

        {/* <form className="form" onSubmit={submitHandler}> */}
        <form className="contract--form">
          <h3>User</h3>
          <div className="form--container-1">
            <label htmlFor="fullName">Full name</label>
            <input
              // for label
              id="fullName"
              // input details
              required
              type="text"
              className="form--input"
              // for handling/setting data
              name="FullName"
              value={formData.FullName}
              onChange={handleFormChange}
              // to remove
              placeholder="Full name"
            />
          </div>
          <div className="form--container-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              required
              type="email"
              className="form--input"
              name="EmailAddress"
              value={formData.EmailAddress}
              onChange={handleFormChange}
              placeholder="Email"
            />
          </div>
          <div className="form--container-1">
            <label htmlFor="phoneOne">
              Phone number 01 <span>- optional</span>
            </label>
            <input
              id="phoneOne"
              type="tel"
              className="form--input"
              name="PhoneNumber1"
              value={formData.PhoneNumbers[0]}
              onChange={handleFormChange}
              placeholder="phoneOne"
            />
          </div>
          {additionalPhone && (
            <div className="form--container-1">
              <label htmlFor="phoneTwo">
                Phone number 02 <span>- optional</span>
              </label>
              <input
                id="phoneTwo"
                type="tel"
                className="form--input"
                name="PhoneNumber2"
                value={formData.PhoneNumbers[1]}
                onChange={handleFormChange}
                placeholder="phone"
              />
            </div>
          )}
          <button onClick={toggleAdditionalPhone}>Add new phone number</button>

          <div className="form--container-1">
            <label htmlFor="message">
              Message<span>Maximum text length is 500 character</span>
            </label>
            <textarea
              required
              id="Message"
              className="form--input"
              name="message"
              value={formData.Message}
              onChange={handleFormChange}
              placeholder="Message"
            />
          </div>

          <div className="form--container-1">
            <label htmlFor="addressCheckbox">Add address details</label>
            <input
              id="addressCheckbox"
              type="checkbox"
              className="form--ceckbox"
              name="bIncludeAddressDetails"
              value={formData.bIncludeAddressDetails}
              onChange={handleFormChange}
            />
          </div>

          {formData.bIncludeAddressDetails && (
            <div className="form--container--hidden">
              <div className="form--container-2">
                <label htmlFor="addressLine1">Address line 1</label>
                <input
                  id="addressLine1"
                  type="text"
                  className="form--input"
                  name="AddressLine1"
                  value={formData.AddressDetails.AddressLine1}
                  onChange={handleFormChange}
                  placeholder="addressLine1"
                />
              </div>

              <div className="form--container-2">
                <label htmlFor="addressLine2">
                  Address line 2 <span>- optional</span>
                </label>
                <input
                  id="addressLine2"
                  type="text"
                  className="form--input"
                  name="AddressLine2"
                  value={formData.AddressDetails.AddressLine2}
                  onChange={handleFormChange}
                  placeholder="addressLine2"
                />
              </div>

              <div className="form--container-3">
                <label htmlFor="cityTown">City/Town</label>
                <input
                  id="cityTown"
                  type="text"
                  className="form--input"
                  name="CityTown"
                  value={formData.AddressDetails.CityTown}
                  onChange={handleFormChange}
                  placeholder="CityTown"
                />
              </div>

              <div className="form--container-3">
                <label htmlFor="StateCounty">State/County</label>
                <input
                  id="StateCounty"
                  type="text"
                  className="form--input"
                  name="StateCounty"
                  value={formData.AddressDetails.StateCounty}
                  onChange={handleFormChange}
                  placeholder="StateCounty"
                />
              </div>

              <div className="form--container-3">
                <label htmlFor="postcode">Postcode</label>
                <input
                  id="postcode"
                  type="text"
                  className="form--input"
                  name="Postcode"
                  value={formData.AddressDetails.Postcode}
                  onChange={handleFormChange}
                  placeholder="Postcode"
                />
              </div>

              <div className="form--container-3">
                <label htmlFor="country">Country</label>
                <input
                  id="country"
                  type="text"
                  className="form--input"
                  name="Country"
                  value={formData.AddressDetails.AddressLine2}
                  onChange={handleFormChange}
                  placeholder="Country"
                />
              </div>
            </div>
          )}

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
