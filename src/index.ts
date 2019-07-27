type KeyboardEvent = Readonly<{
  key: string
  shiftKey: boolean
  altKey: boolean
  ctrlKey: boolean
  metaKey: boolean
}>

const enum Arrow {
  Top = 'ArrowTop',
  Right = 'ArrowRight',
  Bottom = 'ArrowBottom',
  Left = 'ArrowLeft'
}

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' as const
const NUMERIC = '0123456789' as const

const enum Key {
  Tab = 'Tab',
  Enter = 'Enter',
  Backspace = 'BackSpace',
  Escape = 'Escape',
  CapsLock = 'CapsLock'
}

export class KeyInfo {
  public static from(event: KeyboardEvent) {
    return new KeyInfo(event)
  }

  public readonly isShift: boolean
  public readonly isAlt: boolean
  public readonly isControl: boolean
  public readonly isMeta: boolean

  private readonly currentKey: string

  private constructor(event: KeyboardEvent) {
    this.currentKey = event.key
    this.isShift = event.shiftKey
    this.isAlt = event.altKey
    this.isControl = event.ctrlKey
    this.isMeta = event.metaKey
  }

  public get isArrow() {
    return this.isTop || this.isRight || this.isBottom || this.isLeft
  }

  public get isTop() {
    return this.currentKey === Arrow.Top
  }

  public get isRight() {
    return this.currentKey === Arrow.Right
  }

  public get isBottom() {
    return this.currentKey === Arrow.Bottom
  }

  public get isLeft() {
    return this.currentKey === Arrow.Left
  }

  public get isAlphabet() {
    return ALPHABET.includes(this.currentKey)
  }

  public get isNumeric() {
    return NUMERIC.includes(this.currentKey)
  }

  public get isTab() {
    return this.currentKey === Key.Tab
  }

  public get isEnter() {
    return this.currentKey === Key.Enter
  }

  public get isBackspace() {
    return this.currentKey === Key.Backspace
  }

  public get isEscape() {
    return this.currentKey === Key.Escape
  }

  public get isCapsLock() {
    return this.currentKey === Key.CapsLock
  }
}
