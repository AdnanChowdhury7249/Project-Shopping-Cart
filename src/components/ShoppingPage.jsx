import { useEffect, useState } from "react";
import FetchShoppingData from "./FetchShoppingData";

const ShoppingPage = () => {

  return (
    <FetchShoppingData
      showAll={true}
    />
  )
}

export default ShoppingPage;
