import { useEffect, useState } from "react";

const url = "https://api.github.com/users";
const url2 = "https://ojas-ecommerce.onrender.com/api/v1/products";
const url3 = "https://ojas-ecommerce.onrender.com/api/v1/products";
const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url3, {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        });
        console.log(res);
        if (!res.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const parsedData = await res.json();
        console.log(parsedData.products);
        setData(parsedData.products);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Oops, There was an error</h1>;
  }
  return (
    <div className="flex-container">
      {data.map((element) => {
        return (
          <div key={element._id} className="flex-item">
            <img src={element.image} className="flex-image" alt="" />
            <h4>{element.name}</h4>
            <p>{element.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
