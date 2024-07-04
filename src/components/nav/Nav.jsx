import './Nav.css';
import { sectionData } from '../../data/sectionData';

export default function Nav() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">HoHoHomeSchooling</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">     
                        {sectionData.map(data => 
                            <li className="nav-item px-lg-4" key={`nav${data.secId}`}>
                              <a className="nav-link text-uppercase" href={`#data.secId`}>
                                {data.icon}{data.titleUpper}
                              </a></li>
                          )}
                    </ul>
                </div>
            </div>
        </nav>
  )
}
