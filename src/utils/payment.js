import axios from "axios";

import config from "../config/config.js";

const payViaKhalti = async (data) => {
  const body = {
    return_url: config.appUrl, //
    website_url: config.appUrl,
    amount: data.amount * 100, //because it is in paisa
    purchase_order_id: data.purchaseOrderId,
    purchase_order_name: data.purchaseOrderName,
    customer_info: {
      name: data.coustomer.name,
      email: data.customer.email,
      phone: data.customer.phone,
    },
  };

  const response = await axios.post(config.khalti.apiUrl, body, {
    headers: {
      Authorization: `KEY ${config.khalti.secret} `,
    },
  });

  return response.data;
};

export { payViaKhalti };
