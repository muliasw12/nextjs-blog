

export const Header = () => {
    return (
        <header>
            <nav id="nav">
            <div class="nav-center">
                <button class="nav-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="links-container">
                <ul class="links">
                    <li>
                        <a href="/" class="scroll-link" passHref>Home</a>
                    </li>
                    <li>
                        <a href="/explore" class="scroll-link" passHref>Explore</a>
                    </li>
                    <li>
                        <a href="/friends" class="scroll-link" passHref>My Friends</a>
                    </li>
                    <li>
                        <a href="/profile" class="scroll-link" passHref>Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}
