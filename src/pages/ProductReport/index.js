import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { RectButton } from 'react-native-gesture-handler';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import featuredImage from '../../assets/images/bike.jpg';
import CustomLineChart from '../../components/CustomLineChart';

import { productReportData } from '../../helpers/chartData';

function ProductReport() {
  const [reportDimensions, setReportDimensions] = useState(null);

  return (
    <>
      <StatusBar backgroundColor={styles.container.backgroundColor} />
      <View style={styles.container}>
        <View style={styles.featuredContainer}>
          <Image
            style={styles.featuredImage}
            source={featuredImage}
            resizeMode="cover"
          />
          <View style={styles.featuredProductContainer}>
            <Text style={styles.featuredProductName}>Tigaroda oye bike</Text>
            <View style={styles.featuredProductPublishContainer}>
              <AntDesign
                name="clockcircleo"
                style={styles.featuredProductPublishIcon}
              />
              <Text style={styles.featuredProductPublishText}>Publicado</Text>
              <Text style={styles.featuredProductPublishDate}>15 Nov 2020</Text>
            </View>
          </View>
          <View style={styles.indicator} />
        </View>
        <View style={styles.reportContainer}>
          <Text style={styles.reportTitle}>Relatório de Vendas</Text>
          <Text style={styles.reportDescription}>
            Esse é um sumário das vendas do seu produto em uma semana de acordo
            com a renda que você teve
          </Text>
          <View
            onLayout={({
              nativeEvent: {
                layout: { width, height },
              },
            }) => setReportDimensions({ width, height })}
            style={[
              styles.reportChart,
              reportDimensions
                ? styles.reportChartWithData
                : styles.reportChartWithoutData,
            ]}
          >
            <CustomLineChart
              chartData={productReportData}
              chartDimensions={reportDimensions}
            />
          </View>
          <RectButton style={styles.reportButton}>
            <Text style={styles.reportButtonText}>Ver Relatório Completo</Text>
          </RectButton>
        </View>
      </View>
    </>
  );
}

export default ProductReport;
