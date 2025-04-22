import { NewsFeed } from "../NewsFeed";
import { Sidebar } from "../Sidebar";
import "./index.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar details={{ firstName: "Adrian", lastName: "Ramos" }} />
      <NewsFeed
        posts={[
          { text: "ReactJs", date: "2020-10-03" },
          { text: "Facebook", date: "2021-5-1" },
        ]}
      />
    </div>
  );
};
