
function loaderAnimation() {
    const tl = gsap.timeline();
    tl.from(".loader-content h2,h1", {
        y: 150,
        stagger: 0.1,
        duration: 0.5,
    })
    tl.from(".waiting", {
        x: -700,
        duration: 0.3,
    })
    tl.from(".timer h2", {
        opacity: 0,
        onStart: () => {
            let time = document.querySelector(".time");
            let countTime = 0;
            // let fontIndex = 0;
            const interval = setInterval(() => {
                if (countTime <= 100) {
                    time.innerHTML = countTime;
                    countTime++;
                } else {
                    clearInterval(interval);
                }
            }, 30);
        },
        duration: 0.3
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.6,
        delay: 4.0
    });
    tl.from("#page1", {
        y: 1600,
        duration: 0.5,
        opacity: 0,
        delay: 0.2,
        ease: Power3
    });
    tl.to("#loader", {
        display: "none",
    });
    gsap.from("nav",{
        y:-220,
        stagger:0.1,
        duration:0.8,
        delay:8.5
    })
    gsap.from(".heroContent h2", {
        y: 150,
        stagger: 0.3,
        duration: 0.8,
        delay: 8.5,
    })


};

function cursorAnimation() {
    document.addEventListener("mousemove", (e) => {
        gsap.to("#crsr", {
            left: e.x,
            top: e.y
        })
    });

    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet("#rightNav h4", {
    });
};

function sheryJS() {
    Shery.imageEffect(".img1-box", {
        style: 6,
        // debug: true,
        gooey: true,
        config: {
            noiseDetail: { value: 7.44, range: [0, 100] },
            distortionAmount: { value: 2.98, range: [0, 10] },
            scale: { value: 36.36, range: [0, 100] },
            speed: { value: 0.61, range: [0, 1] },
            zindex: { value: "99", range: [-9999999, 9999999] },
            aspect: { value: 0.9840426539534833 },
            ignoreShapeAspect: { value: true },
            shapePosition: { value: { x: 0, y: 0 } },
            shapeScale: { value: { x: 0.5, y: 0.5 } },
            shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
            shapeRadius: { value: 0, range: [0, 2] },
            currentScroll: { value: 0 },
            scrollLerp: { value: 0.07 },
            gooey: { value: true },
            infiniteGooey: { value: true },
            growSize: { value: 4, range: [1, 15] },
            durationOut: { value: 1, range: [0.1, 5] },
            durationIn: { value: 1.5, range: [0.1, 5] },
            displaceAmount: { value: 0.5 },
            masker: { value: true },
            maskVal: { value: 1.39, range: [1, 5] },
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: true },
            onMouse: { value: 0 },
            noise_speed: { value: 1.07, range: [0, 10] },
            metaball: { value: 0.31, range: [0, 2] },
            discard_threshold: { value: 0.5, range: [0, 1] },
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.49, range: [0, 2] },
            noise_scale: { value: 4.58, range: [0, 100] },
        },
    });
}

sheryJS();
cursorAnimation();
loaderAnimation();