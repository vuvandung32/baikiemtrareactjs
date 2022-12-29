import React, {useEffect, useState } from 'react';
import productsData from './data/products.json';
 const Product =()=> {
  const [tongtien1, settongtienq] = useState(0);

        const [cart, setCart] = useState(productsData);


        var tongtien =0;
        useEffect(() => {
            if(cart.length===0){
                settongtienq(0)
            }else{
                for (let index = 0; index < cart.length; index++) {
                    tongtien +=   cart[index].price*cart[index].count   
                    settongtienq(tongtien)
                }
            }
        },[cart]);

        const decreaseQuantity = i => {
            setCart(prevCart =>
              prevCart.map((item, o) => {
                if (i === o ) {
                    if( item.count === 1){
                        return item;
                    }
                 return { ...item, count: item.count - 1 };
                } 
                return item;
              })
            );
          };

          const increaseQuantity = i => {
            setCart(prevCart =>
              prevCart.map((item, o) => {
                if (i === o ) {
                 return { ...item, count: item.count + 1 };
                } 
                return item;
              })
            );
          };

        const cartRemove = idItem => {
            const item1= cart.filter(item => item.id !== idItem)
            setCart(item1)
          };

  return (
    <div class="row shopping-cart">
      {cart.length===0 ? <p>Không có sản phẩm nào trong giỏ hàng</p>:<p></p> } 
    <div class="col-md-8">
        <div class="product-list">
        {cart.map((item,i )=> (
                         
            <div class="product-item d-flex border mb-4" key={item.id}>
                <div class="image">
                    <img src={item.image} alt="sản phẩm 3" />
                </div>
                <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="text-dark fs-5 fw-normal">
                            {item.name} ( {item.size})
                            </h2>
                            <h2 class="text-danger fs-5 fw-normal">
                                {item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                            </h2>
                        </div>
                        <div class="text-black-50">
                            <div class="d-inline-block me-3">
                                <button class="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => decreaseQuantity(i)} >-</button>
                                <span class="py-2 px-3 d-inline-block fw-bold">{item.count}</span>
                                <button class="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => increaseQuantity(i)} >+</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="text-primary border-0 bg-transparent fw-light" onClick={() => {if(window.confirm('Are you sure to delete this record?')){ cartRemove(item.id)};}} >
                            <span><i class="fa-solid fa-trash-can"></i></span>
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
                   ))}
        </div>
    </div>
    <div class="col-md-4">
        <div class="bill">
            <div class="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span class="text-black-50">Tạm tính:</span>
                <span class="text-primary" id="sub-total-money">{tongtien1.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
            </div>
            <div class="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span class="text-black-50">VAT (10%):</span>
                <span class="text-primary" id="vat-money">{(tongtien1*10/100).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
            </div>
            <div class="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span class="text-black-50">Thành tiền:</span>
                <span class="text-primary" id="total-money">{(tongtien1+(tongtien1*10/100)).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</span>
            </div>
        </div>
    </div>
</div>

  );
}

export default Product;

