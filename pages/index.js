import dynamic from "next/dynamic"
import "../styles/index.scss";

const Layout = dynamic(() => import("../components/Layout"));
const  Background = dynamic(() => import("../components/Background"));
const Sign = dynamic(() => import("../components/Sign"));
const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"));
export default function Home() {
  return (
    <>
      <Layout>
        <Background />
        <Sign />
        <DesktopNavbar />
      </Layout>
    </>
  )
}
