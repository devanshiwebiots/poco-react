import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import { Javadata } from './data';

const JavascriptMode = () => {
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <CardHeader>
            <h5>Javascript Mode</h5>
          </CardHeader>
          <CardBody>
            <AceEditor
              style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }}
              mode="javascript"
              theme="monokai"
              value={Javadata}
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              setOptions={{ useWorker: false }}
              editorProps={{ $blockScrolling: true }}
              highlightActiveLine={true} />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default JavascriptMode;