import { useEffect } from "react";

export default function Modal({ children, show }: any) {
  function modalHandler(val: boolean) {
    let modal = document.getElementById("modal");
    if (val) {
      fadeIn(modal);
    } else {
      fadeOut(modal);
    }
  }

  function fadeOut(el: any) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
  function fadeIn(el: any) {
    el.style.opacity = 0;
    el.style.display = "flex";
    (function fade() {
      let val = parseFloat(el.style.opacity);
      if (!((val += 0.2) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  }

  useEffect(() => {
    modalHandler(show)
  })

  return (
    <div className="w-full py-5 backdrop-blur-md transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
      <div role="alert" className="mx-auto my-auto">
        {children}
      </div>
    </div>
  )
}