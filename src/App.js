import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>;
    return (
        <ChatEngine 
            height="100vh"
            projectID="078364fc-1f58-46c6-8255-055855ec8d2e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
             
        />
    )
}
export default App;