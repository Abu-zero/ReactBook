import Navbarlogo from '../logos/booklogo.png';
import Searchbar from "./Searchbar";
import Menu from "./Menu";
import {useState}  from "react";

var navbarlink="navbar-link";
var buttondec="button-dec";

const Navbar = (props) =>{

    const [isActive, setIsActive] = useState(false);

    const NavbarToggle = (event) => {
        setIsActive(current => !current);
        let navbar=document.getElementsByClassName("navbar-all");
        if(!isActive){
            navbar[0].classList.add('navbar-all-selected');
        }
        else{
            navbar[0].classList.remove('navbar-all-selected');
        }
    };

    return(
        <div className="navbar-all">
            <div className="navbar-body navbar-expand-md d-flex ">
                <div className="navbar-logo">
                    <img className="navbar-logo-img" src={Navbarlogo}></img>
                    <label className="logo-text">BookStore</label>
                </div>
                <button className="navbar-toggler" type="button" onClick={NavbarToggle} data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <div className="button-toggler-svg"><svg fill="#cc9900" height="50" viewBox="0 0 21 21" width="50" xmlns="http://www.w3.org/2000/svg"><g fill="#cc9900" stroke="#cc9900" ><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg></div>

                </button>
                <div className={("navbar-link-all collapse navbar-collapse ") + (isActive ? 'd-block' : '')}>
                    <div className="navbar-links">
                        <a className={navbarlink}>
                            İletişim
                        </a>
                        <button className={navbarlink + " " + buttondec} onClick="">
                            Giriş Yap
                        </button>
                    </div>
                </div>


                {/*<div>*/}
                {/*    <Menu/>*/}
                {/*</div>*/}
            </div>
        </div>
        )
}

export default Navbar;