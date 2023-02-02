// import App from "../App";
import Home from "../views/Home";
import React, { lazy } from "react";
//重定向组件
import { Navigate } from "react-router-dom";

// const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Login = lazy(() => import("@/views/Login"));
const Page301 = lazy(() => import("../views/Page301"));
// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Navigate to={'/home'}/>}></Route>
//         <Route path="/home" element={<Home />}></Route>
//         <Route path="/about" element={<About />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

// export default baseRouter
const withLoading = (comp: JSX.Element) => (
  <React.Suspense fallback={<div> loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />
  },
  //   {
  //     path: "/home",
  //     element: <Home />
  //   },
  //   {
  //     path: "/about",
  //     element: withLoading(<About/> )
  //   }
  {
    path: "/",
    element: <Home />,
    children: [
        
      {
        path: "/page1",
        element: withLoading(<Page1 />)
      },
      {
        path: "/page2",
        element: withLoading(<Page2 />)
      },
      {
        path: "/page3/page301",
        element: withLoading(<Page301 />)
      }
    ]
  },
  {
    path: "/login",
    element: withLoading(<Login />)
  },
  {
    path:'*',
    element: <Navigate to="/page1" />
  }
];

export default routes;
