import { FunctionComponent } from "react";
import Header from "./header";

const Layout: FunctionComponent = ({ children }) => (
  <div className="h-full flex flex-col items">
    <Header />
    <main className='flex-1'>{children}</main>
  </div>
);

export default Layout;
