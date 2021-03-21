const createTextElement = (text: string) =>
  createElement('TEXT_ELEMENT', { nodeValue: text }, [])

const isTextChild = (child: string | unknown): child is string =>
  typeof child === 'string'

export const createElement = (
  type: string,
  props: Record<string, string>,
  ...children: unknown[]
): unknown => ({
  type,
  props: props || {},
  children: children.map(child =>
    isTextChild(child) ? createTextElement(child) : child,
  ),
})
