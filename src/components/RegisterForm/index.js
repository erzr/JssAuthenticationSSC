import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const RegisterForm = ({rendering}) => (
  <div className="row">
    <div className="col-md-6">
      <h2>Why you should register</h2>
      <hr />
      <p>Quisque tempus auctor nisi quis auctor. In eleifend ante vel elementum egestas. Nullam eu enim sed nisl dignissim vulputate eu a est. Donec molestie placerat luctus. Cras ut velit risus. Vivamus in elementum nisi. Cras nisi lectus, convallis id risus sit amet, vulputate tempus est. Vestibulum mollis libero lacus, eu ullamcorper quam tempor vel. Vestibulum malesuada aliquet velit, nec vulputate ex lobortis quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean bibendum enim vel est feugiat, eget suscipit mauris efficitur. Quisque feugiat ultrices odio vel egestas. Fusce leo mauris, tristique id lacus sed, placerat condimentum felis. Pellentesque sed elit facilisis, fringilla nisi ut, venenatis elit.</p>
    </div>
    <div className="col-md-6">
      <Placeholder name="jss-form" rendering={rendering} />
    </div>
  </div>
);

export default RegisterForm;
