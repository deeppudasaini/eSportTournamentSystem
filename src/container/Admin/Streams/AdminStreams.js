import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminStreams() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/streams").then(res => {
    setNews(res.data);
  });
},[])
const columns = useMemo(() => 
{
  return [
    
    {
      Header: "Name",
      accessor: "name",
      width: 500,
      filterable: true
    },
    {
      Header: "Link",
      accessor: "link",
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
      <List title="Streams" data={news} columns={columns}/>
    </div>
  );
}
