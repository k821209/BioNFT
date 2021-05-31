import axios from "axios";
import { BT_CONTRACT_ADDRESS } from "../constants";
import abijson from "../abi/BT_ABI.json"
import { Redirect } from "react-router";

const A2P_API_PREPARE_URL = "https://a2a-api.klipwallet.com/v2/a2a/prepare";
const APP_NAME = "BT-NFT";
export const setValue = (value_array, setQrvalue, setNFT) => {
  console.log(value_array, JSON.stringify(abijson[0]))
  axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: "execute_contract",
      transaction: {
        to: BT_CONTRACT_ADDRESS,
        abi: JSON.stringify(abijson[0]),
        value: "0",
        //params: `[\"${count}\"]`,
        params: JSON.stringify(value_array)
      },
    })
    .then((response) => {
      const { request_key } = response.data;
      const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
      setQrvalue(qrcode);
      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
          )
          .then((res) => {
            if (res.data.result) {
              console.log(`[Result] ${JSON.stringify(res.data.result)}`);
              if (res.data.result.status === "success") {
                setNFT({ "status": true, "tx_hash": res.data.result.tx_hash })// django에 post
                clearInterval(timerId);
              }
            }
          });
      }, 1000);
      setTimeout(function()
        {
        clearTimeout(timerId);
        }, 100000 );

    });
};