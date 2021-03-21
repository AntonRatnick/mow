type MOWRectElement = {
  type: string
  props: Record<string, string>
  children: MOWRectElement[]
}
const renderTextNode = (value: string) => document.createTextNode(value)

const renderNode = (
  type: string,
  props: Record<string, string> = {},
  children: MOWRectElement[],
) => {
  const node = document.createElement(type)

  Object.keys(props).forEach(propKey => {
    node.setAttribute(propKey, props[propKey])
  })

  children.forEach(render(node))

  console.log(node, 'some')
  return node
}

export const render = (container: HTMLElement) => ({
  type,
  props,
  children,
}: MOWRectElement): Node =>
  container.appendChild(
    type === 'TEXT_ELEMENT'
      ? renderTextNode(props.nodeValue)
      : renderNode(type, props, children),
  )
