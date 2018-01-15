import Link from 'next/link'

export default ({ pathname }) => (
    <header>
        <Link prefetch href='/'>
            <a className={pathname === '/' && 'is-active'}>Medium</a>
        </Link>

        <Link prefetch href='/multiline'>
            <a className={pathname === '/multiline' && 'is-active'}>Multiline</a>
        </Link>
        <Link prefetch href='/grid'>
            <a className={pathname === '/grid' && 'is-active'}>MultiGrid</a>
        </Link>
        <Link prefetch href='/apple'>
            <a className={pathname === '/apple' && 'is-active'}>AppleChart</a>
        </Link>

        <style jsx>{`
      header {
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
    </header>
)