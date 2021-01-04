/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

function CustomProgressChart({ chartData, chartDimensions }) {
  return chartDimensions ? (
    <ProgressCircle
      progress={chartData}
      progressColor="rgba(175, 220, 139, 0.7)"
      backgroundColor="rgba(175, 220, 139, 0.1)"
      strokeWidth={14}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  );
}

CustomProgressChart.propTypes = {
  chartData: PropTypes.number.isRequired,
  chartDimensions: PropTypes.arrayOf(PropTypes.number),
};

export default CustomProgressChart;
