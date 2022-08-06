import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const API_URL = process.env.API_URL;

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(API_URL);

      if (!response.ok) throw new Error("Could not fetch cart data");

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(API_URL, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
          totalAmount: cart.totalAmount,
        }),
      });

      if (!response.ok) throw new Error("sending cart data failed");
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent cart data successfully",
        })
      );

      setTimeout(() => {
        dispatch(uiActions.showNotification({}));
      }, 3000);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed",
        })
      );
    }
  };
};
