import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminCategory() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/categories").then(res => {
    setNews(res.data);
  });
},[])
const a = useMemo(() => 
{
  return [
    
    {
      Header: "Name",
      accessor: "name",
      width: 500,
      filterable: true
    },
    {
      Header: "Status",
      accessor: "status",
      width: 500,
      filterable: true
    },
    {
      Header: "Sub-category of",
      accessor: "parent_id",
      width: 500,
      filterable: true,
     
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
      <List title="Category" data={news} columns={a}/>
    </div>
  );
}
