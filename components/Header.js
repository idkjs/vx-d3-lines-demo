import Link from 'next/link'

export default ({ pathname }) => (
    <header>
        <Link prefetch href='/'>
            <a className={pathname === '/' && 'is-active'}>SingleLine</a>
        </Link>

        <Link prefetch href='/multiline'>
            <a className={pathname === '/multiline' && 'is-active'}>MultiLine</a>
        </Link>
        <Link prefetch href='/grid'>
            <a className={pathname === '/grid' && 'is-active'}>MultiLineGrid</a>
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