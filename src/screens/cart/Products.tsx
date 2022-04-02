import React from "react";

export default function Products(props: any) {
  const { count, increase, decrease, product } = props;

  return (
    <>
      <div className="col-sm-3">
        <div className="card">
          <img src={product.img} className="card-img-top" alt="..." style={{ width: 300, height: 250 }} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.text}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="#" className="btn btn-success" onClick={() => increase(product.id)}>
                +
              </a>
              <h3> {product.value}</h3>
              <a href="#" className={product.value > 0 ? "btn btn-danger" : "btn btn-secondary"} onClick={() => decrease(product.id)}>
                -
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
