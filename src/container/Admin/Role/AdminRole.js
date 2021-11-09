import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminRole() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/roles").then(res => {
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
      Header: "Display Name",
      accessor: "display_name",
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
      <List title="Roles" data={news} columns={a}/>
    </div>
  );
}
