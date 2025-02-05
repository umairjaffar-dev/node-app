import { FormEvent, useState } from "react";

const Contact = () => {
  const [value, setValue] = useState("");

  const handleFormSubmit = () => {
    console.log("Submitted!", value);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline">This is Contact page</h1>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          handleFormSubmit();
        }}
        className="m-3 p-2 bg-gray-200 rounded-md space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">UserName</label>
          <input
            type="search"
            id="name"
            name="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            minLength={4}
            maxLength={8}
            size={40}
            className="bg-gray-300 p-1"
            pattern="^a...s$"
            title="accepted format is start with a and end with s"
            // readOnly
          />
        </div>

        <button
          type="submit"
          className="p-2 text-sm font-semibold capitalize bg-blue-400 text-white rounded-md w-48"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
