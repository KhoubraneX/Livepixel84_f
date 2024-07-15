import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Main from "../components/main";

function Home() {
  const [sidebar, setSidebar] = useState(true);
  const containerRef = useRef(null);
  const [items, setItems] = useState([1, 2, 3, 4]);

  useEffect(() => {
    if (containerRef.current) {
      animateChildren(containerRef.current);
    }
  }, []);

  function getFlexItemsInfo(container) {
    return Array.from(container.children).map((item) => {
      const rect = item.getBoundingClientRect();
      return {
        element: item,
        x: rect.left,
        y: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top,
      };
    });
  }
  function animateFlexItems(oldFlexItemsInfo, newFlexItemsInfo) {
    for (const newFlexItemInfo of newFlexItemsInfo) {
      const oldFlexItemInfo = oldFlexItemsInfo.find(
        (e) => e.element === newFlexItemInfo.element
      );

      if (!oldFlexItemInfo) {
        continue;
      }

      const translateX = oldFlexItemInfo.x - newFlexItemInfo.x;
      const translateY = oldFlexItemInfo.y - newFlexItemInfo.y;
      const scaleX = oldFlexItemInfo.width / newFlexItemInfo.width;
      const scaleY = oldFlexItemInfo.height / newFlexItemInfo.height;

      newFlexItemInfo.element.animate(
        [
          {
            transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
          },
          { transform: "none" },
        ],
        {
          duration: 250,
          easing: "ease-out",
        }
      );
    }
  }

  function animateChildren(container) {
    let oldFlexItemsInfo = getFlexItemsInfo(container);

    const childListMutationCallback = function (mutationsList, observer) {
      const newFlexItemsInfo = getFlexItemsInfo(container);
      if (oldFlexItemsInfo) {
        animateFlexItems(oldFlexItemsInfo, newFlexItemsInfo);
      }
      oldFlexItemsInfo = newFlexItemsInfo;
    };

    new MutationObserver(childListMutationCallback).observe(container, {
      childList: true,
    });
  }

  const handleClick = (e) => {
    const newItem = items.length + 1;
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  return (
    <div className="homepage" >
      <Header toggleSidebar={() => setSidebar(!sidebar)}  hasSidebar={true} />
      <Box sx={{ display: "flex" }}>
        <Sidebar open={sidebar} handleClick={handleClick} />
        <Main open={sidebar} items={items} containerRef={containerRef} />
      </Box>
    </div>
  );
}

export default Home;
