import './Product.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import urls from './urls';

function ProductComponent(props) {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch(urls.list + props.categoryId)
    .then((res) => { return res.json(); })
    .then((res_json) => { setProducts(res_json); });
  };
  /*
  const getProductsListView = () => {
    return (
      <ul>
        {
          products.map((value, index) => {
            return (
              <li key={index}>{value.name}</li>
            );
          })
        }
      </ul>
    );
  };
  */
  const getProductsTableView = (numPerRow) => {
    let result = [];
    let tmp = [];
    for(let i=1; i<=products.length; i++){
      if(i % numPerRow === 0){
        tmp.push(products[i-1]);
        result.push(tmp);
        tmp = [];
      }
      else{
        tmp.push(products[i-1]);
      }
    }
    result.push(tmp);
    tmp = [];

    return (
      <table>
        <tbody>
          {
            result.map((rowVal, rowIdx) => {
              return(
                <tr key={"row" + rowIdx}>
                  {
                    rowVal.map((cellVal, cellIdx) => {
                      return (
                        <td key={"cell" + cellIdx}>
                          <div className="product-img">
                            <Link to={"/product/" + cellVal.productId}>
                              <img src={cellVal.image} width="200px" height="250px" alt="not exists"/>
                            </Link>
                          </div>
                          <p style={{fontSize: "11px"}}>{cellVal.productName}</p>
                        </td>
                      );
                    }) 
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }

  useEffect(() => {
    getProducts();
  }, [props.categoryId]);

  return (
    <div className="product">
      { getProductsTableView(4) }
    </div>
  );
}

export default ProductComponent;
