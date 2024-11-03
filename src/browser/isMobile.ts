const isBrowserMobile = (): boolean => {
    const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]

    return toMatch.some((toMatchItem: RegExp): boolean => !!navigator.userAgent.match(toMatchItem))
}

export { isBrowserMobile }
