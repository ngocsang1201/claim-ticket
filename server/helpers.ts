import type { ColorRgb } from './types'

export const isDarkColor = (color: ColorRgb) => {
  const luminance = 0.2126 * color[0] + 0.7152 * color[1] + 0.0722 * color[2]
  return luminance < 128
}

export const rgbDistance = (color1: ColorRgb, color2: ColorRgb) => {
  const rDiff = Math.pow(color1[0] - color2[0], 2)
  const gDiff = Math.pow(color1[1] - color2[1], 2)
  const bDiff = Math.pow(color1[2] - color2[2], 2)
  return Math.sqrt(rDiff + gDiff + bDiff)
}

export const findDissimilarColor = (primaryColor: ColorRgb, colorPalette: ColorRgb[]) => {
  let maxDistance = -1
  let secondaryColor: ColorRgb = [0, 0, 0]

  colorPalette.forEach((color) => {
    const distance = rgbDistance(primaryColor, color)
    if (distance > maxDistance) {
      maxDistance = distance
      secondaryColor = color
    }
  })

  return secondaryColor
}

export const rgbToHex = (...rgb: ColorRgb) =>
  '#' +
  rgb
    .map((x) => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')
