type MOWRectElement = {
  type: string
  props: {
    children: MOWRectElement[]
    nodeValue: string
  }
}

export const render = (container: HTMLElement) => (
  element: MOWRectElement,
): void => {
  const {
    type,
    props: { children, nodeValue },
  } = element

  if (type === 'TEXT_ELEMENT') {
    container.appendChild(document.createTextNode(nodeValue))
    return
  }

  const node = document.createElement(type)
  children.forEach(render(node))
  container.appendChild(node)
}
