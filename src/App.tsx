import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const work = [
  { id:"01", title:"MONUMENT", type:"Architecture / Digital Experience", image:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88", year:"2026", description:"A restrained digital experience for an architecture-led brand, built around scale, rhythm and materiality.", services:"Art Direction / UX / Development" },
  { id:"02", title:"NOIRÉ", type:"Commerce / Art Direction", image:"https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=2200&q=88", year:"2026", description:"A cinematic commerce direction where product, typography and movement share the same visual language.", services:"Ecommerce / Art Direction / Motion" },
  { id:"03", title:"ATELIER 09", type:"Hospitality / Interactive Identity", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88", year:"2026", description:"An editorial hospitality interface designed to make atmosphere feel tangible before the first visit.", services:"Identity / Experience / Development" },
];

const capabilities = [
  ["01","Digital Direction","Positioning, art direction and digital strategy."],
  ["02","Experience Design","Interfaces, systems and interactions with intention."],
  ["03","Web Development","Fast, expressive websites engineered to perform."],
  ["04","Motion & 3D","Scroll narratives, motion systems and selective 3D."],
];

const stack = ["STRATEGY","ART DIRECTION","UX / UI","REACT","TYPESCRIPT","MOTION","WEBGL","CMS","PERFORMANCE"];

function Arrow({small=false}:{small?:boolean}) {
  return <span className={small?"arrow small":"arrow"}>↗</span>;
}

function Reveal({children,className="",delay=0}:{children:React.ReactNode;className?:string;delay?:number}) {
  return <motion.div className={className} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.8,ease:[.16,1,.3,1],delay}}>{children}</motion.div>;
}

function Magnetic({children}:{children:React.ReactNode}) {
  const x=useMotionValue(0), y=useMotionValue(0);
  const sx=useSpring(x,{stiffness:300,damping:20}), sy=useSpring(y,{stiffness:300,damping:20});
  return <motion.div style={{x:sx,y:sy}} onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.16);y.set((e.clientY-r.top-r.height/2)*.16)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>
}

function Header({onMenu,menu}:{onMenu:()=>void;menu:boolean}) {
  return <header className="header">
    <a className="brand" href="#top" aria-label="Parallel home"><span className="brand-mark">P</span><span className="brand-name">PARALLEL</span><span className="brand-reg">®</span></a>
    <div className="header-center"><span>INDEPENDENT DIGITAL STUDIO</span><i></i><span>LAHORE / WORLDWIDE</span></div>
    <nav className="desktop-nav"><a href="#work"><span>01</span>WORK</a><a href="#studio"><span>02</span>STUDIO</a><a href="#contact"><span>03</span>CONTACT</a></nav>
    <button className="menu-button" onClick={onMenu} aria-expanded={menu} aria-label={menu?"Close menu":"Open menu"}><span>{menu?"CLOSE":"MENU"}</span><i></i><i></i></button>
  </header>
}

function Hero() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});
  const scale=useTransform(scrollYProgress,[0,.8],[1,1.16]);
  const y=useTransform(scrollYProgress,[0,1],[0,-150]);
  const leftX=useTransform(scrollYProgress,[0,.9],[0,-120]);
  const rightX=useTransform(scrollYProgress,[0,.9],[0,120]);
  const lineY=useTransform(scrollYProgress,[0,1],[0,160]);
  return <section id="top" ref={ref} className="hero">
    <div className="hero-grid"></div>
    <motion.div className="hero-line line-left" style={{y:lineY}} />
    <motion.div className="hero-line line-right" style={{y:lineY}} />
    <div className="hero-meta hero-meta-top"><span>PARALLEL / 001</span><span>LAHORE — WORLDWIDE</span></div>
    <motion.div className="hero-core" style={{scale,y}}>
      <div className="hero-kicker">INDEPENDENT DIGITAL STUDIO</div>
      <div className="hero-word" aria-label="PARALLEL"><motion.span style={{x:leftX}}>PARA</motion.span><motion.span style={{x:rightX}}>LLEL</motion.span></div>
      <div className="hero-sub"><span>DIGITAL EXPERIENCES</span><strong>BUILT TO MOVE.</strong></div>
    </motion.div>
    <div className="hero-bottom">
      <div className="hero-scroll"><span className="scroll-line"></span><span>SCROLL TO EXPLORE</span></div>
      <div className="hero-index">01 / 09</div>
    </div>
  </section>
}

