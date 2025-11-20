import { useThemeColor } from '@/hooks/use-theme-color';
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type SafeAreaBackgroundProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  children: ReactNode;
};

const SafeAreaBackground = ({ children, style, lightColor, darkColor, ...props }: SafeAreaBackgroundProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return (
        <SafeAreaView {...props} style={[{ backgroundColor, flex: 1 }, style]}>
            {children}
        </SafeAreaView>
    )
}

export default SafeAreaBackground