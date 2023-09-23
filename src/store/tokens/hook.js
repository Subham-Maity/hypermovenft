import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppChainId } from "../app/hook";

import axios from "axios";
import { setTokens } from ".";

import { useSelector } from "react-redux";

import { getMulticallSale } from "../../utilities/multicall/multicall";
import { getAllMetaData } from "../../utilities/fetchMetadata";
import { unitFormatter } from "../../utilities";
import { marketplaceContracts } from "../../config/contracts";

export const useSetToken = () => {
  const dispatch = useDispatch();
  const appChainId = useAppChainId();

  useEffect(() => {
    if (!appChainId) return;

    const fetchMulticall = async () => {
      try {
        const tokenResponse = await axios
          .get(`https://apinft.hypermove.io/all-gaming-nfts/${appChainId}`)
          .then((data) => data.data);

        let token = [];
        if (tokenResponse?.data) {
          token = Object.keys(tokenResponse?.data?.Assets).map((e) =>
            Number(e)
          );
        }

        if (token.length === 0) return;

        const urls = Object.values(tokenResponse?.data?.Assets).map(
          (el) => el?.uri
        );

        let metaData;

        try {
          metaData = await getAllMetaData(urls);
        } catch (err) {
          console.log(err);
        }

        let data = {};

        let multicallData = await getMulticallSale(
          appChainId,
          marketplaceContracts[appChainId],
          token
        );

        console.log({ appChainId, multicallData });

        if (multicallData) {
          for (let i = 1; i <= token.length; i++) {
            data[i] = {
              seller: multicallData?.[i]?.seller,
              tokenId: multicallData?.[i]?.tokenId,
              price: unitFormatter(multicallData?.[i]?.price?.toString()),
              quantity: multicallData?.[i]?.quantity,
              uri: tokenResponse?.data?.Assets[i]?.uri,
              active: multicallData?.[i]?.active,
              metadata: metaData?.[i - 1],
            };
          }
          dispatch(setTokens({ tokens: data }));
        } else {
          dispatch(setTokens({ tokens: {} }));
        }
      } catch (err) {
        if (err instanceof Error) {
          console.log("useSetToken Failed", err?.message);
        }
      }
    };
    fetchMulticall();
  }, [appChainId, dispatch]);
};

export const useTokens = () => {
  return useSelector((state) => state.tokens.tokens);
};
