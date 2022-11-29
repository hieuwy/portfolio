import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"



export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Nicholas",
    lastName: "Do",
    initials: "nd", 
    position: "a Full-Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by creativity'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "🏫",
            text: "Full-Stack Web Developer @ University of Texas at Austin"
        },
        {
            emoji: "📧",
            text: "nicholas.do1998@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/hieuwy",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/nhdo/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Hello! I'm Nicholas. I'm a full-stack web developer. I studied Nursing at University of Texas Cizik School of Nursing, but did a career change and received a certification as a full-stack web developer from University of Texas at Austin. I enjoy playing video games, developing relationships with people (old and new), and trying new foods. I look forward to dominating as a full-stack developer, learning new things, and creating useful applications!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css', 'figma', 'mySQL', 'MERN', 'node.js', 'photoshop', 'illustrator'],
            exposedTo: ['PWAs', 'python', 'SCSS']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'traveling',
            emoji: '🚀'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'concerts',
            emoji: '🎸'
        },
        {
            label: 'eating',
            emoji: '🍔'
        },
        {
            label: 'photography',
            emoji: '📷'
        },


    // Portfolio Links to Deployed Applications and Source Code    
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://hieuwy.github.io/project-1/", 
            source: "https://github.com/hieuwy/project-1", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://peace-of-mind-app.herokuapp.com",
            source: "https://github.com/hieuwy/Project-2-Peace-of-Mind",
            image: mock2
        },
        {
            title: "Project 3",
            live: "",
            source: "",
            image: mock3
        },
        {
            title: "Project 4",
            live: "",
            source: "",
            image: mock4
        },
    ]
}