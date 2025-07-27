import React from "react";

const Tablelist = () => {
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
    <div>
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
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {clients.map((clients)=>(
                <tr className="hover:bg-base-300">
                    <th>{clients.id}</th>
                    <td>{clients.name}</td>
                    <td>{clients.email}</td>
                    <td>{clients.job}</td>
                    <td>{clients.rate}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablelist;
