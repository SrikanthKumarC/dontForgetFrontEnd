import React, { useState } from "react";
import axios from "axios";

const Create = ({ fetchData, googleEmail, dbURL }) => {
  const [reminderMsg, setReminderMsg] = useState("");
  const [remindAt, setRemindAt] = useState("");
  const [phone, setPhone] = useState("");

  const addReminder = async () => {
    await axios.post(dbURL, {
      msg: reminderMsg,
      nums: phone,
      when: new Date(remindAt),
      email: googleEmail,
    });
    fetchData();
  };

  return (
    <div>
      <form className="bg-slate-600 p-4 rounded-md">
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your message to remind
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ex: birthday"
            value={reminderMsg}
            onChange={(e) => setReminderMsg(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="when"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            When to remind
          </label>
          <input
            type="datetime-local"
            min={new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={remindAt}
            onChange={(e) => setRemindAt(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone to send SMS
          </label>
          <input
            type="number"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="441234567891 without +"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addReminder}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
