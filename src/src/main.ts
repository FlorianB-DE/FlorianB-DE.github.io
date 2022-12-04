import { createApp, reactive } from 'vue'
import App from './App.vue'
import ContentSection from "./interfaces/ContentSection";

import css from './styles/styles.css';


const sections = reactive([] as Array<ContentSection>),
    activeIndex = () => {
        const index = sections.findIndex(element => element.active)
        return index < 0 ? 0 : index
    },
    scrollToSection = (indexOffset = 1) => {
        const nextIndex = Math.min(activeIndex() + indexOffset, sections.length - 1),
            nextEl = sections[nextIndex < 0 ? 0 : nextIndex]

        sections[activeIndex()].active = false
        nextEl.el.scrollIntoView()
        nextEl.active = true
    }

let timeout = 0;
let prevDirection = 0;
document.addEventListener("wheel", event => {
    const singedDelta = Math.sign(event.deltaY)
    if (!timeout || prevDirection != singedDelta) {
        prevDirection = singedDelta
        scrollToSection(singedDelta)
        clearTimeout(timeout)
        timeout = setTimeout(() => timeout = 0, 300)
    }
})

window.addEventListener("resize", () => scrollToSection(activeIndex() - 1))

let touchStart = 0
document.addEventListener("touchstart", event => touchStart = event.touches[0].clientY)
document.addEventListener("touchend", event => {
    const touchEnd = event.changedTouches[0].clientY
    if (Math.abs(touchStart - touchEnd) > window.innerHeight / 10)
        scrollToSection(Math.sign(Number(touchStart > touchEnd + 5) - .5))
})

createApp(App)
    .provide("sections", sections)
    .provide("activeIndex", activeIndex)
    .provide("activeSection", () => sections[activeIndex()])
    .provide("scrollToSection", scrollToSection)
    .mount('#app')
