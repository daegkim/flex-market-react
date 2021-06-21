import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import urls from './urls';

function ProductDetailComponent() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({image: ""});
  const getProductDetail = () => {
    fetch(urls.productDetail + productId)
    .then((res) => { return res.json(); })
    .then((res_json) => { setProductDetail(res_json); });
  }

  useEffect(()=>{
    getProductDetail();
  }, []);

  return (
    <div className="productDetail">
      <img src={productDetail.image} width="300px" heigth="300px" alt="not exists" />
      <div className="productDetail-desc">
        <p>이름 : { productDetail.productName }</p>
        <p>가격 : { productDetail.price }원</p>
        <Link to="/">
          <button>prev</button>
        </Link>
        <button>buy</button>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