function Manifesto() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const x1=useTransform(scrollYProgress,[.05,.55],[120,-60]);
  const x2=useTransform(scrollYProgress,[.2,.8],[-100,70]);
  return <section ref={ref} className="manifesto section-light">
    <div className="section-label dark-label"><span>02</span><span>THE POINT OF VIEW</span></div>
    <div className="manifesto-copy">
      <motion.h2 style={{x:x1}}>WE DON'T</motion.h2>
      <motion.h2 style={{x:x2}}>BUILD WEBSITES.</motion.h2>
      <motion.div className="manifesto-answer"><span>WE BUILD</span><strong>EXPERIENCES.</strong></motion.div>
    </div>
    <div className="manifesto-foot"><span>DESIGN × TECHNOLOGY × MOTION</span><span>SCROLL / 02</span></div>
  </section>
}

function SplitWorlds() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const left=useTransform(scrollYProgress,[0,.5,1],[-5,-28,0]);
  const right=useTransform(scrollYProgress,[0,.5,1],[5,28,0]);
  const line=useTransform(scrollYProgress,[0,.5,1],[0,100,0]);
  return <section ref={ref} className="worlds">
    <motion.div className="world world-design" style={{x:left}}>
      <div className="world-image image-design"></div>
      <div className="world-content"><span className="eyebrow">THE LEFT SIDE</span><h3>DESIGN</h3><p>Art direction, identity and interfaces shaped around a point of view.</p></div>
    </motion.div>
    <motion.div className="world world-tech" style={{x:right}}>
      <div className="world-image image-tech"><div className="code-lines">01 / EXPERIENCE<br/>02 / INTERACTION<br/>03 / SYSTEM<br/>04 / MOTION</div></div>
      <div className="world-content"><span className="eyebrow">THE RIGHT SIDE</span><h3>TECHNOLOGY</h3><p>Modern engineering that turns visual intent into a living interface.</p></div>
    </motion.div>
    <motion.div className="world-divider" style={{scaleY:useTransform(line,[0,100],[0,1])}}></motion.div>
    <div className="worlds-center">DESIGN <span>×</span> TECHNOLOGY</div>
  </section>
}

function Work({onOpen}:{onOpen:(item:typeof work[number])=>void}) {
  const ref=useRef<HTMLDivElement>(null);
  const trackRef=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const [travel,setTravel]=useState(0);
  const [viewportHeight,setViewportHeight]=useState(0);

  useLayoutEffect(()=>{
    const measure=()=>{
      const track=trackRef.current;
      if(!track) return;
      const nextTravel=Math.max(0,track.scrollWidth-window.innerWidth);
      setTravel(nextTravel);
      setViewportHeight(window.innerHeight);
    };
    measure();
    const observer=new ResizeObserver(measure);
    if(trackRef.current) observer.observe(trackRef.current);
    window.addEventListener("resize",measure);
    return()=>{
      observer.disconnect();
      window.removeEventListener("resize",measure);
    };
  },[]);

  const x=useTransform(scrollYProgress,[0,1],[0,-travel]);

  return <section
    id="work"
    ref={ref}
    className="work-wrap"
    style={{height:travel>0 ? travel+viewportHeight : undefined}}
  >
    <div className="work-sticky">
      <div className="section-label work-label"><span>03</span><span>SELECTED WORK</span></div>
      <motion.div ref={trackRef} className="work-track" style={{x}}>
        {work.map((item)=><article className="work-card" key={item.id}>
          <button className="work-image-wrap" onClick={()=>onOpen(item)} aria-label={`Open ${item.title} case study`}>
            <motion.img src={item.image} alt={item.title} loading="lazy" decoding="async" whileHover={{scale:1.035}} transition={{duration:1}} />
            <div className="image-noise"></div>
            <div className="work-overlay"><span>{item.id}</span><span>OPEN CASE <Arrow small/></span></div>
          </button>
          <div className="work-info">
            <div><span className="project-no">{item.id}</span><h3>{item.title}</h3><p>{item.type}</p></div>
            <div className="project-side"><span>{item.year}</span><button onClick={()=>onOpen(item)} aria-label={`Open ${item.title} case study`}>VIEW PROJECT <Arrow small/></button></div>
          </div>
        </article>)}
      </motion.div>
      <div className="work-progress" aria-hidden="true"><motion.span style={{scaleX:useTransform(scrollYProgress,[0,1],[0,1])}} /></div>
    </div>
  </section>
}

function Capabilities() {
  return <section className="capabilities section-light" id="studio">
    <div className="section-label dark-label"><span>04</span><span>WHAT WE DO</span></div>
    <div className="cap-head"><h2>FROM IDEA<br/><em>TO IMPACT.</em></h2><p>Small studio. Big digital ambition. We combine creative direction and technical execution under one roof.</p></div>
    <div className="cap-list">{capabilities.map(([n,t,d],i)=><Reveal key={n} delay={i*.04}><div className="cap-row"><span>{n}</span><h3>{t}</h3><p>{d}</p><Arrow/></div></Reveal>)}</div>
  </section>
}

