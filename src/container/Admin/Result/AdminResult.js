import List from "../../../components/CRUD/List";
import {useState, useEffect,useMemo} from "react";
import axios from "../../../Request/axios";
export default function AdminResult() {
  const [news, setNews] = useState([]);
  
 useEffect(() => {
  axios.get("/results").then(res => {
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
      Header: "Description",
      accessor: "description",
      width: 500,
      filterable: true
    },
    {
      Header: "Remarks",
      accessor: "remarks",
      width: 500,
      filterable: true,
     
    },
    {
      Header: "Status",
      accessor: "status",
      width: 500,
      filterable: true
    },
    {
        Header: "Tournament",
        accessor: "tournament_id",
        width: 500,
        filterable: true
      },
      {
        Header: "Team A",
        accessor: "team_a_id",
        
        filterable: true
      },
      {
        Header: "Team B",
        accessor: "team_b_id",
        
        filterable: true
      },
      {
        Header: "Team A Score",
        accessor: "team_a_score",
        
        filterable: true
      },
      {
        Header: "Team B Score",
        accessor: "team_b_score",
        
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
      <List title="Results" data={news} columns={a}/>
    </div>
  );
}
