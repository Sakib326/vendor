import parse from "html-react-parser";
import { Link } from "react-router-dom";

function Products({ userProfile, allProductList }: any) {
  return (
    <div>
      <div className="border rounded p-5 mb-5">
        <h4 className="mb-3 text-lg">About Company</h4>
        <div className="mb-4">
          {parse(userProfile?.overview ? userProfile?.overview : "<p>N/A</p>")}
        </div>
      </div>

      {/* products */}
      {allProductList?.data && allProductList?.data.length > 0 && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg">Product</h4>
            {allProductList?.data && allProductList?.data.length > 10 && (
              <Link to="/products/list" className="text-secondary">
                View All
              </Link>
            )}
          </div>
          <div className="grid grid-cols-2 gap-5">
            {allProductList?.data.map((item: any, i: any) => {
              return (
                <div className="flex flex-col" key={i}>
                  <div className="mb-4 w-full h-[170px]">
                    <img
                      crossOrigin="anonymous"
                      className="w-full h-full object-cover"
                      src={
                        item?.image
                          ? `${import.meta.env.VITE_API_URL}/${item?.image}`
                          : "/images/misc/image-placeholder-big.webp"
                      }
                      alt="product"
                    />
                  </div>
                  <div className="text-grey mb-0.5 text-sm">
                    {item?.category}
                  </div>
                  <Link
                    to={`/profile/products/view/${item?.id}`}
                    className="block text-black text-sm mb-1 font-medium"
                  >
                    {item?.name}
                  </Link>

                  <div className="flex items-center gap-2 text-sm">
                    <p className="text-primary font-medium">
                      {item?.discountPrice} BDT
                    </p>
                    {item?.discountPrice !== item?.price && (
                      <p className="line-through">{item?.price}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
