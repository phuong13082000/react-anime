import TrendingProduct from "../Homepage/trendingProduct";
import PopularProduct from "../Homepage/popularProduct";
import RecentProduct from "../Homepage/recentProduct";
import LiveProduct from "../Homepage/liveProduct";
import ProductSidebarView from "../Sidebar/productSidebarView";
import ProductSidebarComment from "../Sidebar/productSidebarComment";

const Homepage = () => {

    return (
        <>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TrendingProduct/>
                            <PopularProduct/>
                            <RecentProduct/>
                            <LiveProduct/>
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

export default Homepage