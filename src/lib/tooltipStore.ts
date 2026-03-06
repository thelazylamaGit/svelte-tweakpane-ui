/* eslint-disable unicorn/filename-case */
/* eslint-disable unicorn/no-null */
/* eslint-disable ts/no-restricted-types */
import { writable } from 'svelte/store'

export type TooltipState = null | {
	anchor: HTMLElement
	row: HTMLElement
	text: string
}

export const tooltipStore = writable<TooltipState>(null)

export function showTooltip(anchor: HTMLElement, row: HTMLElement, text: string) {
	tooltipStore.set({ anchor, row, text })
}

export function hideTooltip() {
	tooltipStore.set(null)
}
