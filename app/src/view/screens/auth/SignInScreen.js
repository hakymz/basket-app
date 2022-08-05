import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {s} from 'react-native-size-matters';
import {COLORS, FONTS} from '../../../conts';
import {Button} from '../../components/buttons';
import {Icons, Input, Text} from '../../components/general';
import {Formik} from 'formik';
import * as yup from 'yup';
import {fetchRequest} from '../../../helper';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please input email')
    .email('Please input a valid email'),
  password: yup.string().required('Please input password'),
});

const SocialMediaButton = ({icon, name}) => {
  return (
    <TouchableOpacity
      style={{
        height: s(48),
        width: s(140),
        borderColor: 'rgba(17, 45, 66, 0.45)',
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      {icon}
      <Text
        color={COLORS.dark}
        font={FONTS.semiBold}
        fontSize={18}
        style={{marginLeft: 15}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export const SignInScreen = ({navigation}) => {
  const signIn = async values => {
    try {
      const response = await fetchRequest({
        path: 'login',
        method: 'POST',
        showLoader: false,
        data: values,
      });
      console.log(response);
      if (response?.code == 200) {
        // updateUserData({loggedIn: true, data: {email: values.email}});
      } else {
        Alert.alert('error', response?.details);
      }
    } catch (error) {
      console.log(error);
    }

    // navigation.replace('HomeScreen');
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          paddingBottom: 50,
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={{height: s(48)}}
          />
          <Text
            fontSize={30}
            font={FONTS.bold}
            style={{marginTop: 20}}
            color={COLORS.dark}>
            Log into your account
          </Text>
          <Text
            fontSize={20}
            font={FONTS.regular}
            style={{marginTop: 20}}
            color={COLORS.dark}
            textAlign="center">
            Enter your email and password to access your account or create an
            account.
          </Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={values => {
              signIn(values);
            }}>
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              touched,
              setFieldTouched,
              setFieldValue,
            }) => (
              <View style={{marginTop: 50, flex: 1}}>
                <Input
                  icon={<Icons.Mail style={{left: 12}} />}
                  placeholder="Email"
                  value={values.email}
                  error={touched?.email && errors?.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email', true)}
                />
                <Input
                  icon={<Icons.Key style={{left: 12}} />}
                  placeholder="Password"
                  value={values.password}
                  error={touched?.password && errors?.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password', true)}
                  password
                />
                <View>
                  <Text fontSize={20} color="rgba(17, 45, 66, 0.62)">
                    Remember me
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Home');
                      // handleSubmit();
                    }}
                    title="LOGIN"
                    style={{marginTop: 30, width: 280}}
                    type="dark"
                  />
                  <Text
                    fontSize={20}
                    color={COLORS.primary}
                    style={{marginTop: 20, textDecorationLine: 'underline'}}>
                    Forgot password
                  </Text>

                  <Text
                    fontSize={16}
                    color="rgba(17, 45, 66, 0.62)"
                    style={{marginTop: 20}}>
                    - Or continue with -
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      marginTop: 20,
                    }}>
                    <SocialMediaButton
                      name="Facebook"
                      icon={<Icons.Facebook />}
                    />
                    <View style={{width: 10}} />
                    <SocialMediaButton name="Google" icon={<Icons.Google />} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      fontSize={20}
                      color={'rgba(17, 45, 66, 0.62)'}
                      style={{marginTop: 20, marginRight: 20}}>
                      Don’t have an account?
                    </Text>
                    <Text
                      fontSize={20}
                      color={COLORS.primary}
                      style={{marginTop: 20}}>
                      Sign Up
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
