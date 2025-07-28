export default function Navbar({ onOpen, onSearch}) {
    const handleSearchChange = (event) => {
        onSearch(event.target.value); // Call the onSearch callback with the input value
    };



    return (
        <>
        <div className="navbar bg-base-100 p-4 mt-3">
        <div className="navbar-start">
           
            <a className="btn btn-ghost text-3xl ml-5 text-white">Clients</a>
        </div>
        <div className="navbar-center">
            <div className="form-control">
            <input type="text" placeholder="Search" onChange={handleSearchChange} className="input input-bordered w-48 md:w-auto text-white" />
            </div>
        </div>
        <div className="navbar-end">
            <a className="btn btn-primary mr-12" onClick={onOpen}>Add Client</a>
        </div>
        </div>
        </>
    )
}