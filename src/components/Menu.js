import {useState} from "react";


var navbarlink="navbar-link";
var menulink="menu-link";

const mark=["Kitapçınız","Hobiciniz","Oyuncakçınız","Gitarcınız","Elektronikçiniz","Kırtasiyeciniz"];
const book=["Edebiyat", "Roman", "Çizgi Roman", "Aksiyon", "Macera", "Ders"];

function Menu(){

    const [isActive, setIsActive] = useState(false);
    const [isDivActive, setIsDivActive] = useState(false);

    const marks=mark.map((marka)=>
        <li className="mark-li" key={marka}>
            <a className={navbarlink+" "+menulink}>
                {marka}
            </a>
        </li>
    )
    const books=book.map((kitap)=>
        <li className="mark-li" key={kitap}>
            <a className={navbarlink+" "+menulink}>
                {kitap}
            </a>
        </li>
    )

    // const [isOpen, setisOpen] = useState(
    //     false
    // );

    const setMenuVisibilityClose=(e) => {

        const marks_div=document.getElementsByClassName("marks-div-all");
        // setIsDivActive(false);


        // if(isDivActive){
        //
        // }
        //
        // console.log(this);
        // marks_div[0].style.display = "none";


        if(e.target.tagName=="BUTTON") {
            e.target.children[0].style.display = "none";
        }
        else if(e.target.className=="marks-div-all"){
            e.target.style.display="none";
        }
    };

    const setMenuVisibilityOpen=(e) => {
        // setIsDivActive(true);
        if(e.target.tagName=="BUTTON"){
            e.target.children[0].style.display= "flex";
        }
    };

    // function MenuOpen(){
    //
    //     const menu_all=document.getElementsByClassName("menu-all");
    //     menu_all.classList.add('menu-all-selected');
    // }

    const MenuOpen = (event) => {
        setIsActive(current => !current);
        let menu_all = document.getElementsByClassName("menu-all");
        let menu_inside = document.getElementsByClassName("menu-button-all-inside");
        if(!isActive){
            menu_all[0].classList.add('navbar-all-selected');
            menu_inside[0].classList.add('d-flex');
        }
        else{
            menu_all[0].classList.remove('navbar-all-selected');
            menu_inside[0].classList.remove('d-flex');
        }
    };

    return(
        <div className="menu-all">
            <div className="menu-body">

                <div className="menu-button-all">
                    <button className="menu-responsive-button" onClick={MenuOpen}>
                        Menu
                    </button>
                    <div className="menu-button-all-inside">
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseEnter={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Markalar
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseOver={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Kitap
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            books
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            books
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            books
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseOver={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Elektronik
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseOver={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Hobi Malzemeleri
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseOver={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Oyuncaklar
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                        <button className="menu-button col-2" onClick={(e) => setMenuVisibilityOpen(e)} onMouseOver={(e) => setMenuVisibilityOpen(e)} onMouseLeave={(e) =>setMenuVisibilityClose(e)}>
                            Kırtasiye
                            {
                                // isDivActive &&
                                <div className="marks-div-all">
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                    <ul className="marks-div-item col-4">
                                        {
                                            marks
                                        }
                                    </ul>
                                </div>
                            }
                        </button>
                    </div>

                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}

export default Menu;