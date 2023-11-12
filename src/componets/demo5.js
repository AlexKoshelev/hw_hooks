import { useWindowScroll } from "../hooks/useWindowScroll";

function Demo5() {
  const [scroll, scrollTo] = useWindowScroll();
  console.log(scroll);
  return (
    <div style={{ height: "2000px" }}>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
export default Demo5;
