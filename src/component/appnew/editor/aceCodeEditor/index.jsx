import React, { Fragment } from 'react';
import ACEEditorContain from './ACECodeEditor';
import Breadcrumbs from '../../../common/breadcrumb/breadcrumb';

const ACEEditor = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Editor" title=" ACE Code Editor" />
      <ACEEditorContain />
    </Fragment>
  );
};
export default ACEEditor;