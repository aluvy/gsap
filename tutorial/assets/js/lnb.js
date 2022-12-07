window.addEventListener("load", ()=>{
    const lnbHTML = `
        <section>
            <h2>tween</h2>
            <ul>
                <li><a href="Dcoding">tween 기초</a></li>
            </ul>
        </section>
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
        <section>
            <h2>Flip</h2>
            <ul>
                <li><a href="#Flip">Flip</a></li>
                <li><a href="#Flip-scale">Flip-scale</a></li>
                <li><a href="#Flip-fit">Flip-fit</a></li>
                <li><a href="#Flip-absolute">Flip-absolute</a></li>
                <li><a href="#Flip-nested">Flip-nested</a></li>
                <li><a href="#Flip-target">Flip-targets</a></li>
                <li><a href="#Flip-id">Flip-id</a></li>
                <li><a href="#Flip-onEnter">Flip onEnter onLeave</a></li>
                <li><a href="#Flip-props">Flip props</a></li>
                <li><a href="#Flip-extra">Flip Extra features</a></li>
            </ul>
        </section>
        <section>
            <h2>Observer</h2>
            <ul>
                <li><a href="#Observer">Observer</a></li>
            </ul>
        </section>
    `;
    let lnb = document.createElement("nav");
    lnb.innerHTML = lnbHTML;

    document.querySelector("body").prepend(lnb);
})