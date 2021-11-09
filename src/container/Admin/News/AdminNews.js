import List from "../../../components/CRUD/List";
import {useState, useEffect} from "react";
import axios from "../../../Request/axios";
export default function AdminNews() {
  const [news, setNews] = useState([]);
  const[columns,setColumns]=useState([]);
 useEffect(()=>{
  setColumns(Object.keys(news[0]).map(key=>{
    return {
      Header:key.toUpperCase(),
      accessor:key
    }
  }))
  },[news]);
 useEffect(() => {
  axios.get("/posts").then(res => {
    setNews(res.data);
  });
},[])
  return (
    <div>
      <List title="News" data={news} columns={columns}/>
    </div>
  );
}
