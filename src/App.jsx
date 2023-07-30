import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'

const users = [
    {
    user : 'juan',
    name : 'Juan Melgarejo',
    isFollowing : true
    },
    {
        user : 'pedro',
        name : 'Pedro Mesa',
        isFollowing : true
        
    },
    {
        user : 'marce',
        name : 'Marcelo Perez',
        isFollowing : false
        
    }
]    

export function App() {
    return(
        <section className='App'>
           {
            users.map(({user,name,isFollowing}) => (
                <TwitterFollowCard 
                    key={user}
                    user = {user} 
                    initialIsFollowing = {isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))
           }
        </section>
    )
}
