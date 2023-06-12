import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/640d69fd-7a59-4e98-b33c-eca5ba119b25"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 p-4 text-xl">
            // Submit the form below or shoot me an email -
            subhadipchakraborty193@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6] rounded-md"
        />
        <textarea
          name="messege"
          rows="10"
          className="bg-[#ccd6f6] rounded-md p-2"
          placeholder="Messege"
        />
        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300"
        >
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
