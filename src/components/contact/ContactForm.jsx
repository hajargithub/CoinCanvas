import axios from "axios";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from "primereact/toast";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContactShema } from "../../validationShemas/ContactShema";

const ContactForm = () => {
  const navigate = useNavigate();

  const addContact = async (values, actions) => {
    console.log("values:", values);
    console.log("actions:", actions);
    try {
      const { data } = await axios.post(
        "http://localhost:3001/contacts",
        values
      );
      formik.resetForm();
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactShema,
    onSubmit: addContact,
  });
  const validationChangeClass = (field) => {
    let classes = "form-control border";

    if (!formik.dirty) {
      return classes;
    }

    if (formik.errors[field]) {
      return (classes += " border-danger");
    }

    return (classes += " border-success");
  };
  return (
    <div className="grid ">
      <div className="col-md-12 mx-auto">
        <h1 className="form-heading text-primary text-5xl text-center">
          Get in touch
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-column gap-2 "
        >
          <div className="mb-2">Name</div>
          <AutoComplete
            type="text"
            className="p-inputtext-lg b-danger"
            id="name"
            name="name"
            value={formik.values.name}
            placeholder="Your Name"
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <p className="mt-1 text-danger"> {formik.errors.name} </p>
          )}
          <div className="mb-2">Email</div>
          <AutoComplete
            type="email"
            className="p-inputtext-lg"
            id="email"
            name="email"
            value={formik.values.email}
            placeholder="Your Email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="mt-1 text-danger"> {formik.errors.email} </p>
          )}
          <div className="mb-2">Message</div>
          <InputTextarea
            id="message"
            name="message"
            value={formik.values.message}
            placeholder="Your Message"
            onChange={formik.handleChange}
            rows={5}
            cols={25}
          />
          {formik.errors.message && (
            <p className="mt-1 text-danger"> {formik.errors.message} </p>
          )}
          <Button type="submit" label="Send Message" className="mt-2" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
