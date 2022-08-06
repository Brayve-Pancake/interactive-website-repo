import { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: ["string"],
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
}
