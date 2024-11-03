import { Css, Em } from "../../browser"
import { Px } from "../image"

const formatEm = (em: Em): Css => `${em}em` as Css

const formatPx = (px: Px): Css => `${px}px` as Css

export { formatEm, formatPx }
