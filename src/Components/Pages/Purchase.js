import React, { useMemo } from "react";
import Heading from "../GunPurchase/Heading";
import BuyGun from "../GunPurchase/BuyGun";
import Similar from "../GunPurchase/Similar";
import { useParams } from "react-router-dom";
import { useTokens } from "../../store/tokens/hook";
import { useAppChainId } from "../../store/app/hook";
import { network } from "../../config/networks";
import { tokenContracts } from "../../config/contracts";
const Purchase = () => {
  const tokenId = useParams().id;
  // const tokenId = searchParams.get("tokenId");

  const tokenData = useTokens();

  const selectedNFT = useMemo(() => {
    return tokenData[Number(tokenId)];
  }, [tokenData, tokenId]);
  const appChainId = useAppChainId();

  const index = Object.values(tokenData).findIndex(
    (el) => el.tokenId === parseInt(tokenId)
  );
  const data = Object.values(tokenData)[index];

  return (
    <div>
      {/* <Heading /> */}
      <BuyGun
        data={data}
        image={selectedNFT?.metadata?.image}
        heading={selectedNFT?.metadata?.name}
        headingNumber={`#${selectedNFT?.tokenId}`}
        gamingAsset="Gaming Asset"
        contractAddress={tokenContracts[appChainId]}
        createdBy="Hypermove"
        itemId={String(selectedNFT?.tokenId)}
        polygon={network[appChainId]}
        inGameAsset="In Game Asset Name"
        price={String(selectedNFT?.price)}
        quantity={selectedNFT?.quantity}
        availbleToBuy={!selectedNFT?.active}
        // polygon={network[appChainId]}
      />
      <Similar data={data}/>
    </div>
  );
};

export default Purchase;
