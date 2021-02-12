(this["webpackJsonpcover-story"]=this["webpackJsonpcover-story"]||[]).push([[0],{44:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),c=n.n(i),s=n(16),r=n.n(s),l=(n(44),n(45),n(33)),o=n(4),d=n(11),h=n(65),j=n(66),m=n(12);function b(){var t=Object(d.a)(["\n\tfont-family: 'Droid Serif', serif;\n\tfont-size: 1.1em;\n\n\t.navbar { \n\t\tpadding: 0.25rem 1rem 0.25rem 1rem;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\twidth: 100vw;\n\t}\n\ta, .navbar-nav, .navbar-light .nav-link {\n\t\tcolor: var(--light-accent-blue);\n\t\t&:hover { color: white; }\n\t}\n\t.navbar-brand {\n\t\tfont-size: 1.4em;\n\t\tz-index: 9999;\n\t\tcolor: var(--light-accent-blue) !important;\n\t\tcursor: pointer;\n\t\ttext-decoration: underline;\n\t\t&:hover { color: white; }\n\t}\n\t.navbar-light .navbar-toggler {\n\t\tpadding: 0.125em;\n\t}\n\t.navbar-nav {\n\t\tmargin-top: 0.25em;\n\t\tmargin-bottom: 0.25em;\n\t}\n\t.nav-item {\n\t\ttext-align: center;\n\t\ttransition: all .6s ease;\n\t\t&:hover { box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; }\n\t}\n\t.nav-link.active {\n\t\tcolor: unset !important;\n\t}\n"]);return b=function(){return t},t}var x=m.a.div(b());function p(){return Object(a.jsx)(x,{children:Object(a.jsxs)(h.a,{expand:"lg",style:{background:"var(--nav-gradient)",borderBottom:"1px solid var(--blue-magenta)",zIndex:4},children:[Object(a.jsx)(h.a.Brand,{href:"https://elizabethharkins.github.io/cover-story/#/",children:"Liz Harkins"}),Object(a.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(j.a,{className:"ml-auto",children:[Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(j.a.Link,{href:"https://www.linkedin.com/in/emharkins/",target:"_blank",children:"in"})}),Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(j.a.Link,{href:"https://twitter.com/_lizzith",target:"_blank",children:"chirp"})}),Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(j.a.Link,{href:"https://github.com/elizabethharkins",target:"_blank",children:"hub"})}),Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(j.a.Link,{href:"https://elizabethharkins.github.io/cover-story/#/about",children:"About"})}),Object(a.jsx)(j.a.Item,{children:Object(a.jsx)(j.a.Link,{href:"https://elizabethharkins.github.io/cover-story/#/thecollection",children:"The Collection"})})]})})]})})}var u=n(31),g=n(32),O=n(38),f=n(35),v=(n(53),function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={rangeValues:[0,25,50,75,100],currentRangeValue:0,storyValues:["Hi, my name is Liz -","Hi, Liz!","- and I'm a teacher-turned-developer who met code when I wanted to give my classroom community a modern upgrade.","I'd love to work for a great company in a frontend role, with a team that values learning, inclusion, and diversity -","- and where I can continue improving and contributing. Let's build better together!"],currentStoryValue:"Hi, my name is Liz -"},t.handleInputChange=function(e){t.setState({currentRangeValue:e.target.value,currentStoryValue:t.state.storyValues[e.target.value]});var n=document.getElementById("myStory"),a=n.value/n.max*100,i=document.querySelector("#range-value"),c=document.querySelector(".fill-area"),s="hue-rotate("+a+"deg)";i.textContent=n.value,i.style.filter=s,n.style.filter=s,c.style.left=a+"vw",c.style.width=100-a+"vw",c.style.filter=s},t}return Object(g.a)(n,[{key:"render",value:function(){var t=this.state,e=t.rangeValues,n=t.currentRangeValue,i=t.currentStoryValue;return Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)("div",{className:"effects-container",children:[Object(a.jsx)("div",{className:"fill-area"}),Object(a.jsxs)("main",{children:[Object(a.jsx)("p",{className:"content",children:Object(a.jsx)("span",{id:"output",children:[i]})}),Object(a.jsxs)("div",{className:"slidecontainer",children:[Object(a.jsx)("label",{id:"range-value",htmlFor:"range",children:e[n]}),Object(a.jsx)("input",{onChange:this.handleInputChange,type:"range",name:"range",min:0,max:4,defaultValue:0,className:"slider",id:"myStory",step:1,list:"tick-list"}),Object(a.jsxs)("datalist",{id:"tick-list",children:[Object(a.jsx)("option",{children:"0"}),Object(a.jsx)("option",{children:"25"}),Object(a.jsx)("option",{children:"50"}),Object(a.jsx)("option",{children:"75"}),Object(a.jsx)("option",{children:"100"})]})]})]})]})})}}]),n}(c.a.Component));function w(){var t=Object(d.a)(["\n\tmargin: 0 auto;\n"]);return w=function(){return t},t}var y=m.a.div(w()),k=function(){return Object(a.jsx)(y,{children:Object(a.jsx)(v,{})})},N=(n(54),function(){return Object(a.jsxs)("div",{className:"magazine",children:[Object(a.jsx)("div",{className:"title",children:"Hello"}),Object(a.jsxs)("div",{className:"content1",children:[Object(a.jsx)("h1",{children:"About Me"}),Object(a.jsx)("p",{children:"I am passionate about connecting people with solutions. What began as a dive into HTML and CSS to revitalize educational materials became a deep interest in building people-oriented software. I challenge myself to make functional tech that is appealing and playful, on time."})]}),Object(a.jsx)("div",{className:"content2",children:Object(a.jsx)("p",{children:"Happiness is ... GT Cinetype, baking, Art Deco, mint-chip gelato, traveling, art direction, Bowie, retro, record-collecting, JavaScripting"})}),Object(a.jsx)("div",{className:"quote","data-type":!0,"data-type-min":"100","data-type-max":"300","data-text":"A ship in harbor is safe - but that is not what ships are built for.",children:"A ship in harbor is safe - but that is not what ships are built for."}),Object(a.jsx)("div",{className:"sunimage"}),Object(a.jsx)("div",{className:"drawing"}),Object(a.jsx)("a",{href:"mailto:eliz@betsthewebdev.com?Subject=Hi, Liz!",target:"_top",className:"invite aboutemph",children:"Electronic mail me!"})]})});n(55);function z(){var t=Object(d.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-flow: column;\n\n\th1 {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tfont-family: 'Playfair Display', serif;\n\t\tfont-weight: 900;\n\t\tfont-size: 8em;\n\t\tline-height: 72px;\n\t\tmargin-bottom: 20px;\n\t\ttext-transform: uppercase;\n\t\twidth: 100%;\n\t}\n\t.subheading {\n\t\tborder-top: 10px solid var(--charcoal-grey);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: row wrap;\n\t\ttext-transform: uppercase;\n\t\twidth: 100%;\n\t\tpadding: 2em 0 0 0;\n\t}\n\t.tag {\n\t\tborder: 5px solid var(--charcoal-grey);\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: column wrap;\n\t\tpadding: 10px 15px 10px 15px;\n\t\twidth: 33%;\n\t}\n\t.tag span {\n\t\tfont-size: 1.1em;\n\t\tpadding: 5px;\n\t}\n\t.emph {\n\t\tborder-bottom: 2px solid var(--blue-magenta);\n\t\tborder-top: 2px solid var(--blue-magenta);\n\t\tfont-size: 1.3em;\n\t\tfont-style: italic;\n\t\tpadding: 11px;\n\t}\n\th2 {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex-flow: row wrap;\n\t\tfont-size: 4em;\n\t\ttransform: scaleY(1.8);\n\t\twidth: 60%;\n\t}\n\n\t@media (max-width: 81.250em) {\n\t\th1\t{\n\t\t\tfont-size: 7em;\n\t\t}\n\t\t.subheading\t{\n\t\t\tpadding: 2em 0 0 0;\n\t\t\twidth: 95%;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: 3.3em;\n\t\t\tpadding-left: 2%;\n\t\t}\n\t}\n\t@media (min-width: 56.250em) and (max-width: 68.750em) {\n\t\th1\t{\n\t\t\tfont-size: 5.5em;\n\t\t}\n\t\th2 {\n\t\t\tfont-size: 3.4em;\n\t\t\twidth: 66%;\n\t\t}\n\t}\n\t@media (min-width: 37.5em) and (max-width: 64em) {\n\t\th1\t{\n\t\t\tfont-size: 3.9em;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t.subheading\t{\n\t\t\tjustify-content: flex-start;\n\t\t\tflex-flow: column wrap;\n\t\t\tpadding: 12px 0 12px 0;\n\t\t}\n\t\t.tag  {\n\t\t\tmargin-bottom: 3%;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\th2\t{\n\t\t\tfont-size: 2.8em;\n\t\t\twidth: 90%;\n\t\t}\n\t}\n\t@media (max-width: 37.5em) {\n\t\th1\t{\n\t\t\tfont-size: 3.9em;\n\t\t\tmargin-bottom: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.subheading {\n\t\t\tpadding: 12px 0 12px 0;\n\t\t}\n\t\t.tag {\n\t\t\tmargin-bottom: 3%;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 2.5em;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\t@media (max-width: 30em) {\n\t\th1\t{\n\t\t\tfont-size: 2em;\n\t\t\tline-height: 42px;\n\t\t\tmargin-bottom: 3px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.subheading {\n\t\t\tpadding: 12px 0 12px 0;\n\t\t}\n\t\t.tag {\n\t\t\tpadding: 8px 15px 8px 15px;\n\t\t\twidth: 90%;\n\t\t}\n\n\t\t.tag span {\n\t\t\tfont-size: 1em;\n\t\t}\n\n\t\th2 {\n\t\t\tfont-size: 1.3em;\n\t\t\twidth: 100%;\n\t\t}\n\t}\n"]);return z=function(){return t},t}var S=m.a.div(z());function L(){return Object(a.jsxs)(S,{className:"header",children:[Object(a.jsx)("h1",{children:"The Collection"}),Object(a.jsxs)("div",{className:"subheading",children:[Object(a.jsxs)("div",{className:"tag",children:[Object(a.jsx)("span",{children:"classic"}),Object(a.jsx)("span",{className:"emph",children:"Bets"}),Object(a.jsx)("span",{children:"Styles"})]}),Object(a.jsx)("h2",{children:"Color. Line. Design."})]})]})}function I(){var t=Object(d.a)(["\n\tbackground: linear-gradient(72deg,var(--blue-magenta) -14%,rgba(0,0,0,0.2) 25%);\n\ttransition: background 6s ease-in;\n\tcolor: var(--dark-grey);\n\tfont-family: 'Droid Serif', serif;\n\tfont-size: 16px;\n\tmax-width: 80em;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 3fr;\n\tbox-shadow:var(--collection-gw-box-shadow);\n\n\t@media (min-width: 85em) {\n\t\tgrid-template-rows: 1.2fr 3.5fr;\n\t\tmargin: 140px auto 0 auto;\n\t}\n\t@media (max-width: 85em) {\n\t\tmargin: 140px auto 0 auto;\n\t}\n\t@media (min-width: 37.5em) and (max-width: 64em) {\n\t\tgrid-template-rows: 0.9fr 3.5fr;\n\t}\n\t@media (max-width: 37.438em) {\n\t\tgrid-template-rows: 0.5fr 3fr;\n\t}\n\t@media (max-width: 30em) {\n\t\tgrid-template-rows: 0.33fr 3fr;\n\t}\n"]);return I=function(){return t},t}var C=m.a.div(I()),H=function(){return Object(a.jsxs)(C,{children:[Object(a.jsx)(L,{}),Object(a.jsx)("div",{className:"collection-content",children:Object(a.jsxs)("div",{className:"columns",children:[Object(a.jsxs)("div",{className:"column one",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl1",children:"Build, Build, Build!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl4",children:"I love ..."})})]}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"JavaScript"}),Object(a.jsx)("li",{children:"CSS3"}),Object(a.jsx)("li",{children:"HTML5"}),Object(a.jsx)("li",{children:"React"}),Object(a.jsx)("li",{children:"Node"}),Object(a.jsx)("li",{children:"Express"}),Object(a.jsx)("li",{children:"Postgres"}),Object(a.jsx)("li",{children:"Flexbox"}),Object(a.jsx)("li",{children:"Grid"}),Object(a.jsx)("li",{children:"Typography"}),Object(a.jsx)("li",{children:"Art Direction"}),Object(a.jsx)("li",{children:"Solutions"}),Object(a.jsx)("li",{children:"Problem-Solving"}),Object(a.jsx)("li",{children:"Teamwork"}),Object(a.jsx)("li",{children:"Learning"}),Object(a.jsx)("li",{children:"Sharing"}),Object(a.jsx)("li",{children:"Mentoring"}),Object(a.jsx)("li",{children:"People"}),Object(a.jsx)("li",{children:"My Team"}),Object(a.jsx)("li",{children:"Your Team"}),Object(a.jsx)("li",{children:"Our Team"}),Object(a.jsx)("li",{children:"A Job Well Done"})]})]}),Object(a.jsxs)("div",{className:"column two accent-column",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl3",children:"Coming Soon!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl4",children:"JavaScript"})})]}),Object(a.jsxs)("p",{children:[" Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.",Object(a.jsxs)("span",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Live"})," - ",Object(a.jsx)("a",{href:"/",children:"GitHub"})]})]})]}),Object(a.jsxs)("div",{className:"column three accent-column",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl1",children:"Your Story Here!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl2",children:"Fortran"})})]}),Object(a.jsxs)("p",{children:["Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.",Object(a.jsxs)("span",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Live"})," - ",Object(a.jsx)("a",{href:"/",children:"GitHub"})]})]}),Object(a.jsxs)("figure",{className:"figure",children:[Object(a.jsx)("img",{className:"media",src:"",alt:""}),Object(a.jsx)("figcaption",{className:"figcaption",children:"The way you view it is the way you do it."})]})]}),Object(a.jsxs)("div",{className:"column four accent-column",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl3",children:"Your Story Here!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl4",children:"Perl"})})]}),Object(a.jsxs)("p",{children:["Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.",Object(a.jsxs)("span",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Live"})," - ",Object(a.jsx)("a",{href:"/",children:"GitHub"})]})]})]}),Object(a.jsxs)("div",{className:"column five accent-column",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl1",children:"Coming Soon!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl4",children:"JavaScript"})})]}),Object(a.jsxs)("p",{children:["Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.",Object(a.jsxs)("span",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Live"})," - ",Object(a.jsx)("a",{href:"/",children:"GitHub"})]})]})]}),Object(a.jsxs)("div",{className:"column seven accent-column",children:[Object(a.jsxs)("div",{className:"head",children:[Object(a.jsx)("span",{className:"headline hl1",children:"Coming Soon!"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"headline hl4",children:"React"})})]}),Object(a.jsxs)("p",{children:["Play riveting piece on synthesizer keyboard. Rub whiskers on bare skin act innocent scratch the postman wake up lick paw wake up owner meow meow, and loves cheeseburgers, yet spread kitty litter all over house. Sun bathe check cat door for ambush 10 times before coming in.",Object(a.jsxs)("span",{className:"links",children:[Object(a.jsx)("a",{href:"/",children:"Live"})," - ",Object(a.jsx)("a",{href:"/",children:"GitHub"})]})]})]}),Object(a.jsx)("div",{className:"column six",children:Object(a.jsx)("span",{className:"citation",children:"Confident, calm, driven, intuitive dev with an eye for UX/UI and a heart for people"})}),Object(a.jsx)("div",{className:"image"}),Object(a.jsx)("div",{className:"speech-bubble",children:"Let's chat!"})]})})]})};var T=function(){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(l.a,{basename:"/cover-story",children:[Object(a.jsx)(p,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(a.jsx)(o.a,{path:"/about",component:N}),Object(a.jsx)(o.a,{path:"/thecollection",component:H})]})]})})};r.a.render(Object(a.jsx)(T,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6232d665.chunk.js.map