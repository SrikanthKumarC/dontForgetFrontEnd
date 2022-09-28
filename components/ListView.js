import React, { useEffect, useState } from "react";
import axios from "axios";

const ListView = ({ data, update, dbURL }) => {
  const removeReminder = async (id) => {
    await axios.delete(`${dbURL}/${id}`);
    update();
  };

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Message
              </th>
              <th scope="col" className="py-3 px-6">
                Number
              </th>
              <th scope="col" className="py-3 px-6">
                DATE
              </th>
              <th scope="col" className="py-3 px-6">
                IS HIT
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  key={key}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.msg}
                  </th>
                  <td className="py-4 px-6">+{item.nums}</td>
                  <td className="py-4 px-6">
                    {new Date(item.when).toString()}
                  </td>
                  <td className="py-4 px-6">{item.isHit ? "Yes" : "No"}</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        removeReminder(item._id);
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListView;
