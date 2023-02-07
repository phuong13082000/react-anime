import {Link} from "react-router-dom";
import ProductSidebarView from "../Sidebar/productSidebarView";
import ProductSidebarComment from "../Sidebar/productSidebarComment";
import ProductPageContent from "../Category/productPageContent";
import ProductPagination from "../Category/productPagination";

const Category = () => {
    return (
        <>
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to="/"><i className="fa fa-home"/> Home</Link>
                                <Link to="/categories">Categories</Link>
                                <span>Romance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product-page spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <ProductPageContent/>
                            <ProductPagination/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                                <ProductSidebarView/>
                                <ProductSidebarComment/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category