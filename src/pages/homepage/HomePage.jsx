import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <SideBar/>
      </div>
    </>
  );
}
