import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";
import whatsAppSvg from '../../../public/whatsapp.svg';
import WhatsappButton from "../Common/Whatsapp/WhatsappButton";


const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white shadow-1 rounded-[10px]">
        <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
          <h3 className="font-medium text-xl text-dark">Resumo da lista</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b border-gray-3">
            <div>
              <h4 className="font-medium text-dark">Produto</h4>
            </div>
            <div>
              <h4 className="font-medium text-dark text-right">Quantidade</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems.map((item, key) => (
            <div key={key} className="flex items-center gap-4 justify-between py-5 border-b border-gray-3">
              <div>
                <p className="text-dark">{item.titulo}</p>
              </div>
              <div>
                <p className="text-dark text-right">
                  {item?.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- total --> */}
          {/* <div className="flex items-center justify-between pt-5">
            <div>
              <p className="font-medium text-lg text-dark">Total</p>
            </div>
            <div>
              <p className="font-medium text-lg text-dark text-right">
                ${totalPrice}
              </p>
            </div>
          </div> */}

          {/* <!-- checkout button --> */}
          <div className="flex justify-center align-center mt-6">
            <WhatsappButton produtos={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
