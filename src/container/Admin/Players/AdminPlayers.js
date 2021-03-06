import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminPlayers() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/users").then(res => {
    setNews(res.data);
  });
},[])
const columns = useMemo(() => 
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
      Cell: props => <img src={props.value} alt="img" width="100" />
    },
    {
      Header: "Creator",
      accessor: "Creator",
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
      <List title="Players" data={news} columns={columns}/>
    </div>
  );
}
