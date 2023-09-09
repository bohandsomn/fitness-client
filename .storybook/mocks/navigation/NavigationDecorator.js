import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * Helper component tor create a Dummy Stack to access {navigation} object on *.story.tsx files
 *
 * @usage add this decorator
 * ```
 * .addDecorator(NavigationDecorator)
 * ```
 */

// const StoryBookStack = createStackNavigator();
// or the native one
const StoryBookStack = createNativeStackNavigator();

export const NavigationDecorator = (Story) => {
  const Screen = () => <Story />;
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{header: () => null}}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
};