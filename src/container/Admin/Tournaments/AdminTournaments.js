import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminTournaments() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/tournaments").then(res => {
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
      Header: "About",
      accessor: "about",
      width: 500,
      filterable: true
    },
    {
      Header: "Logo",
      accessor: "logo",
      width: 500,
      Cell:props=>{
        return (
          <div className="flex items-center px-4 py-2">
        <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
          <img
            className="h-12 w-12 rounded-full"
            src={props.value}
            alt=""
          />
        </div>
      </div>
        )
      }
    },
    {
      Header: "Prize",
      accessor: "prize",
      width: 500,
      filterable: true
    },
    {
      Header: "Venue",
      accessor: "venue",
      width: 500,
      filterable: true
    },
    {
      Header: "Group",
      accessor: "group",
      width: 500,
      filterable: true
    },
    {
      Header: "Date",
      accessor: "date",
      width: 500,
      filterable: true
    },
    {
      Header: "Players",
      accessor: "players",
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
      <List title="Tournaments" data={news} columns={columns}/>
    </div>
  );
}
