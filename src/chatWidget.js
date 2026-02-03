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
      whatsappNumber: "",
      messengerUrl: "",
      position: "bottom-right",
      marginBottom: "25px",
      marginRight: "25px",
      lineColor: "#00B900",
      phoneColor: "#FF9c00",
      whatsappColor: "#25D366",
      messengerColor: "#0084FF",
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

      function appendButton(link) {
        if (container.children.length > 0) {
          link.style.marginTop = "5px";
        }
        container.appendChild(link);
      }

      if (mergedOptions.lineUrl) {
        const lineLink = createButton(
          "line",
          mergedOptions.lineUrl,
          createLineSVG(),
          "เพิ่มเพื่อน",
          mergedOptions.lineColor
        );
        appendButton(lineLink);
      }

      if (mergedOptions.phoneNumber) {
        const phoneLink = createButton(
          "phone",
          `tel:${mergedOptions.phoneNumber}`,
          createPhoneSVG(),
          "โทร",
          mergedOptions.phoneColor
        );
        appendButton(phoneLink);
      }

      if (mergedOptions.whatsappNumber) {
        const whatsappLink = createButton(
          "whatsapp",
          `https://wa.me/${mergedOptions.whatsappNumber}`,
          createWhatsAppSVG(),
          "WhatsApp",
          mergedOptions.whatsappColor
        );
        appendButton(whatsappLink);
      }

      if (mergedOptions.messengerUrl) {
        const messengerLink = createButton(
          "messenger",
          mergedOptions.messengerUrl,
          createMessengerSVG(),
          "Messenger",
          mergedOptions.messengerColor
        );
        appendButton(messengerLink);
      }

      document.body.appendChild(container);
      console.log("Chat widget initialized");
    }

    function createButton(type, href, svgContent, altText, bgColor) {
      const link = document.createElement("a");
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
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
          @media (max-width: 768px) {
            width: 45px;
            height: 45px;
          }
        `;

      link.innerHTML = svgContent;
      return link;
    }

    function createLineSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF" style="@media (max-width: 768px) { width: 24px; height: 24px; }">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.348 0 .63.285.63.63 0 .349-.282.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>`;
    }

    function createPhoneSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF" style="@media (max-width: 768px) { width: 24px; height: 24px; }">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>`;
    }

    function createWhatsAppSVG() {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF" style="@media (max-width: 768px) { width: 24px; height: 24px; }">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>`;
    }

    function createMessengerSVG() {
      // Simple Messenger-like chat bubble with lightning mark
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#FFFFFF" style="@media (max-width: 768px) { width: 24px; height: 24px; }">
          <path d="M12 2C6.477 2 2 6.025 2 11.09c0 2.82 1.388 5.31 3.56 6.96V22l3.31-1.82c.98.27 2.03.41 3.13.41 5.523 0 10-4.025 10-9.09S17.523 2 12 2zm1.065 12.62-2.52-2.69-4.93 2.69 5.42-5.76 2.5 2.69 4.94-2.69-5.41 5.76z"/>
        </svg>`;
    }

    return {
      init: createWidget,
    };
  }

  return ChatWidget;
});
