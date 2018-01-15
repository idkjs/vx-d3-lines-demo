import App from '../components/App'
import Header from '../components/Header'
import AppleContainer from '../components/AppleContainer'

export default (props) => (
    <App>
        <Header pathname={props.url.pathname} />
        <AppleContainer />
    </App>
)