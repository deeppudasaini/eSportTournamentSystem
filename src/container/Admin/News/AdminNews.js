import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminNews() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/posts").then(res => {
    setNews(res.data);
  });
},[])
const a = useMemo(() => 
{
  return [
    
    {
      Header: "Title",
      accessor: "title",
      width: 500,
      filterable: true
    },
    {
      Header: "Content",
      accessor: "content",
      width: 500,
      filterable: true
    },
    {
      Header: "Image",
      accessor: "image",
      width: 500,
      filterable: true,
      Cell: row => {
        return <img src={row.value} alt="img" width="100px" />;
      }
    },
    {
      Header: "Creator",
      accessor: "creator",
      width: 500,
      filterable: true
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ original }) => {
        return (
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              
            >
              Delete
            </button>
          </div>
        );
      }
    }
  ];
}
)
  return (
    <div>
      <List title="News" data={news} columns={a}/>
    </div>
  );
}
