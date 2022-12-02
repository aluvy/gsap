window.addEventListener("load", ()=>{
    const lnbHTML = `
        <ul>
            <li class="active"><a href="#gsap-to">gsap.to()</a></li>
            <li><a href="#gsap-from">gsap.from(), fromTo(), set()</a></li>
            <li><a href="#gsap-timeline-delay">timeline(delay)</a></li>
            <li><a href="#gsap-timeline">timeline</a></li>
        </ul>
        <ul>
            <li><a href="#scrolltrigger">scrolltrigger</a></li>
            <li><a href="#scrolltrigger-toggleactions">toggleActions</a></li>
        </ul>
    `;
    let lnb = document.createElement("nav");
    lnb.innerHTML = lnbHTML;

    document.querySelector("body").prepend(lnb);
})