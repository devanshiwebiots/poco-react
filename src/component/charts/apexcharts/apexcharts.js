import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import ReactApexChart from "react-apexcharts";
import { areaSpaline, apexAreaChart, apexColumnChartsone, apexPieChart, apex3DbubbleCharts, apexRadialBarChart, apexCandleStickCharts, apexRadarPolygonfillCharts, apexSteplineChart, apexLineWithAnnotationCharts, apexDonutCharts, apexMixedCharts, apexBarChart } from "./apexchartsData";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
const Apexcharts = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent='Charts' title='Apex Chart' />
      <Container fluid={true} className='charts-wrapper'>
        <Row>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Basic Area Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='basic-apex'>
                  <ReactApexChart options={apexAreaChart.options} series={apexAreaChart.series} type='area' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Area Spaline Chart </h5>
              </CardHeader>
              <CardBody>
                <ReactApexChart options={areaSpaline.options} series={areaSpaline.series} height='350' type='area' />
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Bar chart</h5>
              </CardHeader>
              <CardBody>
                <div id='basic-bar'>
                  <ReactApexChart options={apexBarChart.options} series={apexBarChart.series} type='bar' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Column Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='column-chart'>
                  <ReactApexChart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type='bar' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>3d Bubble Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='chart-bubble'>
                  <ReactApexChart options={apex3DbubbleCharts.options} series={apex3DbubbleCharts.series} type='bubble' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Candlestick Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='candlestick'>
                  <ReactApexChart options={apexCandleStickCharts.options} series={apexCandleStickCharts.series} type='candlestick' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Stepline Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='stepline'>
                  <ReactApexChart options={apexSteplineChart.options} series={apexSteplineChart.series} type='line' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Column Chart</h5>
              </CardHeader>
              <CardBody>
                <div id='annotationchart'>
                  <ReactApexChart options={apexLineWithAnnotationCharts.options} series={apexLineWithAnnotationCharts.series} type='line' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6'>
            <Card>
              <CardHeader>
                <h5>Pie Chart</h5>
              </CardHeader>
              <CardBody className='apex-chart'>
                <div id='piechart'>
                  <ReactApexChart options={apexPieChart} series={apexPieChart.series} type='pie' width={380} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6'>
            <Card>
              <CardHeader>
                <h5>Donut Chart</h5>
              </CardHeader>
              <CardBody className='apex-chart'>
                <div id='donutchart'>
                  <ReactApexChart options={apexDonutCharts} series={apexDonutCharts.series} type='donut' width={380} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>Mixed Chart</h5>
              </CardHeader>
              <CardBody>
                <div id='mixedchart'>
                  <ReactApexChart options={apexMixedCharts.options} series={apexMixedCharts.series} type='line' height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Radar Chart </h5>
              </CardHeader>
              <CardBody>
                <div id='radarchart'>
                  <ReactApexChart options={apexRadarPolygonfillCharts} series={apexRadarPolygonfillCharts.series} type="radar" height={310} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm='12' xl='6  xl-100'>
            <Card>
              <CardHeader>
                <h5>Radial Bar Chart</h5>
              </CardHeader>
              <CardBody>
                <div id='circlechart'>
                <ReactApexChart options={apexRadialBarChart} series={apexRadialBarChart.series} type="radialBar" height={350} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Apexcharts;
