import { Link } from "react-router-dom";

const productPagination = () => {
    return (
        <>
            <div className="product__pagination">
                <Link to="#" className="current-page">1</Link>
                <Link to="#">2</Link>
                <Link to="#">3</Link>
                <Link to="#">4</Link>
                <Link to="#">5</Link>
                <Link to="#"><i className="fa fa-angle-double-right"/></Link>
            </div>
        </>
    )
}

export default productPagination