
const Products = (props) =>{

    return(
        <div className="products-all col-sm-10">
            <div className="products-body">
                {(props.Books && props.Books.map((book)=>(
                    <div className="products-item col-md-4" key={book.book_id}>
                        <div className="products-item-body">
                            <div className="products-img-field">
                                <img className="product-img" src={book.book_img}></img>
                            </div>
                            <div className="products-property-field">
                                <p className="products-property text-4">{book.book_name}</p>
                                <p className="products-property text-4">{book.book_writer}</p>
                                <p className="products-property">{book.book_price+" ₺"}</p>
                            </div>
                        </div>
                    </div>
                ))) || (<div className="text-4">Bulunamadı</div>)
                }
            </div>
        </div>
    )
}
export default Products;