/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

const screenWidth = Math.round(Dimensions.get('window').width);
const firstOuterRing = screenWidth / 2;
const secondOuterRing = screenWidth / 2.55;
const thirdOuterRing = screenWidth / 3;

export default class WorkChart extends React.Component {
  render() {
    const workData = this.props.WorkData;
    const average = (
      (workData[0].value + workData[1].value + workData[2].value) /
      3
    ).toFixed(2);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.legendHeader}>Services</Text>
          <View style={{flexDirection: 'row', flex: 2}}>
            <View
              style={[
                styles.lengendContainer,
                {backgroundColor: workData[0].progressColor},
              ]}
            />
            <Text style={styles.legendText}>
              {workData[0].title + ' (' + workData[0].value + ') '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flex: 2}}>
            <View
              style={[
                styles.lengendContainer,
                {backgroundColor: workData[1].progressColor},
              ]}
            />
            <Text style={styles.legendText}>
              {workData[1].title + ' (' + workData[1].value + ') '}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flex: 2}}>
            <View
              style={[
                styles.lengendContainer,
                {backgroundColor: workData[2].progressColor},
              ]}
            />
            <Text style={styles.legendText}>
              {workData[2].title + ' (' + workData[2].value + ') '}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 15}}>
          <ProgressCircle
            style={{height: firstOuterRing, zIndex: 10}}
            progress={workData[0].progress}
            backgroundColor="#fff"
            strokeWidth={8}
            progressColor={workData[0].progressColor}
          />
          <ProgressCircle
            style={{
              height: secondOuterRing,
              zIndex: 50,
              top: -(screenWidth / 2.25),
            }}
            progress={workData[1].progress}
            backgroundColor="#fff"
            strokeWidth={8}
            progressColor={workData[1].progressColor}
          />
          <ProgressCircle
            style={{
              height: thirdOuterRing,
              top: -(screenWidth / 1.24),
              position: 'relative',
              zIndex: 100,
            }}
            progress={workData[2].progress}
            backgroundColor="#fff"
            strokeWidth={8}
            progressColor={workData[2].progressColor}
          />
          <Text style={styles.averageText}>{average}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 25,
    flexDirection: 'row',
    margin: 20,
    height: screenWidth / 1.8,
    justifyContent: 'space-around',
    backgroundColor: '#e8e8e8',
  },
  subContainer: {
    flex: 1,
    width: (screenWidth - 40) / 2,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    height: screenWidth / 2.5,
    marginTop: 20,
  },
  lengendContainer: {
    borderRadius: 10,
    height: 30,
    width: 30,
    marginHorizontal: 10,
    marginBottom: 7,
  },
  legendText: {
    textAlignVertical: 'center',
    marginTop: 5,
    fontWeight: '500',
    fontSize: 15,
  },
  legendHeader: {
    flex: 3,
    alignSelf: 'stretch',
    marginHorizontal: 15,
    fontSize: 25,
    fontWeight: '600',
  },
  averageText: {
    alignSelf: 'center',
    top: -(screenWidth / 1),
    fontSize: 30,
    fontWeight: '600',
    marginTop: -7,
  },
});
