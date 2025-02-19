import { useState } from "react";

const Form = ({ fields, onChange, onSubmit, buttonText }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md"
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={onChange}
            placeholder={field.placeholder}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
