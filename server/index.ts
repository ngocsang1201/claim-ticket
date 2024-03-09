import colorthief from 'colorthief'
import cors from 'cors'
import express from 'express'
import { findDissimilarColor, isDarkColor, rgbToHex } from './helpers'
import type { ColorRgb } from './types'

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())

app.use('/ticket', async (req, res) => {
  const domain = req.query.domain
  const imgUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

  const getColorPromises = [colorthief.getColor(imgUrl), colorthief.getPalette(imgUrl)] as [
    Promise<ColorRgb>,
    Promise<Array<ColorRgb>>,
  ]
  const [primaryColorRgb, paletteRgb] = await Promise.all(getColorPromises)
  const secondaryColorRgb = findDissimilarColor(primaryColorRgb, paletteRgb)

  return res.json({
    domain,
    imgUrl,
    primaryColor: rgbToHex(...primaryColorRgb),
    isPrimaryColorDark: isDarkColor(primaryColorRgb),
    secondaryColor: rgbToHex(...secondaryColorRgb),
    isSecondaryColorDark: isDarkColor(secondaryColorRgb),
    palette: paletteRgb.map((color) => rgbToHex(...color)),
  })
})

app.use('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
