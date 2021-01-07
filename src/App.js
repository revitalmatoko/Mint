import logo from "./logo.svg";
import "./App.css";
import {useEffect, useState} from "react";
import store from "./component/store";
import SearchBar from "./component/SearchBar";
import StoreCard from "./component/StoreCard";
import storeCard from "./component/StoreCard";
import {getStores} from "./apis/tlvMall";

function App() {
  // const [stores, setStores] = useState([]);
  const apiRes = {
    custom: null,
    errorCode: 0,
    errorMessage: null,
    body: {
      pageIndex: 0,
      pageSize: 16,
      totalCount: 138,
      totalPageCount: 9,
      stores: [
        {
          id: 217,
          name: "גאנט",
          imageUrl:
            "https://service.tlvmall.com/Uploads//Stores/gant/5a1ac7d3f65d84088faf1367.png",
          isFavorite: true,
          moreInfo: {
            floorName: "קומת רחוב",
            websiteUrl: "https://www.gant.com/",
          },
        },
        {
          id: 218,
          name: "גאנט",
          imageUrl:
            "https://service.tlvmall.com/Uploads//Stores/gant/5a1ac7d3f65d84088faf1367.png",
          isFavorite: true,
          moreInfo: {
            floorName: "קומת רחוב",
            websiteUrl: "https://www.gant.com/",
          },
        },
        {
          id: 219,
          name: "גאנט",
          imageUrl:
            "https://service.tlvmall.com/Uploads//Stores/gant/5a1ac7d3f65d84088faf1367.png",
          isFavorite: true,
          moreInfo: {
            floorName: "קומת רחוב",
            websiteUrl: "https://www.gant.com/",
          },
        },
        {
          id: 220,
          name: "גאנט",
          imageUrl:
            "https://service.tlvmall.com/Uploads//Stores/gant/5a1ac7d3f65d84088faf1367.png",
          isFavorite: true,
          moreInfo: {
            floorName: "קומת רחוב",
            websiteUrl: "https://www.gant.com/",
          },
        },
      ],
      hasPreviousPage: false,
      hasNextPage: true,
    },
  };

  // useEffect(() => {
  //   getStores("nike",1,16)
  //   .then(res => {
  //     console.log(res);
  //     //setStores(res.body.items);
  //   })
  // }, []);

  return (
    <div className="App">
      <SearchBar />
      <div className="storesContainer">
        {apiRes.body.stores.map((store) => (
          <StoreCard
            key={store.id}
            name={store.name}
            imageUrl={store.imageUrl}
            isFavorite={store.isFavorite}
            floorName={store.moreInfo.floorName}
            websiteUrl={store.moreInfo.websiteUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
