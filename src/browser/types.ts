type Html = string & {_HtmlBrand: boolean}
type Css = string & {_CssBrand: boolean}
type Link = string & {_LinkBrand: boolean}

type Em = number & {_EmBrand: "Em"}

export {
    Html,
    Css,
    Em,
    Link,
}
