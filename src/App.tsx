"use server";

import Banner from "./sections/Banner";
import Departments from "./sections/Departments";
import Header from "./sections/Header";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Departments />
    </div>
  );
}

export default App;
