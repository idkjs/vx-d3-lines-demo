import AppleChart from './AppleChart';
import React from 'react';
import { withScreenSize } from '@vx/responsive';
import { LinearGradient } from '@vx/gradient';

class AppleContainer extends React.Component {
    render() {
        const { screenWidth, screenHeight } = this.props;
        return (
            <div>
                <AppleChart
                    width={screenWidth}
                    height={screenHeight}
                    margin={{
                        top: 20,
                        left: 60,
                        right: 40,
                        bottom: 60,
                    }} />
            </div>
        )
    }
}

export default withScreenSize(AppleContainer);