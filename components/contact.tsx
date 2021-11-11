import React from 'react';
import emailjs, { init } from 'emailjs-com';
init('user_E6S2bpZMxU5cPes9cbLH5');

export const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vibospv',
        'template_fizq4xv',
        e.target,
        'user_E6S2bpZMxU5cPes9cbLH5'
      )
      .then(
        () => {
          alert('Email sent successfully! Will get back soon');
        },
        (error) => {
          alert('There was an error sending this email :(');
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center p-5 sm:p-0"
      id="hello"
    >
      <h1 className="font-black text-4xl">Say hello! 👋</h1>
      <form
        className="w-full max-w-lg bg-gray-100 p-7 rounded-xl mt-7"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit message
          </button>
        </div>
      </form>
    </div>
  );
};