function Stack() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const x1=useTransform(scrollYProgress,[0,1],["8%","-24%"]);
  const x2=useTransform(scrollYProgress,[0,1],["-20%","10%"]);
  return <section ref={ref} className="stack">
    <div className="section-label"><span>05</span><span>THE STACK</span></div>
    <div className="stack-intro"><span>BUILT BETWEEN</span><strong>DESIGN</strong><span>AND</span><strong>CODE.</strong></div>
    <div className="marquee-row"><motion.div style={{x:x1}}>{stack.slice(0,5).map(s=><span key={s}>{s}<i>×</i></span>)}</motion.div></div>
    <div className="marquee-row reverse"><motion.div style={{x:x2}}>{stack.slice(4).map(s=><span key={s}>{s}<i>×</i></span>)}</motion.div></div>
    <div className="stack-note">SELECTIVE TECHNOLOGY. NEVER TECHNOLOGY FOR ITS OWN SAKE.</div>
  </section>
}

function Process() {
  const steps=[["01","THINK","Find the signal. Define the idea."],["02","SHAPE","Turn strategy into a visual language."],["03","BUILD","Engineer the system behind the feeling."],["04","MOVE","Add motion where it creates meaning."],["05","RELEASE","Launch something people remember."]];
  return <section className="process">
    <div className="section-label"><span>06</span><span>THE PROCESS</span></div>
    <div className="process-head"><h2>MAKE IT<br/><em>MOVE.</em></h2><p>Our process stays lean so the work can stay ambitious.</p></div>
    <div className="process-list">{steps.map(([n,t,d],i)=><Reveal key={n} delay={i*.03}><div className="process-row"><span>{n}</span><h3>{t}</h3><p>{d}</p><span className="process-arrow">↗</span></div></Reveal>)}</div>
  </section>
}

function Statement() {
  const ref=useRef<HTMLDivElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});
  const rotate=useTransform(scrollYProgress,[0,1],[-2,2]);
  return <section ref={ref} className="statement section-light">
    <motion.div className="statement-mark" style={{rotate}}>P</motion.div>
    <div className="section-label dark-label"><span>07</span><span>STUDIO NOTE</span></div>
    <div className="statement-copy"><span>WE BELIEVE</span><h2>THE BEST<br/><em>DIGITAL WORK</em><br/>FEELS ALIVE.</h2></div>
    <div className="statement-foot"><span>NOT MORE. JUST BETTER.</span><span>PARALLEL / 2026</span></div>
  </section>
}

function Contact() {
  const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
  const [form,setForm]=useState({name:"",email:"",company:"",project:"",budget:"",message:"",website:""});
  const update=(key:keyof typeof form)=>(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>)=>setForm(v=>({...v,[key]:e.target.value}));

  const submit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(status==="sending") return;
    setStatus("sending");
    try{
      const response=await fetch("/api/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
      });
      if(!response.ok) throw new Error("Contact request failed");
      setStatus("success");
    }catch{
      setStatus("error");
    }
  };

  return <section id="contact" className="contact">
    <div className="section-label"><span>08</span><span>START SOMETHING</span></div>
    <div className="contact-lines"><span></span><span></span></div>
    <div className="contact-main">
      <div className="contact-intro">
        <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
        <h2>LET'S MAKE<br/><em>SOMETHING MOVE.</em></h2>
        <p>Tell us what you're building. Give us the signal. We'll take it from there.</p>
        <div className="contact-meta"><span>LAHORE / PAKISTAN</span><span>WORKING WORLDWIDE</span><a href="mailto:hello@parallel.studio">HELLO@PARALLEL.STUDIO</a></div>
      </div>
      <div className="contact-form-wrap">
        <div className="contact-form-head"><div><span>PROJECT INQUIRY</span><strong>08 — 2026</strong></div><div><span>EST. RESPONSE</span><strong>48 HOURS</strong></div></div>
        {status==="success" ? <div className="form-success" role="status">
          <span className="eyebrow">MESSAGE SENT</span>
          <h3>THANK YOU.<br/><em>WE'LL TAKE IT FROM HERE.</em></h3>
          <p>Your project inquiry has reached PARALLEL. We'll review the brief and get back to you.</p>
          <button onClick={()=>{setStatus("idle");setForm({name:"",email:"",company:"",project:"",budget:"",message:"",website:""})}}>SEND ANOTHER <Arrow small/></button>
        </div> : <form className="contact-form" onSubmit={submit}>
          <input className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={update("website")} />
          <div className="form-row form-row-double">
            <label><span>01 / NAME</span><input required value={form.name} onChange={update("name")} autoComplete="name" /></label>
            <label><span>02 / EMAIL</span><input required type="email" value={form.email} onChange={update("email")} autoComplete="email" /></label>
          </div>
          <div className="form-row form-row-double">
            <label><span>03 / COMPANY <i>OPTIONAL</i></span><input value={form.company} onChange={update("company")} autoComplete="organization" /></label>
            <label><span>04 / PROJECT TYPE</span><select required value={form.project} onChange={update("project")}><option value="" disabled>Select one</option><option>Website / Digital Experience</option><option>Ecommerce</option><option>Brand / Art Direction</option><option>Web App / Product</option><option>Something Else</option></select></label>
          </div>
          <div className="form-row">
            <label><span>05 / BUDGET <i>OPTIONAL</i></span><select value={form.budget} onChange={update("budget")}><option value="">Prefer not to say</option><option>Under $2,000</option><option>$2,000 — $5,000</option><option>$5,000 — $10,000</option><option>$10,000+</option></select></label>
          </div>
          <div className="form-row">
            <label><span>06 / TELL US ABOUT IT</span><textarea required rows={4} value={form.message} onChange={update("message")} /></label>
          </div>
          {status==="error" && <div className="form-error" role="alert">MESSAGE COULDN'T BE SENT. EMAIL <a href="mailto:hello@parallel.studio">HELLO@PARALLEL.STUDIO</a> DIRECTLY.</div>}
          <div className="form-submit-row">
            <span>PRIVATE BY DEFAULT / USED ONLY TO RESPOND</span>
            <Magnetic><button className="form-submit" type="submit" disabled={status==="sending"}>{status==="sending" ? "SENDING…" : "SEND INQUIRY"} <Arrow/></button></Magnetic>
          </div>
        </form>}
      </div>
    </div>
    <div className="contact-foot"><span>08 / CONTACT</span><span>PARALLEL / 2026</span></div>
  </section>
}

