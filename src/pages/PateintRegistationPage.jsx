import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  Alert,
} from 'reactstrap';
import Typography from 'components/Typography';
import {
    FaPlusSquare

  } from 'react-icons/fa';

const FormPage = () => {
  return (
    <Page title="Patient Regsitration" >
        
        <Typography type="h6">Patient Regsitration</Typography>
        <Alert color="primary">
        All Information with Asterisks(*) are compulsory 
      </Alert>
    <Form>
         {/* First  row form entry  for Demographics*/}
        <Row>
        <Col xl={12} lg={12} md={12}>
            <Card>
                <CardHeader className="text-info">Demographics</CardHeader>
                <CardBody>
                
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="firstName">Fist Name</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="middleName">Middle Name</Label>
                                <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="lastName">Last Name </Label>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                            </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="occupation">Ocuupation</Label>
                                <Input type="select" name="occupation">
                                    <option>Students</option>
                                    <option>Business</option>
                                    <option>Government</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="qualification">Hightest Qualification</Label>
                                <Input type="select" name="qualification">
                                    <option>PHD</option>
                                    <option>MSC</option>
                                    <option>BSC</option>
                                    <option>HND</option>
                                    <option>NCE</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="maritalStatus">Marital Status</Label>
                                <Input type="select" name="maritalStatus">
                                    <option>Signle</option>
                                    <option>Married</option>
                                    <option>Divorce</option>
                                </Input>
                            </FormGroup>  
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="DateOfBirth">Date of Birth</Label>
                                <Input type="text" name="DateOfBirth" id="lastName" placeholder="Date of Birth" />
                            </FormGroup>
                            </Col>
                    
                        </Row>
                        
                </CardBody>
            </Card>
            </Col>
        </Row>
        {/* Second row form entry  for contact details*/}
        <Row>
        <Col xl={12} lg={12} md={12}>
            <Card>
                <CardHeader className="text-info">Contact Details</CardHeader>
                <CardBody>
                
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="altPhoneNumber">Alt. Phone Number</Label>
                                <Input type="text" name="altPhoneNumber" id="altPhoneNumber" placeholder="Alternative Number" />
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="emailAddress">Email Address</Label>
                                <Input type="email" name="emailAddress" id="emailAddress" placeholder="Email Address" />
                            </FormGroup>
                            </Col>
                        </Row>


                </CardBody>
            </Card>
            </Col>
        </Row>

    {/* Third  row form entry  for Contact Address*/}
    <Row>
        <Col xl={12} lg={12} md={12}>
            <Card>
                <CardHeader className="text-info">Address</CardHeader>
                <CardBody>
                
                        <Row form>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="stressAddress">Street Address</Label>
                                <Input type="text" name="stressAddress" id="stressAddress" placeholder="Stress Address" />
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input type="text" name="city" id="city" placeholder="City" />
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="country">Country</Label>
                                <Input type="select" name="maritalStatus">
                                    <option>Africa</option>
                                    <option>Asia</option>
                                    <option>America</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={3}>
                            <FormGroup>
                                <Label for="counstatetry">State / Region</Label>
                                <Input type="select" name="state">
                                    <option>Africa</option>
                                    <option>Asia</option>
                                    <option>America</option>
                                </Input>
                            </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row form>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="lga">Province/District/LGA </Label>
                                <Input type="select" name="lga">
                                    <option>Students</option>
                                    <option>Business</option>
                                    <option>Government</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                <Label for="landMark">Land Mark</Label>
                                <Input type="text" name="landMark" id="landMark" placeholder="Land Mark" />
                            </FormGroup>
                            </Col>
                            
                        </Row>
                </CardBody>
            </Card>
            </Col>
        </Row>
         {/* fourth  row form entry  for Relatives*/}
         <Row>
            <Col xl={12} lg={12} md={12}>
                <Card>
                    <CardHeader className="text-info">Patient Relative
                        <Button color="primary" className=" float-right mr-1" >
                        <FaPlusSquare/>Add Relative 
                        </Button>
                    </CardHeader>
                    <CardBody>
                    
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="firstName">Fist Name</Label>
                                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="middleName">Middle Name</Label>
                                    <Input type="text" name="middleName" id="middleName" placeholder="Middle Name" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="lastName">Last Name </Label>
                                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                </FormGroup>
                                </Col>
                            </Row>
                            
                            <Row form>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="phoneRelative">Phone No.</Label>
                                    <Input type="text" name="phoneRelative" id="phoneRelative" placeholder="Relative Phone No." />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="relativeEmail">Email Address</Label>
                                    <Input type="text" name="relativeEmail" id="relativeEmail" placeholder="Relative Email Address" />
                                </FormGroup>
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="relativeAddress">Physical Address</Label>
                                    <Input type="text" name="relativeAddress" id="relativeAddress" placeholder="Relative Physical Address" />
                                </FormGroup>  
                                </Col>
                            </Row>
                            
                            <Button color="success">Submit</Button> { ' ' } <Button link="dark">Cancel</Button>
        
                            <FormFeedback></FormFeedback>        
                    </CardBody>
                </Card>
                </Col>
            </Row>
    </Form>
</Page>
  );
};

export default FormPage;
