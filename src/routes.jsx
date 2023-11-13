import Demo from "./componets/demo";
import Demo2 from "./componets/demo2";
import Demo3 from "./componets/demo3";
import Demo4 from "./componets/demo4";
import Demo5 from "./componets/demo5";
import Demo6 from "./componets/demo6";

const routes = () => [
  { path: "", element: <Demo /> },
  { path: "t2", element: <Demo2 /> },
  { path: "t3", element: <Demo3 /> },
  { path: "t4", element: <Demo4 /> },
  { path: "dt1", element: <Demo5 /> },
  { path: "dt2", element: <Demo6 /> },
];
export default routes;
