import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  Row,
  Table
} from 'reactstrap';
import Typography from 'components/Typography';

import {
    FaUsers,FaListAlt, FaUserCheck

  } from 'react-icons/fa';
  import SearchInput from 'components/SearchInput';


const CheckInPage = () => {
  return (
    <Page
      title="General Clinic "
      className="TablePage"
    >
        
        <Typography type="h6">{ ' ' }</Typography>
    

        
         <Row>
         <Col xl={6} lg={6} md={6}>Find Patient</Col>
         <Col xl={6} lg={6} md={6}>
            <div>
                <Button color="info" className=" float-right mr-1" >
                        <FaUsers/>  Checked In Patients 
                </Button>
            </div>
        </Col>
        </Row>
        <Form>
            <Row>
                <Col xl={12} lg={12} md={12}>
                
                    <Card style={{ backgroundColor: '#D1D1D1'}}>
                        
                        <CardBody >
                        <SearchInput />
                        </CardBody>
                    </Card>
                    </Col>
            </Row>
    </Form>

  
        <Row >
          <Col>
            <Card className="mb-12">
              <CardHeader>List of Patient</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                    <Table responsive>
                        <thead>
                          <tr>
                            <th>S/No</th>
                            <th>Patient ID</th>
                            <th>Patient Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>pat/123455</td>
                            <td>Alex Samuel</td>
                            <td><FaListAlt />{' '} <FaUserCheck /> </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>pat/44333</td>
                            <td>Thornton Edward</td>
                            <td><FaListAlt />{' '} <FaUserCheck /></td>
                          </tr>
                          
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
   
</Page>
  );
};

export default CheckInPage;
