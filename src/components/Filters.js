import {useEffect, useState} from "react";
import Searchbar from "./Searchbar";

const Filters = (props) =>{

    const [checkedValues, setCheckedValues] = useState([]);
    const [searchData, setSearchData] = useState("");
    const [FilterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        props.searchdata(searchData);
    },[]
    );

    const CategoriesFilter = (event) => {
        const { checked, value } = event.target;
        let updatedCheckedValues = [...checkedValues];

        if (checked) {
            updatedCheckedValues.push(value);
        } else {
            updatedCheckedValues = updatedCheckedValues.filter(item => item !== value);
        }
        setCheckedValues(updatedCheckedValues);
    }

    const pull_data = (data) => {
        setSearchData(data);
        //props.searchdata("");
    }

    function FilterPush(e){
        props.searchdata(searchData);
        props.func(checkedValues);
        e.preventDefault();
    }

    function FilterFieldOpen(){
        const Filter_body=document.getElementsByClassName("filter-body");
        setFilterOpen(current => !current);
        if(!FilterOpen){
            Filter_body[0].classList.add('d-flex');
        }
        else{
            Filter_body[0].classList.remove('d-flex');
        }

    }

    return(
        <div className="filter-all col-lg-2">
            <div className="filter-button" onClick={FilterFieldOpen}>
                <label className="filter-button-text">Filtrele</label>
            </div>
            <div className="filter-body">
                {/*<div className="filter-search">*/}
                {/*    <p className="text-3">*/}
                {/*        Ürün Ara*/}
                {/*    </p>*/}
                {/*    <Searchbar func={pull_data}/>*/}
                {/*</div>*/}
                {/*<div className="filter-price">*/}
                {/*    <p className="text-3">*/}
                {/*        Fiyat Aralığı*/}
                {/*    </p>*/}
                {/*    <span className="text-4">*/}
                {/*        En Az Fiyat*/}
                {/*    </span>*/}
                {/*    <input className="filter-minprice-input"></input>*/}
                {/*    <span className="text-4">*/}
                {/*        En Çok Fiyat*/}
                {/*    </span>*/}
                {/*    <input className="filter-maxprice-input"></input>*/}
                {/*</div>*/}
                <div className="filter-categories">
                    <form onSubmit={FilterPush}>
                        <div className="filter-search">
                            <p className="text-3">
                                Ürün Ara
                            </p>
                            <Searchbar func={pull_data}/>
                        </div>
                        {/*<div className="filter-price">*/}
                        {/*    <p className="text-3">*/}
                        {/*        Fiyat Aralığı*/}
                        {/*    </p>*/}
                        {/*    <span className="text-4">*/}
                        {/*        En Az Fiyat*/}
                        {/*    </span>*/}
                        {/*    <input className="filter-minprice-input"></input>*/}
                        {/*    <span className="text-4">*/}
                        {/*        En Çok Fiyat*/}
                        {/*    </span>*/}
                        {/*    <input className="filter-maxprice-input"></input>*/}
                        {/*</div>*/}
                        <p className="text-3">
                            Filtrele
                        </p>
                        <div className="categories-type">
                            <input type="checkbox"
                                   name="Dünya_Roman"
                                   value="Dünya Roman"
                                   id="Dünya_Roman"
                                   onChange={CategoriesFilter}>
                            </input>
                            <label className="checkbox-label text-4" htmlFor="Dünya_Roman">Dünya Roman</label>
                        </div>
                        <div className="categories-type">
                            <input type="checkbox"
                                   name="Türk_Roman"
                                   value="Türk Roman"
                                   id="Türk_Roman"
                                   onChange={CategoriesFilter}>
                            </input>
                            <label className="checkbox-label text-4" htmlFor="Türk_Roman">Türk Roman</label>
                        </div>
                        <div className="categories-type">
                            <input type="checkbox"
                                   name="Dünya_Klasik"
                                   value="Dünya Klasik"
                                   id="Dünya_Klasik"
                                   onChange={CategoriesFilter}>
                            </input>
                            <label className="checkbox-label text-4" htmlFor="Dünya_Klasik">Dünya Klasik</label>
                        </div>
                        <button className="search-button">
                            Ara
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filters;