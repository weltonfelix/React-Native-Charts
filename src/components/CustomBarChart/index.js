/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import { BarChart } from 'react-native-svg-charts';

function CustomBarChart({ chartData, chartDimensions }) {
  return chartDimensions ? (
    <BarChart
      data={chartData}
      svg={{ fill: 'rgba(175, 220, 139, 0.7)' }}
      yMin={0}
      yAccessor={({ item }) => item.value}
      spacingInner={0.25}
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

CustomBarChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      svg: PropTypes.shape({
        fill: PropTypes.string,
      }),
    }),
  ).isRequired,
  chartDimensions: PropTypes.arrayOf(PropTypes.number),
};

export default CustomBarChart;
