import numeral from 'numeral'

export const formatNum = (num: number) => {
  const precision = Math.abs(num) > 1 ? '00' : '0000'
  return numeral(num).format(`0,0.${precision}`)
}
