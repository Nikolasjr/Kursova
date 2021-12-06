import React from "react";
import "./modal.css"

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(0)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
 <form className="forms">

              <label>Для замовлення введіть номер телефону</label>
              <input
        placeholder="+(380) ___ - ___ - __" type="tel" class="masked-phone"
      data-phonemask="+(___)"
      />
      <label>і наш оператор зателефонує вам за декілька хв</label>
              <button>підтвердити</button>
              </form>
      </div>
    </div>

  );
};

export default Modal;
