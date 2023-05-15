import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../assets/Background';
import Btn from '../assets/btn';
import Field from '../assets/Field';
import User from './User';

const Signup = props => {
    return (
      <Background>
        <View style={{alignItems: 'center', width: 460}}>
          <Text
            style={{
              color: 'white',
              fontSize: 64,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create a new account
          </Text>
          <View
            style={{
              backgroundColor: '#318eab',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <Field placeholder="First Name" />
            <Field placeholder="Last Name" />
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <Field placeholder="Password" secureTextEntry={true} />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '78%',
                paddingRight: 16
              }}>
              <Text style={{color: 'white', fontSize: 15}}>
                By signing in, you agree to{' '}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Terms & Conditions
              </Text>
            </View>
  
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent :"center",
                width: '78%',
                paddingRight: 16,
                marginBottom: 10
              }}>
              <Text style={{color: 'white', fontSize: 16}}>
                and {" "}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Privacy Policy
              </Text>
            </View>
            <Btn
              textColor="black"
              bgColor={'white'}
              btnLabel="Signup"
              Press={() => {
                alert('Account created');
                props.navigation.navigate('Login');
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{color:'white',fontSize: 16, fontWeight: 'bold'}}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{color:'white', fontWeight: 'bold', fontSize: 16}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    );
  };
  
  export default Signup;