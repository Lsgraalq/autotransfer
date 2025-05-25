

export default function Splitting () {
    gsap.registerPlugin(SplitText) 

    let split = SplitText.create(".text", {
        type: "lines"
    })

    gsap.from(split, {
        y: 100,
        autoAlpha:0,
        stagger: 0.05
    })
}

