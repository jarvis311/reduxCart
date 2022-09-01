import { cartAction } from "./cart-slice";
import { uiAction } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://mock-2-a4132-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Not Fetching Data!!!");
      }
      const jsonData = response.json();
      return jsonData;
    };
    try {
      const cardData = await fetchdata();
      dispatch(cartAction.replaceCart({
        items: cardData.items || [],
        totalQuantity: cardData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart data faild",
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.showNotification({
        status: "pending",
        title: "Pending..",
        message: "Sending Cart data is pending...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://mock-2-a4132-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items:cart.items,
            totalQuantity:cart.totalQuantity
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Data is not sending!!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending Cart data Success",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart data faild",
        })
      );
    }
  };
};
