import { useState } from "react"

export function TwitterFollowCard({children,user,initialIsFollowing}) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)
    const text = isFollowing ? "Siguiendo" : "Seguir"
    
    const className = isFollowing 
    ? "tw-followCard-button is-following" 
    : "tw-followCard-button"
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"
                 src={`https://unavatar.io/${user}`}
                 alt="Este es el avatar de un usuario" 
                 />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{`@${user}`}</span>
                </div>
            </header>
            <aside>
                <button className={className} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}