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
    <div className="p-4 bg-gray-100 max-h-screen m-6">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 ">Sign Up</h1>
      </div>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        onChange={handleChange}
        buttonText="Sign Up"
      />

      <div className="text-center pt-2">
        <p className="text-sm text-gray-500 mb-4">
          Already have an account? Signin
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
