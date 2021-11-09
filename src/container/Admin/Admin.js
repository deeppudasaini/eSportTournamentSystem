import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";
import AdminNews from "./News/AdminNews";
import AdminStreams from "./Streams/AdminStreams";
import AdminTournaments from "./Tournaments/AdminTournaments";
import AdminTeams from "./Teams/AdminTeams";
import AdminCategory from "./Category/AdminCategory";
import AdminResult from "./Result/AdminResult";
import AdminPlayers from "./Players/AdminPlayers";
import AdminRole from "./Role/AdminRole";
export default function Admin() {
  return (
    <div>
      <Router>
        <main class="bg-gray-100 dark:bg-gray-800  relative" style={{ backgroundColor: "#374151" }}>
          <div class="flex items-start justify-between">
            <Sidebar />
            <div
              class="flex flex-col w-full md:space-y-4"
              style={{ backgroundColor: "#1F2937" }}
            >
               
              <Switch>
                <Route path="/admin">
                  <Dashboard />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/news">
                  <AdminNews />
                </Route>
                <Route path="/streams">
                  <AdminStreams />
                </Route>
                <Route path="/tournaments">
                  <AdminTournaments />
                </Route>
                <Route path="/players">
                  <AdminPlayers />
                </Route>
                <Route path="/teams">
                  <AdminTeams />
                </Route>
                <Route path="/results">
                  <AdminResult  />
                </Route>
                <Route path="/categories">
                  <AdminCategory />
                </Route>
                <Route path="/roles">
                  <AdminRole />
                </Route>
              </Switch>
            </div>
          </div>
        </main>
      </Router>
    </div>
  );
}
