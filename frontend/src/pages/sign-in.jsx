import { useState } from "react";
import Form from "../components/form";
import { SignInRequest } from "../api/auth";

const SignInPage = () => {
  const fields = [
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
    SignInRequest(formData);
  };

  return (
    <div className="p-4 bg-gray-100 max-h-screen m-6">  
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 ">Sign In</h1>
      </div>
      <Form
        fields={fields}
        onSubmit={handleSubmit}
        onChange={handleChange}
        buttonText="Sign In"
      />

      <div className="text-center pt-2">
        <p className="text-sm text-gray-500 mb-4">
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
