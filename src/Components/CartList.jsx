import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Contact from "../Pages/Contact";

const CartList = () => {
  const { items } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  function handleIncItem(id) {
    dispatch({ type: "INC_ITEM_COUNT", payload: id });
  }

  function handleDecItem(id) {
    dispatch({ type: "DEC_ITEM_COUNT", payload: id });
  }

  function handleRemoveItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  return (
    <>
      <section className="text-bg-light mb-5 h-100">
        <div className="container py-3">
          <div className="d-flex justify-content-between">
            <h1>Your Cart</h1>
            <span>
              Total: $
              {items
                .reduce((p, c) => p + c.product.price * c.count, 0)
                .toFixed(2)}
            </span>
          </div>

          {items.length === 0 && <h2 className="text-center">Cart is empty</h2>}

          <ul className="list-group my-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="list-group-item row d-flex align-items-center"
              >
                <div className="col-md-1">
                  <img
                    className="img-fluid"
                    src={item.product.image}
                    alt={item.product.title}
                  />
                </div>
                <div className="col-md-7">
                  <h2>{item.product.title}</h2>
                  <p>{item.product.description}</p>
                </div>
                <div className="col-md-1">
                  <p>${item.product.price}</p>
                </div>
                <div className="col-md-1 d-flex justify-content-between align-items-center">
                  <button
                    disabled={item.count <= 1}
                    className="btn btn-secondary"
                    onClick={() => handleDecItem(item.product.id)}
                  >
                    -
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleIncItem(item.product.id)}
                  >
                    +
                  </button>
                </div>
                <div className="col-md-1">
                  <p>${item.count * item.product.price}</p>
                </div>
                <div className="col-md-1">
                  <button
                    onClick={() => handleRemoveItem(item.product.id)}
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <Link to={"/"} className="btn btn-outline-success">
              <i className="fa-solid fa-arrow-left"></i> Back to Shopping
            </Link>

            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              disabled={items.length === 0}
            >
              Proceed to Payment <i className="fa-solid fa-arrow-right"></i>
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Do you want to buy?
                    </h1>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      className="row g-3"
                      action="https://formsubmit.co/rsaidqodirxon@gmail.com"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="_next"
                        value="https://smartshop.smhost.uz/"
                      />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Message !"
                      />
                      <input type="hidden" name="_captcha" value="false" />
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          name="Email :"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value={"+998"}
                          name="Phone Number"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                          name="Adress1 : "
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">
                          Address 2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress2"
                          placeholder="Apartment, studio, or floor"
                          name="Adress2 : "
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCity"
                          name="City : "
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">
                          State
                        </label>
                        <select
                          id="inputState"
                          className="form-select"
                          name="Country : "
                          required
                        >
                          <option defaultValue>Uzbekistan</option>
                          <option>Russia</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputZip"
                          name="Zip : "
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name="Oferta : "
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Agree to the terms of the
                            <Link
                              to={"/oferta"}
                              className="text-decoration-none mx-1"
                            >
                              Public Offer
                            </Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                          Placing an order
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <Link to={"/contact"} className="btn btn-primary">
                      Contacts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartList;
