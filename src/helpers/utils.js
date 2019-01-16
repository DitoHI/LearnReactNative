import {
    Dimensions,
} from 'react-native';

const androidSize = () => {
    const windowWidth = Dimensions.get('window').width;
    if (windowWidth <= 384) {
        return 'small'; // less than 4.7 inch
    } else if (windowWidth >= 411) {
        return 'large'; // more than 5.7 inch
    }
    return 'medium'; // between 4.7 inch and 5.7 inch
};

export default androidSize;