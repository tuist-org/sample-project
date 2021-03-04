import { Value } from './lib/context'

export function link(): Value {
  const el = document.querySelector('#sliderY') as HTMLInputElement
  if (!el) {
    return
  }
  return {
    number: () => parseFloat(el.value),
  }
}
