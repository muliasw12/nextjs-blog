import Link from 'next/link'

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
                        <Link href="/" class="scroll-link" passHref>Home</Link>
                    </li>
                    <li>
                        <Link href="/explore" class="scroll-link" passHref>Explore</Link>
                    </li>
                    <li>
                        <Link href="/friends" class="scroll-link" passHref>My Friends</Link>
                    </li>
                    <li>
                        <Link href="/profile" class="scroll-link" passHref>Profile</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}
