import React from "react";
import links from "../data/links";
import "../components/App.css";

const handleChange = (e, setLinksToShow) => {
  e.preventDefault();
  const searchString = document
    .getElementById("searchText")
    .value.toString()
    .toLowerCase();
  const linksToShow = links.filter((link) =>
    link.NAME.toLowerCase().includes(searchString)
  );
  console.log(linksToShow);
  setLinksToShow(linksToShow);
};

function App() {
  const [linksToShow, setLinksToShow] = React.useState(links);
  const [modelOpen, setModelOpen] = React.useState(false);

  return (
    <div>
      <nav
        className="navbar sticky-top navbar-drak bg-light nav"
        onClick={(e) => setModelOpen(false)}
      >
        <input
          placeholder="Search"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search")}
          onChange={(e) => handleChange(e, setLinksToShow)}
          className="search-box mx-auto "
          type="text"
          id="searchText"
          autocomplete="off"
        ></input>
      </nav>
      <dialog
        open={modelOpen ? true : false}
        onBlur={(e) => (e.target.open = false)}
        id="model"
        onClick={(e) => e.preventDefault()}
      >
        <center>
          <form
            action="https://smartforms.dev/submit/5e8c94fad7d0665194d11f17"
            method="POST"
            className="form-cls"
          >
            <label className="mt-2 mb-2 inputWidth">
              Have any requests ? Let us know.
            </label>
            <br />
            <label className="mt-2 mb-2 inputWidth">
              Have any Links ? Join us now.
            </label>
            <input
              type="text"
              style={{ textAlign: "center" }}
              name="media name"
              className="form-control mt-2 mb-2 inputWidth"
              id="formGroupExampleInput"
              placeholder="Media Name"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Media Name")}
              autocomplete="off"
            ></input>
            <input
              type="text"
              name="link"
              style={{ textAlign: "center" }}
              className=" form-control mt-2 mb-2 inputWidth"
              id="formGroupExampleInput"
              placeholder="Link ( if Any )"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Link ( if Any )")}
              autocomplete="off"
            ></input>
            <button
              type="submit"
              onClick={(e) => e.preventDefault()}
              className="mx-2 mt-3"
            >
              Send
            </button>
            <button
              type="button"
              onClick={(e) => setModelOpen(false)}
              className="mx-2 mt-3"
            >
              Close
            </button>
          </form>
        </center>
      </dialog>
      <main onClick={(e) => setModelOpen(false)}>
        <div className="container">
          {linksToShow.length === 0 ? (
            <center>
              <h6 class="card-title">Not Found</h6>
            </center>
          ) : (
            linksToShow.map((link) => (
              <div className="row fullWidth">
                <div className="col-md-12 fullWidth">
                  <div className="card  mt-3 mb-3">
                    {" "}
                    <div className="card-body">
                      <center>
                        <h6 class="card-title">{link.NAME}</h6>
                        <a href={link.LINK} className="card-link">
                          Download
                        </a>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      {/* <footer> */}
      <i
        className="fa fa-plus float"
        onClick={(e) => {
          e.preventDefault();
          setModelOpen(!modelOpen);
        }}
      ></i>
      {/* </footer> */}
    </div>
  );
}

export default App;