function Footer() {
  return <footer><div className="footer-top"><a className="footer-brand" href="#top">PARALLEL<span>®</span></a><div><span className="eyebrow">DIGITAL EXPERIENCE STUDIO</span><p>Websites, interfaces and digital experiences built around design, technology and motion.</p></div></div><div className="footer-bottom"><span>© 2026 PARALLEL STUDIO</span><div><a href="#work">WORK</a><a href="#studio">STUDIO</a><a href="#contact">CONTACT</a></div><a href="#top">BACK TO TOP ↑</a></div></footer>
}

function ProjectModal({item,onClose}:{item:typeof work[number]|null;onClose:()=>void}) {
  useEffect(()=>{
    if(!item) return;
    const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape") onClose()};
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[item,onClose]);
  useEffect(()=>{document.body.classList.toggle("modal-open",!!item);return()=>document.body.classList.remove("modal-open")},[item]);
  return <AnimatePresence>
    {item&&<motion.div className="project-modal" role="dialog" aria-modal="true" aria-label={item.title} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
      <motion.div className="project-modal-panel" initial={{y:50,scale:.985}} animate={{y:0,scale:1}} exit={{y:30,scale:.99}} transition={{duration:.55,ease:[.16,1,.3,1]}} onClick={e=>e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>CLOSE ×</button>
        <div className="project-modal-image"><img src={item.image} alt="" /></div>
        <div className="project-modal-content">
          <div><span className="eyebrow">{item.id} / {item.type}</span><h2>{item.title}</h2></div>
          <div className="project-modal-copy"><p>{item.description}</p><span>{item.services}</span><a href="#contact" onClick={onClose}>DISCUSS A SIMILAR PROJECT <Arrow small/></a></div>
        </div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}

function App(){
  const [menu,setMenu]=useState(false);
  const [project,setProject]=useState<typeof work[number]|null>(null);
  useEffect(()=>{document.body.classList.toggle("menu-open",menu);return()=>document.body.classList.remove("menu-open")},[menu]);
  return <div className="site"><Header onMenu={()=>setMenu(!menu)} menu={menu}/>{menu&&<div className="mobile-menu"><button className="mobile-menu-close" onClick={()=>setMenu(false)}>CLOSE ×</button><a href="#work" onClick={()=>setMenu(false)}>WORK <Arrow/></a><a href="#studio" onClick={()=>setMenu(false)}>STUDIO <Arrow/></a><a href="#contact" onClick={()=>setMenu(false)}>CONTACT <Arrow/></a></div>}
    <main><Hero/><Manifesto/><SplitWorlds/><Work onOpen={setProject}/><Capabilities/><Stack/><Process/><Statement/><Contact/></main><Footer/><ProjectModal item={project} onClose={()=>setProject(null)}/>
  </div>
}
export default App;
