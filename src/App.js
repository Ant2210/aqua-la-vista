import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./index.css";
import PageNav from "./components/Navbar";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";

import EventsList from "./components/EventsList";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CarouselCountries from "./components/carouselCountries";
import Ireland from "./pages/Ireland";
import England from "./pages/England";
import Scotland from "./pages/Scotland";
import Wales from "./pages/Wales";


// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   { path: "/blog", element: <Blog /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/england", element: <England /> },
//   { path: "/nireland", element: <Nireland /> },
//   { path: "/scotland", element: <Scotland /> },
//   { path: "/wales", element: <Wales /> },
// ]);

// function App() {
//   return (
//     <>
//       <PageNav/>
//       <CarouselCountries />
//       <RouterProvider router={router} />
//       <Footer />
//     </>
//   );
// }

// export default App;


function App() {
    return (
        <>
        <PageNav/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/england" element={<England />} />
            <Route path="/ireland" element={<Ireland />} />
            <Route path="/scotland" element={<Scotland/>} />
            <Route path="/wales" element={<Wales />} />

            </Routes>
        <Footer/>

        </>
    );
}

export default App;
