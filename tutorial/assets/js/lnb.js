window.addEventListener("load", ()=>{
    const lnbHTML = `
        <section>
            <h2>Basic</h2>
            <ul>
                <li class="active"><a href="#gsap-to">gsap.to()</a></li>
                <li><a href="#gsap-from">gsap.from(), fromTo(), set()</a></li>
                <li><a href="#gsap-timeline-delay">timeline(delay)</a></li>
                <li><a href="#gsap-timeline">timeline</a></li>
            </ul>
        </section>
        <section>
            <h2>ScrollTrigger</h2>
            <ul>
                <li><a href="#scrolltrigger">scrolltrigger</a></li>
                <li><a href="#scrolltrigger-toggleactions">toggleActions</a></li>
                <li><a href="#scrolltrigger-scrub">Scrub</a></li>
                <li><a href="#scrolltrigger-pinning">Pinning</a></li>
                <li><a href="#scrolltrigger-spinning">Spinning</a></li>
            </ul>
        </section>
    `;
    let lnb = document.createElement("nav");
    lnb.innerHTML = lnbHTML;

    document.querySelector("body").prepend(lnb);
})