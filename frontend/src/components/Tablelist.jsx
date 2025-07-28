import axios from "axios";
import { useState } from "react";

export default function TableList({
  handleOpen,
  tableData,
  setTableData,
  searchTerm,
}) {
  const [error, setError] = useState(null);

  // Filter the tableData based on the searchTerm
  const filteredData = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`); // API call to delete client
        setTableData((prevData) =>
          prevData.filter((client) => client.id !== id)
        ); // Update state
      } catch (err) {
        setError(err.message); // Handle any errors
      }
    }
  };

 return (
  <>
    {error && <div className="alert alert-error">{error}</div>}

    {/* On small screens, `overflow-x-auto` is a fallback. The main responsiveness comes from the classes on the table itself. */}
    <div className="overflow-x-auto mt-10 ml-9">
      {/*
        - On mobile (default): `block` layout.
        - On medium screens and up (`md:`): `table` layout.
      */}
      <table className="table w-full block md:table">
        {/* Head is hidden on mobile, shown on medium screens and up */}
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Id</th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Job</th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Rate</th>
            <th className=" p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
            <th className="p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell" colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {filteredData.map((client) => (
            // On mobile, each row is a card with padding and margin
            <tr key={client.id} className=" border border-grey-500 md:border-none block md:table-row mb-4 md:mb-0">
              
              {/* These `data-label` attributes are used for the mobile view's labels */}
              <td data-label="ID" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">ID</span>{client.id}
              </td>
              <td data-label="Name" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Name</span>{client.name}
              </td>
              <td data-label="Email" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Email</span>{client.email}
              </td>
              <td data-label="Job" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Job</span>{client.job}
              </td>
              <td data-label="Rate" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Rate</span>{client.rate}
              </td>
              <td data-label="Status" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">Status</span>
                <button
                  className={`btn rounded-full w-20 ${
                    client.isactive ? `btn-primary` : `btn-outline btn-primary`
                  }`}
                >
                  {client.isactive ? "Active" : "Inactive"}
                </button>
              </td>
              <td data-label="Update" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Update</span>
                <button
                  onClick={() => handleOpen("edit", client)}
                  className="btn btn-secondary"
                >
                  Update
                </button>
              </td>
              <td data-label="Delete" className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Delete</span>
                <button
                  className="btn btn-accent"
                  onClick={() => handleDelete(client.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);
}
