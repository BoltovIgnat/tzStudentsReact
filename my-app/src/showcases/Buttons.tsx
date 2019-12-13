
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'


const ButtonsShowcase: React.FC = () => <div className="p-1">
    <Button variant="primary" className="mr-1">Primary</Button>
    <Button variant="secondary" className="mr-1">Secondary</Button>
    <Button variant="success" className="mr-1">Success</Button>
    <Button variant="warning" className="mr-1">Warning</Button>
    <Button variant="danger" className="mr-1">Danger</Button>
    <Button variant="info" className="mr-1">Info</Button>
    <Button variant="light" className="mr-1">Light</Button>
    <Button variant="dark" className="mr-1">Dark</Button>
    <Button variant="link" className="mr-1">Link</Button>
</div>

export default { ButtonsShowcase }

function Collapseit() {
    const [open, setOpen] = useState(true);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </>
    );
  }

export { Collapseit }