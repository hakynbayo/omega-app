import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card";
import Sidebar from "../../components/sidebar/sidebar";

// const Home = () => {
//   return (
//     <div className="flex">
//       <div className="display flex">
//       <Navbar />
//       <Card/>
//     </div>
//     <div className="">
//       <Sidebar/>
//     </div>
//     </div>
    
//   );
// };
const Home = () => {
  return (
    <div className="flex">
     
      <div className="flex-none">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-grow">
        
        <div className="bg-gray-50 text-white p-4">
          <Navbar />
        </div>
        <div className="p-4">
          <Card />
        </div>
      </div>
    </div>
  );
};


export default Home;
