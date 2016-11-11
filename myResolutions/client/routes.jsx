import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from './resolutions/MainLayout.jsx';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';

import About from './resolutions/About.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper name="my app"/>)
    });
  }
});

FlowRouter.route('/about', {
  action() {
    mount(MainLayout, {
      content: (<About/>)
    });
  }
});