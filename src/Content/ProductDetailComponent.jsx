import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import urls from '../urls';

function ProductDetailComponent() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({image: ""});
  const getProductDetail = () => {
    fetch(urls.productDetail + productId)
    .then((res) => { return res.json(); })
    .then((res_json) => { setProductDetail(res_json); });
  }

  const tryBuyProduct = async (e) => {
    fetch(urls.buy_product, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          userId: 'dgsoul',
          orderProduct: [{
            productId: parseInt(productId),
            pricePerPiece: productDetail.price,
            quantity: 1
          }]
        }
      )
    })
    .then((res) => {
      return res.json();
    })
    .then((res_json) => {
      if(res_json.isSuccess){

      }
      else{
        throw new Error(res_json.reason);
      }
    })
    .catch((err) => {
      alert(err);
    })
  }

  const onClickBuyBtn = async (e) => {
    await tryBuyProduct()
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
        <button onClick={onClickBuyBtn}>buy</button>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
