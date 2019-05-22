import React, { Component } from 'react';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
const style = {
    width: '350px',
    marginLeft: '20px',
    marginTop: '20px',
    display: 'inline-block'
  };
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          hasError: false,
          error: null, errorInfo: null
        };
      }
      componentDidCatch(error, info) {
        this.setState({
          hasError: true,
          error:error
        }, console.log(this.props));
      }
    render() {
        if(this.state.hasError) {
            return (
              <Card style={style}>
                <CardMedia
                  aspectRatio="wide"
                  image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
                />
                <CardTitle
                  title="Sorry Something went wrong!!!"
                  subtitle="Error catched by error boundary of react 16"
                />
                
              </Card>
            );
          }
          return this.props.children;
        }
}

export default ErrorBoundary;