import React from 'react'
import { Button, Nav, Tab, Container, Row, Col,Stack } from 'react-bootstrap';

const OrderContents = () => {
  return (
    <Stack className="mt-3"  direction="horizontal" gap={3}>
      <div className="p-2">
        <div className="card-body bg-info">
            <p> hello </p>
      </div>
      </div>
      <div className="p-2 ms-auto">Second item 2</div>
      <div className="p-2">Third item 2</div>
    </Stack>
  )
}

export default OrderContents