import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DeleteButton = () => {
  return (
    <View>
        <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24">
            <Path 
              d="M13.5,11.7928932 L16.1464466,9.14644661 C16.3417088,8.95118446 16.6582912,8.95118446 16.8535534,9.14644661 C17.0488155,9.34170876 17.0488155,9.65829124 16.8535534,9.85355339 L14.2071068,12.5 L16.8535534,15.1464466 C17.0488155,15.3417088 17.0488155,15.6582912 16.8535534,15.8535534 C16.6582912,16.0488155 16.3417088,16.0488155 16.1464466,15.8535534 L13.5,13.2071068 L10.8535534,15.8535534 C10.6582912,16.0488155 10.3417088,16.0488155 10.1464466,15.8535534 C9.95118446,15.6582912 9.95118446,15.3417088 10.1464466,15.1464466 L12.7928932,12.5 L10.1464466,9.85355339 C9.95118446,9.65829124 9.95118446,9.34170876 10.1464466,9.14644661 C10.3417088,8.95118446 10.6582912,8.95118446 10.8535534,9.14644661 L13.5,11.7928932 L13.5,11.7928932 Z M7.28441797,17.4602766 C7.56940871,17.8022655 7.99158013,18 8.43674989,18 L19.5,18 C20.3284271,18 21,17.3284271 21,16.5 L21,8.5 C21,7.67157288 20.3284271,7 19.5,7 L8.43674989,7 C7.99158013,7 7.56940871,7.19773451 7.28441797,7.5397234 L3.15085414,12.5 L7.28441797,17.4602766 Z M2.11588936,12.1799078 L6.51619669,6.899539 C6.99118126,6.32955752 7.69480029,6 8.43674989,6 L19.5,6 C20.8807119,6 22,7.11928813 22,8.5 L22,16.5 C22,17.8807119 20.8807119,19 19.5,19 L8.43674989,19 C7.69480029,19 6.99118126,18.6704425 6.51619669,18.100461 L2.11588936,12.8200922 C1.96137021,12.6346692 1.96137021,12.3653308 2.11588936,12.1799078 Z"
              fill="#000" // Change color to white
            />
        </Svg>
    </View>
  );
};

export default DeleteButton;
