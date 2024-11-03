import { Decimal } from "../math"

type Html = string & { _HtmlBrand: boolean }
type Css = string & { _CssBrand: boolean }
type Hyperlink = string & { _HyperlinkBrand: boolean }

type Em = Decimal & { _EmBrand: "Em" }

export { Html, Css, Em, Hyperlink }
