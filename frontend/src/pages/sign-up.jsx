import { useState } from "react";
import Form from "../components/form";
import { SignUpRequest } from "../api/auth";

const SignUpPage = () => {
  const fields = [
    {
      name: "first_name",
      label: "First Name",
      type: "text",
      placeholder: "Enter name",
    },
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter username",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
    },
  ];

  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignUpRequest(formData);
  };

  return (
    <div>
      <Form
        fields={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonText="Sign Up"
      />

      <div className="text-center">
        <p className="text-sm text-gray-700">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
