import { surpriseMePrompts } from '../constants'

export function getRandomPromt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    // console.log(randomIndex)
    const randomPrompt = surpriseMePrompts[randomIndex]
    // console.log(randomPrompt)
    if(randomPrompt === prompt) return getRandomPromt(prompt)
    
    return randomPrompt
}