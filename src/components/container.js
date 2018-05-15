import React from 'react';
import '../App.css';

class container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-primary">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" alt="Image" /></div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-danger">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Image" /></div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-success">
                            <div className="panel-heading">BLACK FRIDAY DEAL</div>
                            <div className="panel-body"><img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" alt="Image" /></div>
                            <div className="panel-footer">Buy 50 mobiles and get a gift card</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default container;