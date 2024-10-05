// Main library file
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global = global || self), (global.ChatWidget = factory()));
})(this, function () {
  "use strict";

  function ChatWidget(options) {
    const defaultOptions = {
      lineUrl: "",
      phoneNumber: "",
      position: "bottom-right",
      marginBottom: "25px",
      marginRight: "25px",
      lineColor: "#00B900",
      phoneColor: "#FF9c00",
    };

    const mergedOptions = { ...defaultOptions, ...options };

    function createWidget() {
      const container = document.createElement("div");
      container.className = "chat-widget";
      container.style.cssText = `
          position: fixed;
          ${
            mergedOptions.position.includes("bottom")
              ? `bottom: ${mergedOptions.marginBottom};`
              : `top: ${mergedOptions.marginBottom};`
          }
          ${
            mergedOptions.position.includes("right")
              ? `right: ${mergedOptions.marginRight};`
              : `left: ${mergedOptions.marginRight};`
          }
          z-index: 10001;
        `;

      if (mergedOptions.lineUrl) {
        const lineLink = createButton(
          "line",
          mergedOptions.lineUrl,
          createLineSVG(),
          "เพิ่มเพื่อน",
          mergedOptions.lineColor
        );
        container.appendChild(lineLink);
      }

      if (mergedOptions.phoneNumber) {
        const phoneLink = createButton(
          "phone",
          `tel:${mergedOptions.phoneNumber}`,
          createPhoneSVG(),
          "โทร",
          mergedOptions.phoneColor
        );
        phoneLink.style.marginTop = "5px";
        container.appendChild(phoneLink);
      }

      document.body.appendChild(container);
      console.log("Chat widget initialized");
    }

    function createButton(type, href, svgContent, altText, bgColor) {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.id = `${type}-chat-widget`;
      link.setAttribute("aria-label", altText);
      link.style.cssText = `
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          background: ${bgColor};
          border-radius: 50%;
          color: #fff;
          text-decoration: none;
        `;

      link.innerHTML = svgContent;
      return link;
    }

    function createLineSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.348 0 .63.285.63.63 0 .349-.282.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>`;
    }

    function createPhoneSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>`;
    }

    return {
      init: createWidget,
    };
  }

  return ChatWidget;
});
