
const { useEffect, useState, useContext } = React;

const ToggleThemeButton = styled.button`
background-color: blue;
width: 60px;
height: 30px;
outline: none;
border-radius: 30px;
border-color: ${props => props.theme.name == 'light' ? 'black': 'yellow'};
position: relative;
font-size: 20px;
margin-bottom: 20px;
`;

const CrackJokeButton = styled.button`
background-color: blue;
width: 200px;
height: 50px;
outline: none;
border-radius: 30px;
background-color: ${props=> props.theme.cardColor};
box-shadow: 2px 4px ${props => props.theme.cardShadow};
position: relative;
font-size: 20px;
margin-top: 20px;
margin-left: 100px;
color: ${props => props.theme.color};

&: hover {
    box-shadow: 3px 6px ${props => props.theme.cardShadow};
}
`;


const ToggleIcon = styled.span`
background-color:${props => props.theme.name === 'dark' ? 'black': 'white'};
width:30px;
height: 28px;
margin: 0 auto;
position: absolute;
border-radius: 30px;
border: 5px solid ${props => props.theme.name === 'dark' ? 'black': 'white'};
top:-4; 
left:-2;
text-align: center;
transform: ${props => props.theme.name ==='dark' ? "translateX(26px)" : "translateX(0px)"};
transition: all 1s cubic-bezier(.23,1,.32,1) 0ms;
`;


const RootContainer = styled.div`
position: relative
width:100%;
height: 100%;
background-color: ${props => props.theme.backgroundColor};
box-sizing: border-box;
`;


const Wrapper = styled.div`
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
max-width:500px;

.translateIt {
    transform: translate(26px);
}
`;

const JokeCardComponent = styled.div`
color: ${props => props.theme.color};
background-color: ${props => props.theme.cardColor};
max-width: 400px;
border: 1px solid ${props => props.theme.backgroundColor};
box-shadow: 3px 6px ${props => props.theme.cardShadow};
font-size: 30px;
padding: 12px;
font-family: Mali;
text-align: center;
`;

const themes = {
    light: {
        color: "YELLOW",
        backgroundColor: "YELLOW",
        cardColor: "#b39afd",
        cardShadow: "#888888",
        toggleButtonColor: "#b39afd",
        iconColor: '#888888',
        name: 'light'
    },
    dark: {
        color: "#888888" ,
        backgroundColor: "#888888",
        cardColor: "white",
        cardShadow: "#b39afd",
        toggleButtonColor: "#88888",
        iconColor: '#b39afd',
        name: 'dark'
    }
}


const ThemeProvider = window.styled.ThemeProvider;
function fetchJoke  () {
    return fetch("https://icanhazdadjoke.com/",{method: "GET" , headers: { Accept: "application/json"}})
    .then((response)=>{
       return response.json();
    })
    .then(({joke}) => joke)
    .catch((error)=>{
        return 'Sorry. I am out of jokes';
    })
}


function App () {
      const initialJokeState = {
          joke: '🤪 🕺 🤫 🤭 🤩 😂 😋 🧐 💩 💋',
          isCracking: false
      };

      const [jokeState, setJokeState] = useState(initialJokeState);
      const [isDark, toggleTheme] = useState(false);
     
      const handleToggle = () => {
          toggleTheme(!isDark);
      }

      const crackJoke = ()=> {
        setJokeState({isCracking: true, joke: 'Prepare for the worst. HAAAAHAAA🧟‍♂️...' });
        fetchJoke().then(joke=> {
            setJokeState({joke, isCracking: false});
        })
       }

     return(
    <ThemeProvider theme={themes[isDark ? 'dark': 'light']}>
        <RootContainer>
            <Wrapper>
             <ToggleThemeButton onClick={handleToggle}>
               <ToggleIcon>{isDark? '🌙': '🌞'}</ToggleIcon>
             </ToggleThemeButton>
             <JokeCardComponent>{jokeState.joke}</JokeCardComponent>
             <CrackJokeButton onClick={crackJoke}>
              {jokeState.isCracking ? 'Cracking...🧟‍♂': 'Crack joke 🧛🏼‍♀️'}
             </CrackJokeButton>
           </Wrapper>
       </RootContainer>
    </ThemeProvider>
      )
}


ReactDOM.render(
<App/>,
document.getElementById('root')
);