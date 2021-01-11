type Html = string & {_HtmlBrand: boolean}
type Link = string & {_LinkBrand: boolean}

type Em = number & {_EmBrand: "Em"}

export {
    Html,
    Em,
    Link,
}
