import { Link } from "@tanstack/react-router";
import { Component } from "react";
class ErrorBoundary extends Component {
    state = {hasError: false}
    static getDerivedstateFromError() {
        return {hasError: true }
    }
    componentDidCatch(error,info){
        console.error("ErrorBoundary Caught an Error",error,info)
    }
    render (){
        if (this .state.hasError){
            return (
        <div className="error-boundary">
            <h2>Uh oh!</h2>
            <p>
                There was an with this page <Link to="/">click here to go back to the homepage</Link>
                
            </p>
        </div>
        )
    }
    return this.props.children;
    }
}
ErrorBoundary.getDerivedstateFromError()
export default ErrorBoundary 