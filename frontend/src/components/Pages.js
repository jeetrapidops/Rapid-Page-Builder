import {React} from "react";
import "../styles/pages.css"

const Pages = () => {
    return(
        <>
            <div className="pages">
            <div className="topbar">
                <div className="leftpages" >
                    <h4>Pages</h4>
                    <p>Create and publish pages.</p>
                </div>
                <div className="rightpages">
                    <button type="button">+ Add Page</button>
                </div>
            </div>
            <hr />
            <div className="middle">
            <div className="search-div">
            <input type="text" placeholder="Search" id="search" />
            <snap class="ms-2">3 records</snap>
            </div>
            <div className="filters">
            <span>Status</span>
            <div class="btn-group" style={{display:"inline"}}>
  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">All</a></li>
    <li><a class="dropdown-item" href="#">Draft</a></li>
    <li><a class="dropdown-item" href="#">Scheduled</a></li>
    <li><a class="dropdown-item" href="#">Published</a></li>
  </ul>
</div>
            </div>
            </div>
            <div className="last">

            </div>
            </div>
        </>
    );
};

export default Pages;
