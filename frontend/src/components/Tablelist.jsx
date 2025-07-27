import React from "react";

const TableList = () => {
  const clients = [
    {
      id: 1,
      name: "Patrick 1",
      email: "abc1@abc.com",
      job: "worker",
      rate: "150",
      isactive: true,
    },
    {
      id: 2,
      name: "Patrick 2",
      email: "abc2@abc.com",
      job: "worker",
      rate: "150",
      isactive: true,
    },
    {
      id: 3,
      name: "Patrick 3",
      email: "abc3@abc.com",
      job: "worker",
      rate: "150",
      isactive: false,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {clients.map((clients) => (
              <tr className="hover:bg-base-300">
                <th>{clients.id}</th>
                <td>{clients.name}</td>
                <td>{clients.email}</td>
                <td>{clients.job}</td>
                <td>{clients.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      clients.isactive
                        ? `btn-primary`
                        : `btn-outline btn-primary`
                    }`}
                  >
                    {clients.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                    <button className="btn  btn-secondary">Update</button>
                </td>
                <td>
                    <button className="btn bg-red-500 text-white hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
