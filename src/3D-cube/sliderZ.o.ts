import { Value } from 'pawi.types'

export function link(): Value {
  const el = document.querySelector('#sliderZ') as HTMLInputElement
  if (!el) {
    return
  }
  return {
    number: () => parseFloat(el.value),
  }
}
