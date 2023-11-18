import Axios from "axios";
export const HomePage = () => {
  Axios.get("https://dummyjson.com/products").then((res) =>
    console.log(res.data.products[0])
  );
  return <div>I am Homepage</div>;
};
