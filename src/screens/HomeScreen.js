import React from 'react';
import {View} from 'react-native';
import WorkChart from '../components/workChart';

// eslint-disable-next-line no-undef
state = {
  wokrChartData: [
    {
      title: 'New',
      value: 10,
      progress: 0.1,
      progressColor: '#e0e047',
    },
    {
      title: 'In Progress',
      value: 54,
      progress: 0.54,
      progressColor: '#66183e',
    },
    {
      title: 'Closed',
      value: 30,
      progress: 0.3,
      progressColor: '#286978',
    },
  ],
  progressData: [
    {
      title: 'Develope',
      value: 50,
      progress: 0.5,
      progressColor: '#12ade4',
    },
    {
      title: 'Testing',
      value: 90,
      progress: 0.9,
      progressColor: '#abcd28',
    },
    {
      title: 'Errors',
      value: 30,
      progress: 0.3,
      progressColor: '#de1231',
    },
  ],
};
const HomeScreen = () => {
  return (
    <View>
      <WorkChart WorkData={this.state.wokrChartData} />
      <WorkChart WorkData={this.state.progressData} />
    </View>
  );
};

export default HomeScreen;
