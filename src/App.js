import './Theme.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import AdPanel from "./components/AdPanel";
import Filters from "./components/Filters";
import Products from "./components/Products";
import {useState} from "react";
import { Books } from "./datas/Bookinfo";

function App() {

    const [SearchBook, SetSearchBook]= useState();
    const [FilterBook, SetFilterBook]= useState([]);

    const pull_data = (data) => {
        SetSearchBook(data);
    }

    const pull_filter = (data) => {
        SetFilterBook(data);
    }

    const SearchBooks=(data)=>{
        const FilterBooks= data.filter((item)=>{for(var i in FilterBook) {
            if (item.book_type.includes(FilterBook[i])){
                return true;
            }
        }
        return false;});

        // const FilterBooks= data.filter((item)=> (item.book_type.includes(FilterBook[0]) || item.book_type.includes(FilterBook[1]) || item.book_type.includes(FilterBook[2])));
        const SelectBooks= data.filter((item)=> (item.book_name.turkishToLower().includes(SearchBook) || item.book_writer.turkishToLower().includes(SearchBook)));

        if(SelectBooks.length>=1){
            let AllBooks=true;
            if(SelectBooks.length===Books.length && FilterBooks.length>=1){
                return FilterBooks;
            }
            if(FilterBooks.length>=1){
                AllBooks = SelectBooks.some((item)=> FilterBooks.some((innerObj) => item.book_type === innerObj.book_type));
                if(AllBooks===false){
                    return false;
                }
                else{
                    const fullBook=SelectBooks.filter((item) => FilterBooks.some(innerObj => item.book_type === innerObj.book_type ));
                    return fullBook;
                }
            }
            return SelectBooks.flat();
        }
        else{
            return false;
        }
    }

    // const FilterBooks=(data)=>{
    //     const FilterBooks= data.filter((item)=> (item.book_type.includes(FilterBook[0]) || item.book_type.includes(FilterBook[1]) || item.book_type.includes(FilterBook[2])));
    //     console.log(FilterBooks);
    //     return FilterBooks;
    // }

    return (
        <div>
            <div className="header-all">
                <Navbar />
                <Menu/>
            </div>
            <div className="body-all container">
                <AdPanel/>
                <div className="item-all d-flex">
                    <Filters func={pull_filter} searchdata={pull_data}/>
                    <Products Books={SearchBooks(Books)} />
                </div>
            </div>
        </div>
    );
}

export default App;
