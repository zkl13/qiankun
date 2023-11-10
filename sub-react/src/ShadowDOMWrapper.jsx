import React, { useEffect, useRef } from 'react';

function ShadowDOMWrapper({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    console.log(container.children)
    const shadowRoot = container.attachShadow({ mode: 'open' });

    // 创建一个 <style> 元素，并将子应用的样式添加到 Shadow DOM 中
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* 子应用的样式 */
      .layout-header {
        color:#fff;
        background: blue
      }
    `;
    const content = document.createElement("div");
    content.innerHTML = '<div class="layout-header">shadowDom HTML</div>';
    shadowRoot.appendChild(styleElement)
    shadowRoot.appendChild(content);
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
}

export default ShadowDOMWrapper;