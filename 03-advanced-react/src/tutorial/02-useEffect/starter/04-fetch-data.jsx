import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.github.com/users");
      const parsedData = await res.json();
      setData(parsedData);
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <div>
      {data.map((element) => {
        return (
          <div key={element.id}>
            <img src={element.avatar_url} className="image" alt="" />
            <h4>{element.login}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
